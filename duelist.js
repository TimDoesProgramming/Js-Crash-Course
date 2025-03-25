export class Duelist {
    constructor(name, retired, deck, quote, catchPhrase) {
        this.name = name;
        this.retired = retired;
        this.deck = deck;
        this.quote = quote;
        this.catchPhrase = catchPhrase;
    }

    name(){
        return this.name;
    }
    retired(){
        return this.retired;
    }
    deck(){
        return this.deck;
    }
    quote(){
        return this.quote;
    }
    catchPhrase(){
        return this.catchPhrase;
    }
}