import {Duelist} from "./duelist.js";


export function getDecks(duelists){
    return duelists.map(duelist => {
        return duelist.deck;
    })
}