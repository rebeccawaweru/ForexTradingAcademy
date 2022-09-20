import React,{useState} from 'react';
import {Box,Typography,Modal,ButtonGroup,Button,Checkbox, FormControlLabel} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'
import CustomAlert from './CustomAlert';
import {adlandscape } from '../../assets';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import client from '../../api/client'
import {Formik} from 'formik'
import * as  Yup from 'yup'
const regx = /^\d{10}$/;

const validationSchema = Yup.object({
  fullname : Yup.string().trim().min(5,'invalid name!').required('Full name is required'),
  email: Yup.string().email('Invalid email!').required('Email  is required'),
  phone:Yup.string().matches(regx,'Invalid phonenumber').required('Phone number is required'),
  })
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{
    lg:800,
    md:800,
    xs:350,
    sm:400
  },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  margin:"auto"

};
export default function CustomModal({isOpen}) {
  const [open, setOpen] = React.useState(false);
  const [display, setDisplay] = useState('block')
  const [display2, setDisplay2] = useState('none')
  const [inputstyle, setInputstyle] = useState('none')
  const [success,setSuccess] = useState(false)
  const [id,setId] = useState('');
  const userInfo = {
    fullname:'',
    email:'',
    phone:0,
}
  const [social, setSocial] = useState({
    twitter:"",
    instagram:"",
    facebook:"",
  })
  const {twitter,instagram,facebook} = social
  const handleChangeText=(e)=>{
    const {name,value} = e.target
    setSocial({...social,[name]:value})
    console.log(social)
  }
  const handleSendSelection = (event) => {
    let check = event.target.value
    console.log(check)
    if(check ===  "Yes"){
      setInputstyle("block")
      }else if(check === "No"){
        setInputstyle("none") 
      }
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleSubmit = ()=>{
  //  setDisplay('none')
  //  setDisplay2('block')
  // }
  
  const addPromo=async(values)=>{
  try {
    const res = await client.post('/promo',{
       ...values
    });
    if(res.data.success){
      console.log(res.data.promo._id)
      localStorage.setItem('id',res.data.promo._id )
     console.log( localStorage.getItem('id'))
      setDisplay('none')
      setDisplay2('block')
    }
  } catch (error) {
    console.log(error.message)
  }
}
    const handleOk = async() =>{
      try {
        const response = await client.patch('/updatepromo/'+localStorage.getItem('id'),{
         ...social
        })
        if(response.data.success){
         localStorage.removeItem('id')
         setSuccess('true')
         setTimeout(() => {
          window.location.reload();
        }, 2000)
        }
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
        localStorage.removeItem('id')
      }
     
    }
  return (
    <div>
      <CustomButton title="Click here!" onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <Box component="img" src={adlandscape} sx={{width:"100%"}} alt=''/>
          <Box  sx={{ mt: 2, justifyContent:"center", alignItems:"center", textAlign:"center" }}>
            {success && <CustomAlert color="success" message="Thank you for feedback"/>}
          <Formik 
    initialValues={userInfo} 
    validationSchema={validationSchema} 
    onSubmit={addPromo}>
    {(
    {values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit})=>{
     const{fullname,email,phone} = values
     console.log(values)
     return(
       <>
            <Box sx={{display:{display}, mt:2}}>
            <Typography variant="p" component="h6" color="text.secondary">Fill in your details and stand a chance to win.</Typography>
              <Box sx={{mx:2,mt:2}}>
              <CustomInput
              label="Fullname"
              name="fullname"
              value={fullname}
              error={touched.fullname && errors.fullname}
              handleChange={handleChange('fullname')} 
              onBlur={handleBlur('fullname')}
              icon={<PersonIcon/>}    
              />  
              </Box>
              <Box sx={{mx:2}}>
              <CustomInput
              label="Email"
              name="email"
              value={email}
              error={touched.email && errors.email}
              onBlur={handleBlur('email')}
              handleChange={handleChange('email')}  
              icon={<EmailIcon/>}
              />  
              </Box>
              <Box sx={{mx:2}}>
              <CustomInput
              label="Phone"
              name="phone"
              value={phone}
              error={touched.phone && errors.phone}
              onBlur={handleBlur('phone')}
              handleChange={handleChange('phone')}  
              icon={<LocalPhoneIcon/>}
               />
              </Box>
              <CustomButton title="Submit" onClick={handleSubmit}/>
            </Box>

            </>
      )}}
   </Formik> 
            
     <Box sx={{display:display2}}>
     <Typography sx={{mt:1}}>Do you follow us on Social Media?</Typography>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >
    <FormControlLabel control={<Checkbox value="Yes" onClick={(event) => handleSendSelection(event)}/> } label="Yes" />
      <FormControlLabel control={<Checkbox value="No" onClick={(event) => handleSendSelection(event)}/>} label="No" />
    </Box>
    
    <Box sx={{display:inputstyle,justifyContent:"center", alignItems:"center", textAlign:"center"}}>
    <Typography sx={{mt:2}}>Instagram handle</Typography>
    <CustomInput 
    name="instagram"
    value={instagram}
    handleChange={value=>handleChangeText(value,'instagram')}
    placeholder="e.g "
    />
    </Box>

    <Box sx={{display:inputstyle,justifyContent:"center", alignItems:"center", textAlign:"center"}}>
    <Typography>Twitter handle</Typography>
    <CustomInput
    name="twitter"
    value={twitter}
     handleChange={value=>handleChangeText(value,'twitter')}
     placeholder=""/>
    </Box>

    <Box sx={{display:inputstyle,justifyContent:"center", alignItems:"center", textAlign:"center"}}>
    <Typography>Facebook handle</Typography>
    <CustomInput 
    name="facebook"
    value={facebook}
    handleChange={value => handleChangeText(value,'facebook')}
    placeholder=""/>
    </Box>

    <CustomButton title='ok' onClick={handleOk}/>
    </Box>   
         <Typography>Follow Our Socials</Typography>
         <ButtonGroup variant="text" aria-label="text button group">
        <Button><TwitterIcon color="warning"/></Button>
        <Button><InstagramIcon color="warning"/></Button>
        <Button><FacebookOutlinedIcon color="warning"/></Button>
      </ButtonGroup>
            <Box> 
            </Box>
          </Box>
        </Box>
      </Modal>
    
    </div>
  );
}
