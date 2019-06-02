class PingModule {

  // Register listeners here
  initialize(client) {
    client.on('message', message => {
      if (message.content === 'ping') {
        message.channel.send('pong');
      }
    })
  }
}

module.exports = PingModule;