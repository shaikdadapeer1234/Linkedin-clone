import React from 'react'
import Post1 from './Post1'
const Post = ({posts}:{posts:any}) => {
  
  return (
    <div>
      {
      posts?.map((post) => {
        return   <Post1 key={posts._id} post={post}/>
        }) 
      
      }
     
    
    </div>
  )
}

export default Post