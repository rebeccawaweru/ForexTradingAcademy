import React,{useState} from 'react';
import {Box,Grid,Container,CardMedia} from '@mui/material'
import { CustomButton, CustomInput,CustomAlert } from '../../components';
import {Link} from 'react-router-dom'
import client from '../../api/client'
import {logo} from '../../assets'
import {Formik} from 'formik'
import * as  Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import {useNavigate} from 'react-router-dom'
const validationSchema = Yup.object({
email: Yup.string().email('Invalid email!').required('Email  is required'),
password:Yup.string().trim().min(6,'password must have 6 or more characters').required('Password is required')
})

const Login = ()=> {
  const history = useNavigate();
  const [error, setError] = useState(false);
  const [errormessage,setErrorMessage]= useState('')
    const userInfo = {
        email:'',
        password:'',
    }
    const logIn = async(values)=>{
      try {
       const response = await client.post('/login',{
         ...values
       })
       if(response.data.success){
         localStorage.setItem('userId',response.data.id )
           history('/enroll/'+ response.data.id)
       } 
      } catch (error) {
        setError(true)
        if(error.message === "Request failed with status code 400"){
          setErrorMessage('Kindly input the missing fields')
        }else if (error.message === "Request failed with status code 401" || error.message === "Request failed with status code 404"){
        setErrorMessage('Wrong credentials') 
      }else if (error.message === "Network Error"){
      setErrorMessage('Network error. Please check your internet connection')
         }
      }
    }
    return (
     <CardMedia sx={{width:"100%", height:"100vh"}} className="bg">
     <Container component="main" maxWidth="sm">
    <Box sx={{
           paddingTop:10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
    <Box component="img" src={logo} sx={{width:250,height:200}}/>
    <Formik 
    initialValues={userInfo} 
    validationSchema={validationSchema} 
    onSubmit={logIn}>
    {(
    {values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit})=>{
     const{email,password}= values
     return(
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
      {error && <CustomAlert color="error" message={errormessage}/>}
      </Grid>
  
  <Grid item xs={12}>
  <CustomInput
    fullWidth
    label="Email"
    name="email"
    value={email}
    error={touched.email && errors.email}
    onBlur={handleBlur('email')}
    handleChange={handleChange('email')}  
    icon={<EmailIcon sx={{color:"#CCA300"}}/>}
    border="solid 1.5px black"
    />   
  </Grid>
  <Grid item xs={12}>
  <CustomInput
   fullWidth
    label="Password"
    type="password"
    name="password"
    value={password}
    error={touched.password && errors.password}
    onBlur={handleBlur('password')}
    handleChange={handleChange('password')} 
    icon={<LockOpenIcon sx={{color:"#CCA300"}}/>}
    border="solid 1.5px black"
    />
   </Grid>
   </Grid>
    <CustomButton fullWidth title="Sign in" onClick={handleSubmit}/>
    <Link to ="/forgot">Forgot Password?</Link>
    <Grid container justifyContent="flex-end" sx={{mt:2}}>
    <Grid item>
      <Link to="/signup" style={{textDecoration:"none",color:"#CCA300", fontWeight:"bolder"}}>
        Don't have an account? Sign up
      </Link>

    </Grid>
    </Grid>
    </>
     )}}
    </Formik>
    </Box> 
    </Container>  
    </CardMedia>
  
    );
}

export default Login;


 