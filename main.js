import {printDuelist} from "./objectsLiterals.js";
import {activeDuelists} from "./filter.js";
import {getDecks} from "./map.js";
import {Duelist} from "./duelist.js";

let duelists =  [
    new Duelist(
        'Yugi',
        false ,
        'Dark Magician',
        '"My grandpa\'s deck has no pathetic cards Kaiba!"',
        '"The heart of the cards"'),
    new Duelist(
        'Kaiba',
        false ,
        'Blue-eyes',
        'Must you be so dramatic?',
        'Blah, blah, blah.'),
    new Duelist(
        'Solomon',
        true,
        'Dark Magician',
        'Here it is, the Blue-Eyes White Dragon',
        'Yuuugggiiiiii'
    )


];

printDuelist();
console.log('All duelists:' ,duelists);
console.log('Active duelists: ',activeDuelists(duelists));
console.log('Decks: ',getDecks(duelists));
const arrowFunction = (text='hi') => console.log(text);
arrowFunction();

function Duelist2(name, deck, deckSize, isRetired){
    this.name = name;
    this.deck = deck;
    this.deckSize = deckSize;
    this.retired = isRetired;
    this.isDeckSizeLegal = function(){
        if(deckSize >= 40 && deckSize <= 60)
            return true;
        else
            return false;
    }

}
const duelist = new Duelist2('Yugi', 'Dark Magician', 40, false);

if(duelist.isDeckSizeLegal())
    console.log(`it's legal and the deck size is ${duelist.deckSize}`);
else
    console.log(`You can't have a deck size of ${duelist.deckSize}`);

Duelist2.prototype.isActive = function(){
    if (this.isRetired)
        console.log(`${this.name} is retired!`);
    else
        console.log(`${this.name} is still active!`);
}
duelist.isActive();