import React,{useEffect, useState} from "react"
import { Box ,Grid} from "@mui/material"
import client from "../../api/client"
import { useNavigate } from "react-router-dom"
import { CustomAppBar2, CustomCard,CustomButton } from "../../components"
import Sidebar2 from './Sidebar2'
import {content} from '../../assets'
export default function Uploads(){
    const [data,setData] = useState([])
    const [success,setSuccess] = useState(false)
    const history = useNavigate()
   async function getMedia(){
    await client.get('/course').then(response=>{
      setData(response.data.response)
        setSuccess(true) 
     })
     
   }
    useEffect(()=>{
      getMedia()
    })

    const handleSubmit =async(id)=>{
     console.log(id)
     await client.get('course/'+id).then((response)=>{
      window.location.replace('https://forextradingarena.herokuapp.com/uploads/'+response.data.course.file)
      
     })
    }
    return(
      <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden", display:"flex",position:"relative"}}>
     <Sidebar2 selected/>
      <Box sx={{width:"100%"}}>
       <CustomAppBar2/>
     
       <Grid container sx={{width:"100%",height:"100%",display:"flex",paddingLeft:"2%"}}>
        {success && data.map((c)=>{
          return <Box sx={{mt:2}} key={c._uid}><CustomCard image={content} title={c.course} description={c.topic} sx={{display:"none"}} Button={<CustomButton title="View" onClick={()=>handleSubmit(c._id)}/>}/></Box>
        })}
       </Grid>
     
      </Box>  
    </Box>
    )
}