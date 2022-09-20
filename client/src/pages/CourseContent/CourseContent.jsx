import React, { useState,useEffect } from 'react';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box,Typography,Grid} from '@mui/material'
import { CustomButton,Sidebar,CustomAlert,CustomCard} from '../../components';
import client from '../../api/client'
import {useParams} from 'react-router-dom'
import {content} from '../../assets'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useNavigate} from 'react-router-dom'
function CourseContent() {
  const {id} = useParams()
  const history = useNavigate()
  const [data,setData] = useState([])
  const [email,setEmail] = useState('')
  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const [orderId,setorderId] = useState([])
  const [paid,setPaid] = useState(false)
  const [added,setAdded] = useState(false)
  async function getUser(){
    await client.get('/user/'+id).then((response)=>{
      setEmail(response.data.user.email)
     client.post('/getUser',{
        email:response.data.user.email
      }).then((response)=>{
        setData(response.data.user)
        setPaid(true)
      })
       if(response.data.user.usertype === "added"){
        setAdded(true)
       }else{
        setAdded(false)
       }

    })

    
  }
  
   useEffect(()=>{
    getUser()
   },[])
   const handleSubmit=async(id)=>{
    history('/studentcourse/'+id)
   }
    return (
      <Box sx={{margin: 0, padding:0,boxSizing:"border-box",width:"100%",height:"100vh",
      overflowX: "hidden",display:"flex",}}>
       <Sidebar selected2={selectedIndex === 3}/>  
       <Box sx={{mx:{
        lg:30,
        md:30,
        xs:10,
        sm:10
       },width:"80%",mt:3}}>
       <Typography variant="div" component="h5">Course Content</Typography>
        {!paid && <CustomAlert color="error" message="Enroll to view content"/>}
       <Grid container sx={{width:"100%",height:"100%",display:"flex",}}>
        {paid && data.map((c)=>{
          return <Box sx={{mt:2}} key={c._uid}><CustomCard icon={<LockOpenIcon/>} image={content} title={c.orderId} description={c.topic} sx={{display:"none"}} Button={<CustomButton title="View" onClick={()=>handleSubmit(c.orderId)}/>}/></Box>
        })}
         {added && data.map((c)=>{
          return <Box sx={{mt:2}} key={c._uid}><CustomCard icon={<LockOpenIcon/>} image={content} title={c.orderId} description={c.topic} sx={{display:"none"}} Button={<CustomButton title="View" onClick={()=>handleSubmit(c.orderId)}/>}/></Box>
        })}
       </Grid>
       </Box>
      
      </Box>
    );
}

export default CourseContent;