import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter';
import Posts from './Posts'

const PostContainer = () => {
  const { filterPost, filterBy} = useSelector((state)=> state);
  const filter = Object.keys(filterBy)
  return (
    <>
     <div className="relative max-w-7xl mx-auto">
        
        {
          filter.length > 0 && (
            filter.map((name, index)=> <Filter key={index} name={name} value={filterBy[name]}/>
            )
          )
        }
       {
        filterPost.length < -1 && (
          <p className="text-xl font-bold text-red-400">No Post Found.</p>
        )}
        
      {/* post list  */}
      <div className="mt-12 max-w-lg grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {filterPost.map((post) => { 
          return <Posts key={post.id} post={post} />
        })}
      </div>         
      
      </div>
    </>
  )
}

export default PostContainer