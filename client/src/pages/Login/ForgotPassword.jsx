import React,{useState} from 'react'
import {Box,Typography,Alert} from '@mui/material'
import { CustomButton,CustomInput } from '../../components'
import client from '../../api/client'
const ForgotPassword = ()=>{
    const [email,setEmail] = React.useState('');
    const [message,setMessage] = useState('')
    const handleSubmit = async()=>{
       const response = await client.post('/reset',{
        email:email
       })
       if(response.data){
        setMessage("check your email")
       }
    }

return(
    <Box sx={{height:"100vh", width:"100%", position:"relative",justifyContent:"center", alignItems:"center" ,textAlign:"center"}}  className="bg">
    <Box sx={{ position:"absolute",margin:"auto",boxShadow:24, height:{
        xs:"50vh",
        sm:"50vh",
        lg:"40vh",
        md:"40vh",
    }, width:{
        xs:"50%",
        sm:"50%",
        lg:"40%",
        md:"40%"
    }, top:"20%",left:"30%",}}>
    <Box sx={{width:{
            lg:"30%",
            md:"30%",
            xs:"100%",
            sm:"100%"
        },mx:{
            lg:20,
            md:20,
            sm:2,
            md:2
        },mb:2}}>
        {message && <Alert severity="success">{message}</Alert> }
       </Box>
    <Typography component="h5" variant="h5" sx={{mb:5,mt:5}}>Reset Password</Typography>
        <CustomInput label="Enter email to send reset link" value={email} handleChange={(e)=>setEmail(e.target.value)} />
        <CustomButton title="Send Reset Link" onClick={handleSubmit}/>
    </Box>
    </Box>
)
}

export default ForgotPassword;