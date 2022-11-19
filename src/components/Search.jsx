import React, { useEffect , useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchIcon from "./assets/search.svg"
import {searchTextFilter, filtered, clearFiltered,} from "../redux/posts/action"

const Search = () => {
  const { searchTxt , filterBy } = useSelector((state)=> state);
  const dispatch = useDispatch();
 
  let debounce = (fn, delay) => {
    let timerId;
    return function (searchTxt) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(searchTxt);
      }, delay);
    };
  };

  // Memoize  debounce function
  debounce = useCallback(
    debounce((searchTxt) => {
      dispatch(filtered({ name: 'search', value: searchTxt }));
    }, 500),
    []
  );

  // handled search functionality in useEffect
  useEffect(()=>{
    if(searchTxt){
      debounce(searchTxt)
    }else{ // else mean when searchText is empty
      if(filterBy.search){
        dispatch(clearFiltered())
      }
    }
  }, [searchTxt, dispatch,  filterBy.search])
  return (
    <>
      <div class="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                class="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={searchTxt}
                onChange={(e)=>dispatch(searchTextFilter(e.target.value))}
            />
            <img
                class="inline h-6 cursor-pointer"
                src={searchIcon}
                alt="search"
            />
        </div>
    </>
  )
}

export default Search