import {CLEARFILTERED, FILTERED, SEARCHTEXTFILTERED, CLEARSEARCHTEXTFILTERED } from "./actionType" 
import { posts } from "../../../data"
const initialState = {
        allPost: posts,
        filterPost: posts,
        search: "", // eduction etc title 
        filterBy: {}
};

const reducer = (state = initialState, action) =>{
        switch (action.type) {
            case SEARCHTEXTFILTERED:
             return{
                ...state,
                search: action.payload
             }

            case FILTERED:
                // action.payload er vitore filterd pabo payload hisebe
                // then ter moddhe value, name ai name e duita property thakbe
                const { name, value} = action.payload ;
                let newPosts = [...state.allPost]
                let filterBy = {};
                if(name === 'author'){
                   newPosts = newPosts.filter((post)=> {
                     post.author.id === value.id
                   })
                   filterBy[name] = value; 
                } else if (name === 'search'){
                 newPosts = newPosts.filter((post)=>{
                    post.title.toLowerCase.includes(value.toLowerCase())
                 })
                } else{
                    newPosts = newPosts.filter((post)=> post[name] === value); // post er vitore name property nia ter moddhe value ta k add kore dilam
                }

             return{
                 ...state,
                 allPost: newPosts,
                 filterBy
             }

            case CLEARSEARCHTEXTFILTERED:
             return{
                ...state,
                search: ""
             }

            case CLEARFILTERED:
             return{
                ...state,
                filterBy: {},
                search: "",
                // allPost: state.posts,
             }
        
            default:
               return state;
        }
    
}