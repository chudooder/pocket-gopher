class VeryGoodChrisJokeGenerator {

    // None of the following opinions or jokes are actually my own
    // I love everyone

    jokeStyleFunctions = [
        string => `haha ${string} ligma`,
        string => `cock ligma ${string} ligma cock`,
        string => `haha ligma this ${string} luis stinks like poo`,
        string => `haha luis ${string} at dode`,
        string => `i hope we nuke a ${string}`,
        string => `ligma balls u stupid ${string} haha gotem`
    ];

    funnyWords = [
        "luis",
        "cheese grater",
        "commie",
        "libtard",
        "bruh",
        "epic"
    ];

    initialize(client) {
        client.on('message', message => {
            if (/\w*(chris joke)+\w*/.test(message.content)) {
                message.channel.send(this.chrisJoke());
            }
        })
    }

    chrisJoke() {
        // Are these allowed to be outside of the class or does this only make me puke?
        const aJokeChrisMightLike = this.jokeStyleFunctions[this.randomNumbersStink(0, this.jokeStyleFunctions.length)];
        const aWordChrisMightLike = this.funnyWords[this.randomNumbersStink(0, this.funnyWords.length)];
        return aJokeChrisMightLike(aWordChrisMightLike);
    }

    // I hate class methods
    randomNumbersStink(low, highExcluded) {
        return ~~((Math.random()) * (highExcluded - low) + low)
    }
}

module.exports = VeryGoodChrisJokeGenerator