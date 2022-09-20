import * as React from 'react';
import {Box,Button,Typography,Modal,IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from '../Reused/CustomInput';
import CustomButton from '../Reused/CustomButton';
import client from '../../api/client';
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
export default function Services2({open,close}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
const [email,setEmail] = React.useState('')
const [name,setName] = React.useState('')
const [phone,setPhone] = React.useState('')
const [url,setUrl] = React.useState('')
const handleSubmit = ()=>{
client.post('/ipay-api', {
  email:email,
  phone:phone,
  course:"1 month subscription",
  amount:1,
  type:"Subscription",
  description:name
  }).then(response=>setUrl(response.data))
  if(url != ''){
    window.location.replace(url);
}

}
  return (
    <div>
      <Modal
        open={open}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton sx={{float:"right",mb:5}} onClick={close}>
            <CloseIcon/>
            </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mt:5}}>
         
      
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Fill in your details
          </Typography>
          <CustomInput placeholder="name" value={name} handleChange={(e)=>setName(e.target.value)}/>
          <CustomInput placeholder="email" value={email} handleChange={(e)=>setEmail(e.target.value)}/>
          <CustomInput placeholder="7XXXXXXXX" value={phone} handleChange={(e)=>setPhone(e.target.value)}/>
          <CustomButton title="Pay" onClick={handleSubmit}/>
        </Box>
      </Modal>
    </div>
  );
}