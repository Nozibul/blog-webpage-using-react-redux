import {CLEARFILTERED, FILTERED, SEARCHTEXTFILTERED, CLEARSEARCHTEXTFILTERED } from "./actionType" 
import { posts } from "../../../data"
const initialState = {
        allPost: posts,
        filterPost: posts,
        searchTxt: "",  
        filterBy: {}
};

const postReducer = (state = initialState, action) =>{
        switch (action.type) {
            case SEARCHTEXTFILTERED:
             return {
                ...state,
                searchTxt: action.payload
             };

            case FILTERED:
                const { name, value } = action.payload ;
            
                let newPosts = [...state.allPost]
                let filterBy = {};
                filterBy[name] = value;

                if(name === 'author'){
                   newPosts = newPosts?.filter((post)=> post.author.id === value.id)
                    filterBy[name] = value.name; // john nozibul
                } else if (name === 'search'){
                 newPosts = newPosts?.filter((post)=>
                    post?.title?.toLowerCase().includes(value.toLowerCase())
                 )
                } else{
                    newPosts = newPosts?.filter((post)=> post.category === value); 
                }

             return{
                 ...state,
                 filterBy,
                 filterPost: newPosts,
             };

            case CLEARSEARCHTEXTFILTERED:
             return{
                ...state,
                searchTxt: ""
             }

            case CLEARFILTERED:
             return{
                ...state,
                filterBy: {},
                searchTxt: "",
                filterPost: state.allPost,
             };       
            default:
               return state;
        }
    
}

export default postReducer ;