import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'

const  Sidebar = ({user}:{user:any}) => {
    console.log(user)
  return (
    <div className='hidden md:block w-[20%] h-fit border bordergray-300 bg-white-300 rounded-lg'>
       <div className='flex relative flex-col items-center'>
        <div className='w-full h-16 overflow-hidden'>
            {
                user &&(
                    <Image src={"/coding-16.jpg"}
                    alt="banner"
                    width={200}
                    height={200}
                    className='w-full h-full rounded-t'/>
                )
            }

        </div>
<div className='my-1 absolute top-10 left-[40%]'>
<ProfilePhoto src={user? user?.imageUrl! : "/coding-16.jpg"}/>
</div>
<div className='border-b border-b-gray-300'>
    <div className='p-2 mt-5 text-center'>
        <h1 className='font-bold hover:underline'>{user ? `${user?.firstName} ${user?.lastName}`:"--"}</h1>
        <p className='text-xs'>@{user ? `${user?.lastName}`:'username'}</p>
        <div className='text-xs'>
          

        </div>
        <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                 <p className='m-1'>Post Impression</p>
                 <p className='text-blue-500 text-bold'> 88 </p>
            </div>
            <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                 <p>Posts</p>
                 <p className='text-blue-500 text-bold'> 0 </p>
            </div>
    </div>

</div>
       </div>
        </div>
  )
}

export default Sidebar