"use client"
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'
import { useUser } from '@clerk/nextjs'
import { Trash2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from './ui/button'
import PostContent from './PostContent'
import SocialOption from './SocialOption'

const Post1 = ({post}:{post:any}) => {
  const user = useUser();
  const fullName = post?.user?.firstName + " " + post?.user?.lastName;
  return (
    <div className='bg-white my-2 rounded-lg border border-gray-300'>
   <div className='flex gap-2 p-4'>
    <ProfilePhoto src={post?.user?.ProfilePhoto!}/>
   <div className='flex items-center justify-between w-full'>
    <div>
      <div className='text-sm font-bold'>{fullName}
        <Badge variant={'secondary'} className='m-3'>you</Badge></div>
       
      <p className='text-xs text-gray-500'>@{fullName}</p>
      <p className='text-xs text-gray-500'>
     1hr ago
      </p>
    </div>
    </div>   
 <div>
<Button size ={'icon'} className='rounded-full' variant={'outline'}>
<Trash2/>
  </Button>  

 </div>
</div>
<PostContent post={post}/>
<SocialOption post={post}/>
</div>
  )
}

export default Post1