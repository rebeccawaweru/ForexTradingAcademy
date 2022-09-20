import React, { useState,useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box,Typography,InputLabel,MenuItem,FormControl,Select, CardMedia,Grid} from '@mui/material'
import {Sidebar,CustomAlert,CourseData, CustomButton,CustomCard} from '../../components';
import client from '../../api/client'
import {useParams} from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {learning} from '../../assets'
function StudentCourse() {
  const {course} = useParams()
  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const [data,setData] = useState([])
  async function getCourse(){
    await client.get('/file/'+course).then((response)=>{
      setData(response.data.courses)
    })
  }
 
  useEffect(()=>{
   getCourse()
  },[])
  const handleSubmit =async(id)=>{
    console.log(id)
    await client.get('course/'+id).then((response)=>{
     window.location.replace('https://forextradingarena.herokuapp.com/uploads/'+response.data.course.file)
     
    })
   }
    return (
      <Box sx={{margin: 0, padding:0,boxSizing:"border-box",width:"100%",height:"100vh",
      overflowX: "hidden",display:"flex"}}>
        <Box sx={{width:"20%"}}>
        <Sidebar selected2={selectedIndex === 3}/>  
        </Box>
       <Box sx={{width:"80%",mt:3}}>
       <Typography variant="div" component="h5">Course Content</Typography>
       <Grid container sx={{width:"100%",height:"100%",display:"flex"}}>
        {data.map((c)=>{
          return <Box key={c._id} elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:370,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
            background: "whitesmoke",
            }}}>   <Box component="img" sx={{height:"65%", width:"100%"}} src={learning} alt=""/><MenuBookIcon fontSize='large' sx={{color:"#CCA300"}}/><Typography component="h6" variant='p'>{c.course}-{c.topic}</Typography>    <Box sx={{mt:1}}>
          <CustomButton title="View" onClick={()=>handleSubmit(c._id)} />
            </Box></Box>
        })}
       </Grid>
       </Box>
      </Box>
    );
}

export default StudentCourse;