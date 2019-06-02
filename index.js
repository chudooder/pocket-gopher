const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

const MODULES_PATH = './src/modules/';

const client = new Discord.Client();

client.on('ready', () => {
  // load modules
  var botConfig = JSON.parse(fs.readFileSync('bot_config.json', 'utf8'));
  console.log('Loading modules: ', botConfig.enabled_modules);
  botConfig.enabled_modules.forEach((moduleName) => {
    const mod = require(MODULES_PATH + moduleName + '.js');
    const instance = new mod();
    instance.initialize(client);
    console.log(' - ' + moduleName + '.js loaded successfully');
  });
  
  console.log('I am ready!');
})




client.login(process.env.TOKEN);

