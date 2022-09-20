
import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {Box,TextField,Button} from '@mui/material'
import client from '../../api/client'
import CustomButton from '../../components/Reused/CustomButton'
export default function ConfirmPassword(){
    const {token} = useParams()
    const history = useNavigate()
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [errormessage,setErrormessage] = useState('')
    const [message,setMessage] = useState('')
    const handleSubmit = async () =>{
        if(password2 !== password){
            setErrormessage('Passwords do not match')
         }else if(!password || !password2){
             setErrormessage('Enter the missing fields')
         }
        try {
        const response = await client.post('/newpassword',{
                sentToken:token,
                password:password
        })
        if(response.data){
            setMessage('Password set successfull')
            setTimeout(()=>{
                history('/login')
            },3000)
        }   
        } catch (error) {
            console.log(error.message)
        }
    }
    return(
    <Box sx={{width:"100%",height:"100vh",
    overflow:"hidden",justifyContent:"center",alignItems:"center",textAlign:"center",display:"block",position:"relative"}}  className="bg">
        <div style={{marginTop:"20%"}}>
        <div style={{color:"red"}}><p><b>{errormessage}</b></p></div>
        <div style={{color:"green"}}><p><b>{message}</b></p></div>
        <div className='mb-2'>
        <div>
        <label><b>New Password</b></label>
        </div>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <div className='mb-2'>
        <div>
        <label><b>Confirm Password</b></label>
        </div>
        <input type="password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/> 
        </div>
        <CustomButton title="Submit" onClick={handleSubmit}/>
        </div>
    
    </Box>
    )
}