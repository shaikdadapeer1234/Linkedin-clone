import { Copy, Images } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import{useRef} from "react"
import {useState} from 'react'
import Image from "next/image"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import ProfilePhoto from "./shared/ProfilePhoto"
import { readFileAsDataUrl } from "@/lib/utils"
import { ImageError } from "next/dist/server/image-optimizer"


 export function PostDialog({setOpen,open,src}:{setOpen:any,open:boolean,src:string}) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedFile,setSelectedFile] = useState<string>("")
    const[inputText,setInputText] = useState<string>("")
    const changeHandler = (e:any) => {
     setInputText(e.target.value);
    }
    const fileChangeHandler =async (e:React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if(file){
        const dataUrl = await readFileAsDataUrl(file)
        setSelectedFile(dataUrl)
      }
    }
    // const postActionHandler = async(formData:FormData) =>{
    //        const inputText = formData.get('inputText') as string; 
    //        console.log(inputText);
    //        try{
    //          await createPostAction(inputText,selectedFile);
    //        } catch(error){
    //      console.log("error occurred",error);
    //        }
         
    // }
  return (
    <Dialog open={open}>
      
      <DialogContent onInteractOutside={()=>setOpen(false)} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex gap-2"><ProfilePhoto src={src} />
          <div>
           <h1>shaik-Dadapeer</h1> 
           <p className="text-xs">Post to anyone</p>
            </div>
            </DialogTitle>
         
        </DialogHeader>
        <form action= ''>
            <div className="flex flex-col">
            <Textarea id="name" name="inputText" value={inputText} onChange={changeHandler} className="border-none text-lg focus-visible:ring-0" placeholder="Type your message here." />
            <div className="my-4">
                

            {
                    selectedFile && (
                        <Image
                        src={selectedFile}
                        alt="preview-image"
                        width={400}
                        height={400}/>
                    )
                }
            </div>
       </div>
      <DialogFooter>
        <div className="flex items-center gap-4">
            <input ref={inputRef} onChange={fileChangeHandler} type='file' name='image' className="hidden" accept="image/*"/>
        <Button type="submit">post</Button> 
        </div>
        
      </DialogFooter>
   </form>
   <Button onClick= {()=>inputRef?.current?.click()}variant={'ghost'}>
   <Images className='text-blue-500'/>
   <p>Media</p>
   </Button>
  
     </DialogContent>  
    </Dialog>
  )
}
