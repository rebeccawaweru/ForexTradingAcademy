import React,{useState} from 'react';
import {Box,Grid,Container,Card,CardMedia,CardActions,Typography,IconButton} from '@mui/material'
import {blackboard} from '../../assets'
import {CustomButton, CustomCard} from '../../components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate} from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function PhysicalClasses() {
    const history = useNavigate()
    return (
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden"}}>
        <IconButton color="primary" aria-label="add to shopping cart" sx={{mt:3,paddingLeft:"5%"}} onClick={()=>history('/')}>
        <ArrowBackIcon />
      </IconButton>
      <Box sx={{display:{
        lg:"flex",
        md:"flex",
        sm:"block",
        xs:"block"
    }, mt:8,paddingLeft:{
        lg:"10%",
        md:"10%",
        sm:3,
        xs:3,

    }}}>
   <Box>
   <Card sx={{width:"95%" }} elevation={0} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="350"
        image={blackboard}
      />
      
      </Card>
      <Typography variant="p" component="h6" sx={{mt:2}}><LocationOnIcon/>Location: Parklands Office (Near Stima Plaza)</Typography>
    </Box>
    <Box sx={{width:"60%"}}>
    <Typography variant="h4" component="p">EARLY BIRD FEE 80% OFF @KSH 10,000.</Typography>
  <Typography  variant="p" component="h6">Enrollment on going limited to the first 10 people. Register Now!</Typography>
  <br></br>
  <Typography  variant="p" component="p">Normal Class Fee @KSH 50,000. Register Anytime</Typography>
  <br></br>
  <Typography>Evening Classes</Typography>
  <Typography variant="p" component="h6"><AccessTimeIcon/>5:00PM-7:00PM</Typography>
  <br></br>
  <Typography variant="p" component="h6"><AccessTimeIcon/>7:00PM-9:00PM</Typography>
  <Box sx={{mt:5,marginRight:5}}>
  <CustomButton title="Register" onClick={()=>history('/signup')} fullWidth/>
  </Box>
  </Box>
  </Box>  
     

  </Box>
    );
}

export default PhysicalClasses;