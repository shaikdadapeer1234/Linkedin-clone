
import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const  ProfilePhoto = ({src}:{src:string}) => {
  return (
    <div>
    <Avatar>
  <AvatarImage src={src} alt="@banner"/>
 
</Avatar>

    </div>
  )
}

export default ProfilePhoto

