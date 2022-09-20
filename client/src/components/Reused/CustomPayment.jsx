import React,{useState,useEffect} from 'react';
import {Box,Typography} from '@mui/material'
import {CustomButton,CourseData,CustomAlert} from '../index'
import CustomInput from './CustomInput'
import client from '../../api/client'
import axios from 'axios';
import ShareIcon from '@mui/icons-material/Share';
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

export default function CustomPayment({id}) {
  const [data,setData] = useState([])
   const [loading,setLoading] = useState(false)
  const [url,setUrl] = useState('')
  const user = localStorage.getItem('userId')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState(0)
  const [discount, setDiscount] = useState('')
  const [message,setMessage] = useState('Request failed with status code 404')
  const [disc, setDisc] = useState('')
  React.useEffect(() => {
    try {
    fetch('https://forexarena.herokuapp.com/forexarena/user/'+user)
      .then(result => result.json())
      .then(data => {
        setLoading(false)//causes re render
        setData(data.user.user)//causes re render
        setEmail(data.user.email)
        setPhone(data.user.phonenumber)
     })
      axios.get('https://forexarena.herokuapp.com/forexarena/referral/'+user).then(response=>setMessage(response.data))
   
      if(message === "Request failed with status code 404" ){
        setDiscount(1)
      }else if(!message){
        setDiscount(0.9)
        setDisc("-10%")
      }
     } catch (error) {
        console.log(error.message)
     }
      
  },[])

  let courses = CourseData.filter(function (course) {
    return course.id == id;
  }).map((course,id)=>{
      return course.title 
  })

  let amounts = CourseData.filter(function (course) {
    return course.id == id;
  }).map((course,id)=>{
      return course.amount*discount
  })

  
  const handleOpen = (id) => {
    client.post('/ipay-api',{
        email:email,
        phone:phone,
        course: courses[0],
        amount: amounts[0],
        type:"course",
        description:"course"
      }).then(response=>setUrl(response.data))
        if(url != ''){
          window.location.replace(url);
      }
  };

   return (
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
          {email && <CustomButton title="PAY" onClick={handleOpen}/>}
          {/* <IconButton >
          <ShareIcon/>
          </IconButton> */}
          <Typography color="text.disabled">{disc}</Typography>
   
   </Box>

    

  );
}
