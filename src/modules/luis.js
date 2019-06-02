class LuisModule {

  // Register listeners here
  initialize(client) {
    this.luisEmote = client.emojis.find(emoji => emoji.name === "Lface");
    if(this.luisEmote == null) {
      console.log('could not find luis face');
    }

    client.on('message', message => {
      if (message.content.includes('Luis')) {
        message.react(this.luisEmote.id);
        message.channel.send('\u30A2\u30DB');
      }
    })
  }
}

module.exports = LuisModule;
