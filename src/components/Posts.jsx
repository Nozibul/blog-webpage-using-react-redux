import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {clearSearchText, filtered} from "./../redux/posts/action"

const Posts = ({post}) => {
    const {image, title, author , category, date} = post;
    const  searchTxt = useSelector((state)=> state.searchTxt)
    const dispatch = useDispatch()

   // update filtered data
   const handleUpdateFilter = ({name, value}) =>{
    if(searchTxt){
        dispatch(clearSearchText())
    }
    dispatch(filtered({name, value}))
   }

  return (
    <>
     <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shring-0">
        <img src={image} alt={title} className="w-full object-cover" />
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p
              className="text-sm font-medium text-indigo-600"
              onClick={() =>handleUpdateFilter({ name: 'category', value: category })}
            >
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 capitalize cursor-pointer">
                {category}
              </span>
            </p>
            <p className="mt-1 text-xl font-semibold capitalize text-gray-900">
              {title}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0 cursor-pointer">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-10 w-10 rounded-full"
                onClick={() => handleUpdateFilter({ name: 'author', value: author })
                }
              />
            </div>
            <div className="ml-3">
              <p
                className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                onClick={() =>handleUpdateFilter({ name: 'author', value: author })
                }
              >
                {author.name}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500 font-light">
                <time dateTime="2020-03-16">{date}</time>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Posts