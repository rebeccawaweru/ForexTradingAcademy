import React, { useState,useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import {Box,Typography,Grid} from '@mui/material'
import client from '../../api/client'
import './Messages.css';

const PrivateMessages = () =>{
  const id = localStorage.getItem('userId')
  const [usermessage,setuserMessage] = useState([])
  const [adminmessage,setAdminmessage] = useState([])
  const [admin,setAdmin] = useState([])
  const getMessages = ()=>{
    client.get('/getmessage/'+id).then((response)=>{
      setuserMessage(response.data.messages)
    })
   
  } 
  const getAdminMessages = ()=>{
    client.get('/getadminmessage/'+id).then((response)=>{
      setAdmin(response.data.messages)

    })
  }
  useEffect(()=>{
   getMessages()
   getAdminMessages()
  })
  return(
  <>
     <Box sx={{mt:5,postion:"absolute"}}>
        {usermessage.map((m,i)=>{
       return <Box key={i} sx={{maxWidth:"50%",height:'fit-content', backgroundColor:"blue", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10}}>
          <Typography component="p" variant="p">{m.userName}</Typography>
          <Typography component="p" variant="p">{m.sentMessage}</Typography>
        </Box>

      })}
         {admin.map((m,i)=>{
       return <Box key={i} sx={{maxWidth:"50%",height:'fit-content', backgroundColor:"green", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10,marginLeft:{
        lg:50,
        md:50,
        xs:0,
        sm:0
       } }}>
          <Typography component="p" variant="p">{m.sentMessage}</Typography>
        </Box>
      })}
        </Box> 
  </>
  )

  };

export default PrivateMessages;

{/* <Box sx={{width:"100%",height:"100%"}}>
{usermessage.map((m,i)=>{
 return <Box key={i} sx={{maxWidth:"50%",height:'fit-content', backgroundColor:"blue", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10 }}>
    <Typography component="p" variant="p">{m.sentMessage}</Typography>
  </Box>
})}
</Box>
<Box sx={{float:"left",width:"100%",marginLeft:{
    lg:50,
    md:50,
    xs:0,
    sm:0
}}}>
{admin.map((m,i)=>{
 return <Box key={i} sx={{maxWidth:"50%",height:"fit-content", backgroundColor:"green", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10 }}>
    <Typography component="p" variant="p">{m.sentMessage}</Typography>
  </Box>
})}
</Box> */}