import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Box,Modal,Typography,Button,Alert } from "@mui/material"
import { CustomButton, CustomInput } from "../../components";
import { useState } from "react";
import client from '../../api/client'
const Unsubscribe = ()=>{
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
    
      const [email,setEmail] = useState('');
      const [message,setMessage] = useState('')
      const [errormessage,setErrorMessage] = useState('')
      const handleChange =  () =>{
        if(!email){
            setErrorMessage("Kindly input your email")
        }else if(email){
            setMessage("You have successfully unsubscribed from receiving our marketing emails. Thank you.")
            setTimeout(()=>{
                history('/')
            },3000)
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
        {errormessage && <Alert severity="error">{errormessage}</Alert>}
        <Typography sx={{mb:2}}>
        <i>Unsubscribe</i>
        </Typography>
    
       
        <CustomInput label="Email" value={email} handleChange={(e)=>setEmail(e.target.value)} />
        <CustomButton title="Unsubscribe" onClick={handleChange}/>
        <Typography id="modal-modal-title" color="text.disabled" variant="p" component="h6" sx={{mb:1,mt:2}}>
        <i>You will no longer receive marketing emails.</i>
       </Typography>
     
        </Box>
      </Modal>
    </div>
    )
}

export default Unsubscribe