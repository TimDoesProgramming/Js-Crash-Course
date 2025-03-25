# Js-Crash-Course

## Add js file to html
- Add the js file using src in the script tag
- the file path is relative to the project location  
```html
<script src='filepath here'></script>
```

## Primitive types
- String, Numbers, Boolean, Null, Undefined, and Object  

## Assignment
- Don't use var as it has a global scope(function wide or global if it is outside of a function)  
- Const for constants(can't be reassigned)  
- let for variables  

## Array methods
- push() - adds to the end  
- Pop() - returns and removes object from then end of the array  
- unshift() - adds to front  

## Object Literals
- assigned with curly braces  
- Values inside almost follow the JSON format but the member names are not in double quotes
```JavaScript
let duelist = {
    name: 'Yugi',
    isRetired: false,
    deck: 'Dark Magician',
    quote: "\"My grandpa's deck has no weak cards Kaiba!\"",
    catchPhrase: '"It\'s Time to Duel!"'
}
"Note the difference in double quotes vs single quotes during String assignment. They have different requirements for escape keys"
```
Members of the Object can be pulled out by assigning the member variables keys to the object like so:
```JavaScript
const {name, isRetired} = duelist;

"This pulls the values out of the object into the broader scope. They have the same key and value as the selected properties from the duelist object"
```

## For Loops

### Basic for loop
- Similar to most other languages following the for(variable, condition, increment) format
```js
for(let i = 0; i < 5; i++){
    console.log(i);
}
```

### for Each loop
- There are a couple types of foreach loops 
#### for of loops
- use the of keyword
```js
const duelists = ['Yugi, Kaiba, Joey'];

for(duelist of duelists){
    console.log('for of loop: '+duelist);
}
```
#### forEach function with a function parameter
- Does not use the for keyword but the foreach function instead which is a method of the array class and takes a function as a parameter
```js
const duelists = ['Yugi, Kaiba, Joey'];
duelists.forEach( function (_duelist) {
    console.log('anonymous function: '+_duelist);
});
```
#### forEach function with an arrow function
- Does not use the for keyword but the foreach function instead which is a method of the array class and takes an arrow function as a parameter
```js
const duelists = ['Yugi, Kaiba, Joey'];
duelists.forEach( duelist => console.log('arrow function: ' + duelist));
```
## While loops
- similar to other languages, only a condition as a parameter
```js
const duelists = ['Yugi, Kaiba, Joey'];
while(duelists.length > 0){
    console.log('While loop: '+duelists.pop());
}
```

## map
- the map function can return values from objects in a list
- it takes a function as an argument
```js
function getDecks(duelists){
    return duelists.map(duelist => {
        return duelist.deck;
    })
}
```

## filter
- The filter function will return a filtered list of objects based on some condition
- it takes a function as an argument
```js
function retiredDuelists(duelists){
    return duelists.filter((duelist) => {
        return duelist.retired === true;
    });
}
```

## Conditionals

- uses if statements for conditionals
- '==' checks the value
- '===' checks the value and the data type
- uses >, <, <=, and => in the same way other languages do
- uses ternary operators using the **condition** ? **true result** : **false result**

## switches
- same as in other languages
- default is available
- break keyword is available

## Functions
- declared with function keyword
- default values can be assigned to the function
```js
function printText(text = 'hi'){
    console.log(text);
}
//calling printText() will print hi
printText();
//printText('Hello World') will overwrite the default with Hello World
printText('Hello World');
```
- functions can also be used as sudo classes
- we can also add functions to the class using the prototype attribute
- This is from es5 and does the same thing as classes
```js
function Duelist(name, deck, deckSize, retired){
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
const duelist = new Duelist('Yugi', 'Dark Magician', 40, false);

if(duelist.isDeckSizeLegal())
    console.log(`it's legal and the deck size is ${duelist.deckSize}`);
else
    console.log(`You can't have a deck size of ${duelist.deckSize}`);

Duelist.prototype.isActive = function(){
    if(this.isRetired)
        console.log(`${this.name} is retired!`);
    else
        console.log(`${this.name} is still active!`);
}

```
## Classes
- uses the class key word
- needs a constructor which uses the constructor keyword
- can add methods to the class without the function keyword
- 
```js
class Duelist {
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

```


## Arrow functions
- Can be assigned to a variable
- declared with the arrow =>
- parameters come before the arrow
- result comes after
```js
    const arrowFunction = (text='hi') => console.log(text);
    //This will print hi
    arrowFunction();
    //This will print Hello World
    arrowFunction('Hello World');
```

## DOM

