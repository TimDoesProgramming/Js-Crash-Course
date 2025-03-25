import {Duelist} from "./duelist.js";


export function activeDuelists(duelists){
    return duelists.filter((duelist) =>
        duelist.retired === false
    )
}
export function retiredDuelists(duelists){
    return duelists.filter((duelist) => {
        return duelist.retired === true;
    });
}