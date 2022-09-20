import React from 'react';
import {Box, Typography,IconButton} from '@mui/material'
import {CustomButton,CourseData} from '../../components'
import { useNavigate,useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {trade1} from '../../assets'
function Courses() {
    const history = useNavigate()
     const {id} = useParams();
    let courses = CourseData.filter(function (course) {
        return course.id == id;
    })
    return (
        <>
   {courses.map((data,id)=>(
    <Box key={id} sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden"}}>
    <IconButton color="primary" aria-label="add to shopping cart" sx={{mt:3,paddingLeft:"5%"}} onClick={()=>history('/')}>
        <ArrowBackIcon />
      </IconButton>  
    <Box sx={{display:{
        lg:"flex",
        md:"flex",
        sm:"block",
        xs:"block"
    }, mt:3,paddingLeft:{
        lg:"10%",
        md:"10%",
        sm:3,
        xs:3,

    }}}>
    <Box>
    {data.Card}
    </Box>
    <Box>
        
    <Typography varinat='body2' component="div" color='text.disabled'>Introduction</Typography>
     {data.introduction}
    <Typography varinat='body2' component="div" color='text.disabled'>Details</Typography>
     {data.Details}
     <Box sx={{marginRight:5}}>
    <CustomButton title="Get Started" onClick={()=>history('/signup')} fullWidth/>
    </Box>
    </Box>
    </Box>
    </Box>
    ))}
    </>
    );
}

export default Courses;