import React,{useState} from 'react'
import {Box,Alert} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomButton,CustomInput } from '../../components'
import client from '../../api/client'
import axios from 'axios'
const ConfirmPassword = ()=>{
     const {token} = useParams()
     const history = useNavigate()
    const [password,setPassword] = React.useState('');
    const [confirmPassword,setConfirmPassword] = React.useState('');
    const [message,setMessage] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const handleSubmit= async()=>{
        try {
             if(confirmPassword !== password){
                setErrormessage('Passwords do not match')
             }else if(!password || !confirmPassword){
                 setErrormessage('Enter the missing fields')
             }
             const options = {
                 headers: {"Content-type": "application/json", "Accept": "application/json"}
             }
           const response = await axios.post("https://forextradingarena.herokuapp.com/forexarena/newpassword",
          {
             password:password,
             sentToken:JSON.stringify(token)
           }, {options})
           if(response.data){
                setMessage("Password reset successfull")
                setTimeout(()=>{
                 history('/login')
                },2000)
             }else{
                 setErrormessage("error")
             }   
        } catch (error) {
            console.log(error.message)
        }
    }   

return(
   <Box sx={{height:"100vh", width:"100%", position:"relative",justifyContent:"center", alignItems:"center" ,textAlign:"center"}}  className="bg">
    <Box sx={{ position:"absolute",margin:"auto",boxShadow:24, height:{
        xs:"60vh",
        sm:"50vh",
        lg:"70vh",
        md:"70vh",
    }, width:{
        xs:"50%",
        sm:"50%",
        lg:"40%",
        md:"40%"
    }, top:"20%",left:"30%", pt:8}}>
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
       {errormessage && <Alert severity="error">{errormessage}</Alert>}
       </Box>
     <CustomInput label="New Password" value={password} handleChange={(e)=>setPassword(e.target.value)}/>
     <CustomInput label="Confirm Password" value={confirmPassword} handleChange={(e)=>setConfirmPassword(e.target.value)}/>
     <CustomButton title="Reset Password" onClick={handleSubmit}/>
    </Box>
    </Box>
)
}

export default ConfirmPassword;