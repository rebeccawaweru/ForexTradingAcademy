import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Box, Typography,Grid,Avatar} from '@mui/material'
import {client} from '../../assets'
export default function Stepper() {
    return (
      <Grid container sx={{justifyContent:"center",alignItems:"center", textAlign:"center", mt:2, backgroundColor:"whitesmoke"}}>
      <Carousel>
        <Carousel.Item style={{paddingTop:"20px"}} interval={3000}>
            <Box sx={{display:"flex"}}>
                <Avatar alt="img" src={client} sx={{width:130, height:130}}/>
                <Typography variant="body2" color="text.secondary" sx={{mx:3}}>I have had nothing but great experiences with Forex. I am planning on trading with them for a long time.<br></br>  They are the most profitable broker I have worked with.</Typography>
            </Box>
        <Box sx={{mt:{
            sm:20,
            xs:20,
            md:10,
            lg:10
            
        }}}>
        <Carousel.Caption style={{color:"black",marginTop:'30px', mx:8,}}>
          <h5>Van Czechopik Olso,Norway</h5>
            <p>Forex guru</p>
          </Carousel.Caption> 
        </Box> 
        </Carousel.Item>

        <Carousel.Item style={{paddingTop:"20px"}} interval={3000}>
            <Box sx={{display:"flex"}}>
            <Avatar alt="img" src={client} sx={{width:130, height:130}}/>
                <Typography  variant="body2" color="text.secondary" sx={{mx:3}}>I have had nothing but great experiences with Forex. I am planning on trading with them for a long time.<br></br>  They are the most profitable broker I have worked with.</Typography>
            </Box>
        <Box sx={{mt:{
            sm:20,
            xs:20,
            md:10,
            lg:10
            
        }}}>
        <Carousel.Caption style={{color:"black",marginTop:'30px'}}>
        <h5>Van Czechopik Olso,Norway</h5>
            <p>Forex guru</p>
          </Carousel.Caption> 
        </Box> 
        </Carousel.Item>

        <Carousel.Item style={{paddingTop:"20px"}} interval={3000}>
            <Box sx={{display:"flex"}}>
            <Avatar alt="img" src={client} sx={{width:130, height:130}}/>
                <Typography  variant="body2" color="text.secondary" sx={{mx:3}}>I have had nothing but great experiences with Forex. I am planning on trading with them for a long time.<br></br>  They are the most profitable broker I have worked with.</Typography>
            </Box>
        <Box sx={{mt:{
            sm:20,
            xs:20,
            md:10,
            lg:10
            
        }}}>
        <Carousel.Caption style={{color:"black",marginTop:'30px'}}>
        <h5>Van Czechopik Olso,Norway</h5>
            <p>Forex guru</p>
          </Carousel.Caption> 
        </Box> 
        </Carousel.Item>
      </Carousel>
      </Grid>
    );
  }
