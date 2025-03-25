const duelists = ['Yugi, Kaiba, Joey'];

void function printDuelistWithForOf() {
    for(duelist of duelists){
        console.log('for of loop: '+duelist);
    }
}
void function printDuelistWithForEach(){
    duelists.forEach( function (_duelist) {
        console.log('anonymous function: '+_duelist);
    });
}

void function printDuelistWithForEach() {
    duelists.forEach(duelist => console.log('arrow function: ' + duelist));
}
void function printDuelistWithWhile() {
    while (duelists.length > 0) {
        console.log('While loop: ' + duelists.pop());
    }
}