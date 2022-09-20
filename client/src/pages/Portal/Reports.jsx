import React from 'react'
import {Box,Grid,Typography} from '@mui/material'
import { CustomBox } from '../../components'
import Sidebar2 from './Sidebar2'
import {CustomAppBar2} from '../../components'
import { useState } from 'react'
import client from '../../api/client'
import { useEffect } from 'react'
import AssessmentIcon from '@mui/icons-material/Assessment';
import {count} from '../../assets'
const Reports = ()=>{
const [members,setMembers] = useState(0)
const [bots,setBots] = useState(0)
const [beginners,setBeginners] = useState(0)
const [intermidiate,setIntermediate] = useState(0)
const [moneymanagers,setMoneymanagers] = useState(0)
const [hedge,setHedge] = useState(0)
const [professional,setProfessional] = useState(0)
const [vip,setVip] = useState(0)

async function getMembers(){
    await client.get('/users').then((response)=>{
        setMembers(response.data.users.length)
    })
}
async function getBots(){
    await client.post('/getType',{
        type:"bots"
    }).then((response)=>{
        setBots(response.data.pays.length)
    })
}
async function getbeginners(){
    await client.post('/getOrderId',{
        order:"Forex Trading For Beginners"
    }).then((response)=>{
        setBeginners(response.data.pays.length)
    })
}
async function getIntermediate(){
    await client.post('/getOrderId',{
        order:"Forex Trading For Intermediate"
    }).then((response)=>{
        setIntermediate(response.data.pays.length)
    })
}
async function getMoneymanagers(){
    await client.post('/getOrderId',{
        order:"Forex Trading for Money Managers"
    }).then((response)=>{
        setMoneymanagers(response.data.pays.length)
    })
}
async function getHedge(){
    await client.post('/getOrderId',{
        order:"Forex Trading For Hedge Fund Managers"
    }).then((response)=>{
        setHedge(response.data.pays.length)
    })
}
async function getProfessional(){
    await client.post('/getOrderId',{
        order:"Forex Trading For Professional Traders"
    }).then((response)=>{
        setProfessional(response.data.pays.length)
    })
}
async function getVip(){
    await client.post('/getOrderId',{
        order:"Forex Trading For VIP Members"
    }).then((response)=>{
        setVip(response.data.pays.length)
    })
}
useEffect(()=>{
  getMembers()
  getBots()
  getbeginners()
  getIntermediate()
  getMoneymanagers()
  getHedge()
  getProfessional()
  getVip()
})
return(
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex"}}>
    <Sidebar2/>
    <Box sx={{width:"100%"}}>
    <CustomAppBar2/>
    <Grid container sx={{width:"100%",height:"100%",display:"flex"}}>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. of Mmebers</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{members}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>Bots Sold</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{bots}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading For Beginners</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{beginners}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading For Intermediate</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{intermidiate}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading for Money Managers</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{moneymanagers}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading For Hedge Fund Managers</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{hedge}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading For Professional Traders</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{professional}</Typography> 
    </Box>
    </Box>

    <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
    background: "whitesmoke"}}}>  
    <Box component="img" sx={{height:"65%", width:"100%"}} src={count} alt=""/><AssessmentIcon fontSize='large' sx={{color:"#CCA300"}}/>
    <Typography component="h6" variant='p'>No. enroll for Forex Trading For VIP Members</Typography>    
    <Box sx={{mt:1}}>
    <Typography component="h6" variant='p'>{vip}</Typography> 
    </Box>
    </Box>



   
    </Grid>
    </Box>
    </Box>
)
}

export default Reports;
