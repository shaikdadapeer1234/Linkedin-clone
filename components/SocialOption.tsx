import React, { useState } from 'react'
import { Button } from './ui/button'
import { MessageCircleMore, Repeat, Send, ThumbsUp } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
 
const SocialOption = ({post}:{post:any}) => {
    const {user} = useUser()
    const[commentOpen,setCommentOpen] = useState(false);
  return (
   <div>
     <div className='flex items-center m-1 justify-between'>
        <Button variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
            <ThumbsUp/>
            <p>Likes</p>
        </Button>
        <Button onClick={()=>setCommentOpen(!commentOpen)} variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
            <MessageCircleMore/>
            <p>Meessage</p>
        </Button>
    
        <Button variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
            <Repeat/>
            <p>Repost</p>
        </Button>
        <Button variant={'ghost'} className='flex items-center gap-1 rounded-lg text-gray-600 hover:text-black'>
            <Send/>
            <p>Send</p>
        </Button>
   </div>
   {
    commentOpen && (
        <div>
           
             </div>

    )
   }
   </div>
  )
}

export default SocialOption