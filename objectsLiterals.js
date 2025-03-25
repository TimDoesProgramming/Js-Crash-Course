let duelistLiteral = {
    name: 'Yugi',
    isRetired: false,
    deck: 'Dark Magician',
    quote: "\"My grandpa's deck has no weak cards Kaiba!\"",
    catchPhrase: '"It\'s Time to Duel!"'
}

const {name, quote, catchPhrase} = duelistLiteral;

export function printDuelist() {
    console.log('Name: ' + name + '\n','quote: '+ quote + "\n",'catchPhrase:'+ catchPhrase);
}

void function printEachDeckChar(){
    for(let i = 0; i< duelist.deck.length; i++) {
        console.log(i+1);
    }
}
