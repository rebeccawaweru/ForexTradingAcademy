import React,{useState,useEffect} from 'react'
import {Box,Typography} from '@mui/material'
import client from '../../api/client'
import {CustomAppBar2} from '../../components';
import Sidebar2 from './Sidebar2'
export default function UserMessage(){
    const [data,setData] = useState([])
    const [success,setSuccess] = useState(false)
    async function getMessages(){
        await client.get('/getmessages').then((response)=>{
            setData(response.data.messages)
        })
    }
    useEffect(()=>{
        getMessages()
    })
    return(
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex",position:"relative"}}>
        <Sidebar2 selected/>
        <Box sx={{width:"100%"}}>
        <CustomAppBar2/>
        <Typography component="h6" variant='h6' sx={{mx:5,mt:2}}>Messages from Contact form</Typography>
        {data.map((m,i)=>{
    return <Box key={i} sx={{width:"90%",height:'fit-content', backgroundColor:"whitesmoke",borderRadius:20, color:"black",mb:2,paddingLeft:3,pt:2,pb:2,mx:3,mt:2,justifyContent:"center",alignItems:"center",textAlign:"center" }}>
     <Typography component="p" variant="p" >{m.email}</Typography>
     <Typography component="p" variant="p" >{m.phone}</Typography>
     <Typography component="p" variant="p" >{m.message}</Typography>
     </Box>
   })}
        </Box>
        <Box>
        </Box>
        </Box>
 
    )
}

