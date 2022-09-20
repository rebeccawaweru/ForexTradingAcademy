import React from "react"
import { useState } from "react"
 
export default function Data(){
    const [media,setMedia] = useState('')

    const handleChange = async(e)=>{
        e.preventDefault();
        const files = e.target.files;
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "Images");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/marite/image/upload",
          {
            method:"POST",
            body:data
          }
        )
        const File = await res.json()
        setMedia(File.url)
        console.log(File.url)
  
    }
return(
    <>
    <input type="file" onChange={handleChange}/>
    <button >Upload</button>
    </>
)
}