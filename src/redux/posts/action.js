import {CLEARFILTERED, FILTERED, SEARCHTEXTFILTERED, CLEARSEARCHTEXTFILTERED } from "./actionType" 


const searchTextFilter = (textSearch)=>{
    return {
        type: SEARCHTEXTFILTERED,
        payload: textSearch,
    }
}

const filtered = (filterBy)=>{
    return {
        type: FILTERED ,
        payload: filterBy ,//akhane filter kore array dtheke kisu obj nia onno akta object e rakhbo
    }
}

//  clear er kaj gulo holo text clear hower sathe sathe filter o clear hobe
const clearFiltered = ()=>{
    return {
        type: CLEARFILTERED ,  
    }
}

const clearSearchText = ()=>{
    return {
        type: CLEARSEARCHTEXTFILTERED,
       
    }
}