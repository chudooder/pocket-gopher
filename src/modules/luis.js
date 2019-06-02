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
      }
    })
  }
}

module.exports = LuisModule;