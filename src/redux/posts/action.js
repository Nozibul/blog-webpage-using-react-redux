import {CLEARFILTERED, FILTERED, SEARCHTEXTFILTERED, CLEARSEARCHTEXTFILTERED } from "./actionType" 


export const searchTextFilter = (textSearch)=>{
    return {
        type: SEARCHTEXTFILTERED,
        payload: textSearch,
    }
}

export const filtered = (filterBy)=>{
    return {
        type: FILTERED ,
        payload: filterBy ,//akhane filter kore array dtheke kisu obj nia onno akta object e rakhbo
    }
}

//  clear er kaj gulo holo text clear hower sathe sathe filter o clear hobe
export const clearFiltered = ()=>{
    return {
        type: CLEARFILTERED ,  
    }
}

export const clearSearchText = ()=>{
    return {
        type: CLEARSEARCHTEXTFILTERED,
       
    }
}

