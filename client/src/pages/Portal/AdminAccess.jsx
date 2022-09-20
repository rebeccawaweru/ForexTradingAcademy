import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Box,Modal,Typography,Button,Alert } from "@mui/material"
import { CustomButton, CustomInput } from "../../components";
import { useState } from "react";
import client from '../../api/client'
const AdminAccess = ()=>{
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const history = useNavigate()
      const [open, setOpen] = React.useState(true);
      const handleClose = () => setOpen(false);
      const [password,setPassword] = useState('')
      const [email,setEmail] = useState('');
      const [message,setMessage] = useState('')
      const [errormessage,setErrorMessage] = useState('')
      const handleChange = async () =>{
        try {
          const response = await client.post('/adminlogin',{
            email:"calvinkirochi254@gmail.com",
            password:password
           })
           if(response.data.success){
            history(`/adminportal/${response.data.id}`)
        }
        } catch (error) {
          if(error.message === "Request failed with status code 401"){
            setErrorMessage('Invalid password')
          }
        }
     
      }
    return(
     <div>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {message && <Alert severity="success">{message}</Alert> }
        {errormessage && <Alert severity="error">{errormessage}</Alert>  }
            <i>Admin</i>
          <Typography id="modal-modal-title" variant="p" component="h6" sx={{mb:1}}>
           Enter Password
          </Typography>
        <CustomInput value={password} handleChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={handleChange}>Ok</Button>
        </Box>
      </Modal>
    </div>
    )
}

export default AdminAccess