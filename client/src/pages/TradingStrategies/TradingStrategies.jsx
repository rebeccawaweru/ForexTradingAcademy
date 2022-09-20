import React,{useState,useEffect} from 'react';
import { CustomCard,CustomButton } from "../../components";
import {Box,Grid,IconButton} from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import {Services} from "../../components";
import client from '../../api/client'
export default function TradingStrategies(){
    const [open, setOpen] = useState(false);
    const [data,setData] = React.useState([])
    const [success,setSuccess] = React.useState(false)
    const [botid,setbotId] = React.useState('')
    const handleSubmit = (id)=>{
       setOpen(true);
       setbotId(id)
    }
    const history = useNavigate()
    async function find(){
        await client.post('/find', {
          title:"Trading Strategies"
        }).then((response)=>{
          setData(response.data.response)
          setSuccess(true)
        })
      }
  
      useEffect(()=>{
        try {
          find()
         } catch (error) {
           console.log(error.message)
         }
      })
return(
    <Box  sx={{width:"100%",height:"100%", overflow:"hidden"}}>
     <IconButton color="primary" aria-label="add to shopping cart" sx={{mt:3,paddingLeft:"5%"}} onClick={()=>history('/')}>
        <KeyboardBackspaceIcon/>
      </IconButton>  
    <Grid container sx={{width:"100%",height:"100%", overflow:"hidden",display:"flex",paddingLeft:"5%"}}>
    <Services open={open} close={()=>setOpen(false)} id={botid}/>
    {success && data.map((u)=>{
            return<Box key={u._id}><CustomCard image={u.avatar} title={u.title} description={u.description} amount={u.price} header={u.type} Button={<CustomButton title="BUY" onClick={()=>handleSubmit(u._id)}/>}/></Box>
      })}
    </Grid>
    </Box>

)
}