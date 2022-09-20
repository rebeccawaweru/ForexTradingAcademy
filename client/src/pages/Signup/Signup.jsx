import React,{useState, useEffect} from 'react';
import {Box,Grid,Container,CardMedia} from '@mui/material'
import {Link} from 'react-router-dom'
import { CustomButton, CustomInput,CustomAlert } from '../../components';
import {useNavigate, useParams} from 'react-router-dom'
import {logo} from '../../assets'
import {Formik} from 'formik'
import * as  Yup from 'yup'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import client from '../../api/client'
const regx = /^\d{10}$/;
const validationSchema = Yup.object({
fullname : Yup.string().trim().min(5,'invalid name!').required('Full name is required'),
email: Yup.string().email('Invalid email!').required('Email  is required'),
phonenumber:Yup.string().matches(regx,'Invalid phonenumber').required('Phone number is required'),
password:Yup.string().trim().min(6,'password must have 6 or more characters').required('Password is required'),
confirmPassword:Yup.string().equals([Yup.ref('password'),null],'Passwords do not match!')
})
const Signup = ()=> {
  const history = useNavigate()
  const {id} = useParams()
  const [success,setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage,setErrorMessage]= useState('')
   useEffect(()=>{
     
   })
  function login(){
     setTimeout(()=>{
          history('/login')
      },3000)
  }
  const userInfo = {
        fullname:'',
        email:'',
        phonenumber:0,
        password:'',
        confirmPassword:''
       }
      
    const signUp = async(values)=>{
     try {
       const response = await client.post('/signup',{
         ...values
       })
      if(response.data.success){
         setSuccess(true)
         if(id){
          await client.post('/newreferral',{
            _id:id,
            referralLink:`https://forextradingacademy.co.ke/signup/${id}`,
            senderId:id,
            userId:response.data.id
         }).then(response=>console.log(response.data));
      }
       
         await client.patch('/user/'+response.data.id, {
          referralLink:`https://forextradingacademy.co.ke/signup/${response.data.id}`
         }).then(login())
      }
     } catch (error) {
       setError(true)
      if(error.message === "Request failed with status code 400"){
        setErrorMessage('Kindly input the missing fields')
      }else if (error.message === "Request failed with status code 401"){
      setErrorMessage('Email  already exists') 
     }else if (error.message === "Network Error" || error.message === "Request failed with status code 500"){
    setErrorMessage('Network error. Please check your internet connection')
    }
     }
    }

    return (
      <CardMedia sx={{width:"100%", margin:0, height:{
        lg:"115vh",
        md:"122vh",
        xs:"135vh",
        sm:"120vh"
      }}} className="bg">
     <Container component="main" maxWidth="sm">
    <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
    <Box component="img" src={logo} sx={{width:250,height:160}}/>
    <Formik 
    initialValues={userInfo} 
    validationSchema={validationSchema} 
    onSubmit={signUp}>
    {(
    {values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit})=>{
     const{fullname,email,phonenumber,password,confirmPassword}= values
     return(
    <>
    <Grid container spacing={2}>
     <Grid item xs={12}>
     {success && <CustomAlert color="success" message="Sign up successfull"/>}
      {error && <CustomAlert color="error" message={errormessage}/> }
     </Grid>
    <Grid item xs={12} sm={6}>
    <CustomInput
    fullWidth
    label="Fullname"
    name="fullname"
    value={fullname}
    error={touched.fullname && errors.fullname}
    handleChange={handleChange('fullname')} 
    onBlur={handleBlur('fullname')}
    icon={<PersonIcon sx={{color:"#CCA300"}}/>}   
    border="solid 1.5px black" 
    />   
    </Grid>
    <Grid item xs={12} sm={6}>
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
    label="Phone"
    name="phone"
    value={phonenumber}
    error={touched.phonenumber && errors.phonenumber}
    onBlur={handleBlur('phonenumber')}
    handleChange={handleChange('phonenumber')}  
    icon={<LocalPhoneIcon sx={{color:"#CCA300"}}/>}
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
   <Grid item xs={12}>
    <CustomInput
     fullWidth
    label="Confirm Password"
    type="password"
    name="confirmPassword"
    value={confirmPassword}
    error={touched.confirmPassword && errors.confirmPassword}
    onBlur={handleBlur('confirmPassword')}
    handleChange={handleChange('confirmPassword')} 
    icon={<LockOpenIcon sx={{color:"#CCA300"}}/>}
    border="solid 1.5px black"
    />
   </Grid>
   </Grid>
    <CustomButton fullWidth title="Register" onClick={handleSubmit}/>
    <Grid container justifyContent="flex-end" sx={{mt:2}}>
    <Grid item>
    <Link to="/login" style={{textDecoration:"none",color:"#CCA300", fontWeight:"bolder"}}>
       Already have an account? Sign in
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

export default Signup;


  // const [user, setUser]  = useState({
    //     fullname:'',
    //     email:'',
    //     phone:0,
    //     password:'',
    //     confirmpassword:''
    // })
    // const handleChange = e =>{
    // const {name,value} = e.target
    // setUser({...user,[name]:value})
  
    // }