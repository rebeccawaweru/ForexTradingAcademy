import React, { useState,useEffect } from 'react';
import {Box,Typography,Grid} from '@mui/material'
import {Sidebar,RightSide, CustomInput, CustomButton,CustomBackdrop,} from '../../components'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
import {Formik} from 'formik'
import client from '../../api/client';
import * as  Yup from 'yup'
import {Content} from '../../components'
import {Dashboard} from '../index'
import { useNavigate,useParams } from 'react-router-dom';
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email!').required('Email  is required'),
  })
const Enroll =()=>{
  const {id} = useParams();
  const history = useNavigate();
  const [error, setError] = useState(false);
  const [errormessage,setErrorMessage]= useState('')
  const [data,setData] = useState([])
  const [enroll,setEnroll] = useState([])
  const [register,setRegister] = useState(null)
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    client.get('/user/'+id)
    .then((response)=>{
      setData(response.data.user)
    })
    client.get('/getenroll')
    .then((response)=>{
     setEnroll(response.data.enroll)
     response.data.response.map(function(c){
      if(data.email === c.email){
        setRegister(true)
      }else{
        setRegister(false)
      } })
    })
 })
  const userInfo = {
    email:'',
}
  const enrollSubmit = async (values)=>{
    try {
      const res = await client.post('/enroll',{
        ...values
      })
     if(res.data.success){
      setRegister(true)
      window.location.reload()
     }
    } catch (error) {
      console.log(error.message)
    }
  }
    const [selectedIndex, setSelectedIndex] = React.useState(2);
    return (
     <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden", display:"flex"}}>
       {loading&&(<CustomBackdrop open="open"/>)}
     <Sidebar selected1={selectedIndex === 2}/>
     {register&&(
       <Dashboard />
     )}
     {!register&&(
      <Formik 
    initialValues={userInfo} 
    validationSchema={validationSchema} 
    onSubmit={enrollSubmit}>
    {(
    {values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit})=>{
     const {email} = values;
     return(
    <>
     <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"80%",height:"100vh",
    overflowX: "hidden",paddingTop:2,mx:5,width:"80%"}}>
    <Box sx={{mx:{
      lg:40,
      md:40,
      xs:8,
      sm:8
    },width:"85%",justifyContent:"center",alignItems:"center"}}>
    {/* <Typography variant="div" component="h5">Get Started</Typography> */}
    <Typography variant="p" component="h6"><CheckCircleOutlineIcon fontSize="large"/>Get Started</Typography>
    <Grid sx={{mt:2,width:"100%", height:{
       lg:300,
       md:300,
       sm:400,
       xs:400
     },color:"black",position:"relative",backgroundRepeat:"no-repeat"}} className="bg2">
    <Box sx={{position:"absolute", bottom:0,mx:2}}>
    <Typography variant="p" component="h6" sx={{color:"#CCA300"}}>Register through the link below to get started</Typography>
    <Typography variant="p" component="h6" sx={{mt:1}}>
    <LinkIcon sx={{color:"white"}} />
    <a href="https://track.deriv.com/_N2RDUKptcu0KqFKZ7JdnQ2Nd7ZgqdRLk/1/" style={{color:"white",textDecoration:"none"}}>Link</a>
    </Typography>
    </Box>
     </Grid>
     <Grid sx={{mt:2, height:{
       lg:300,
       md:300,
       sm:400,
       xs:400
     },color:"black", mb:2,position:"relative",justifyContent:"center", alignItems:"center", textAlign:"center",paddingTop:6}} className="bg3">
    <Typography variant="p" component="h6" sx={{mb:3,color:"#CCA300"}}>Fill in your email after you register</Typography>
    <CustomInput
    name="email"
    value={email}
    error={touched.email && errors.email}
    onBlur={handleBlur('email')}
    handleChange={handleChange('email')}  
    placeholder ="Kindly enter email used for registration"
    border="solid #CCA300"
    icon={<EmailIcon sx={{color:"#CCA300"}}/>}
    /> 
    <CustomButton title="OK" onClick={handleSubmit} />
     </Grid>
    </Box>
    </Box>
      </>
     )}}
    </Formik>
     )}
    

    <RightSide/> 
     </Box>
    );
}

export default Enroll;