import React,{useState,useEffect} from 'react'
import {Box,Grid,Typography} from '@mui/material'
import {CustomInput,CustomButton,Sidebar} from '../../components'
import client from '../../api/client'
export default function Referral(){
    const id = localStorage.getItem("userId")
    const [link,setLink] = useState('')
    useEffect(()=>{
        fetch('https://forexarena.herokuapp.com/forexarena/user/'+id)
        .then(result => result.json())
        .then(data => {
         setLink(data.user.referralLink)
       })
    },[])

    return(
    <Grid container sx={{width:"100%",height:"100vh", overflow:"hidden",margin:0,padding:0,display:"flex",position:"relative"}}>
    <Box sx={{width:"20%"}}>
    <Sidebar/>
    </Box>
    <Box sx={{width:"60%",justifyContent:"center",alignItems:"center",textAlign:"center",pt:10}}>
    <Typography variant="h6" component="h4">Share referral Link</Typography>
    <p><i>Copy your personal referral link and share it with your friends</i></p>
    <CustomInput fullWidth border="0.5px solid black" value={link} label="Referral Link"/>
    <CustomButton title="Copy" onClick={()=>navigator.clipboard.writeText(link)} fullWidth/>
    </Box>
    </Grid>
    )
} 