"use server"

import { currentUser } from "@clerk/nextjs/server"

export const createPostAction = async(inputText:string,selectedFile:string) => {
 const user = await currentUser;
 if(!user) throw new Error('User is not Authenticated');
 if(!inputText) throw new Error('User did not post anything');
 const image = selectedFile;
  try{
   
    if(image){
 // craete post with image
 
    }else{
    //create post with text only
       
  }
}
  catch(error:any){
  throw new Error(error);
  }
}