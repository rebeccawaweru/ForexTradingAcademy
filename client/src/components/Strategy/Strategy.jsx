import React from 'react';
import {Box, Typography,Grid,Stack} from '@mui/material'
import {strategy1,strategy2,strategy3} from '../../assets'
function Strategy() {
    return (
    <Grid container sx={{mt:3,justifyContent:"center",alignItems:"center" }}  >
       <Box sx={{display:{
           sm:"block",
           xs:"block",
           lg:"flex",
           md:"flex"
       }}}>
        <Box sx={{mx:{
            lg:3,
            md:3,
            sm:0,
            xs:0
        }}}>
        <Box component="img" src={strategy1} sx={{height:250,width:350,mb:3 }}/>
        <Typography variant="body2" color="text.secondary">4 STEPS TO CONSIDER BEFORE YOU START</Typography>
        </Box>
        <Box sx={{mx:{
            lg:3,
            md:3,
            sm:0,
            xs:0
        }}}>
        <Box component="img" src={strategy2} sx={{height:250,width:350,mb:3, }}/>
        <Typography variant="body2" color="text.secondary">STRATEGIC PLAN EXECUTION MANAGEMENT</Typography>  
        </Box>
        <Box sx={{mx:{
            lg:3,
            md:3,
            sm:0,
            xs:0
        }}}>
        <Box component="img" src={strategy3} sx={{height:250,width:350,mb:3 }}/>
        <Typography variant="body2" color="text.secondary">BUSINESS PLANNING, STRATEGY AND EXECUTION</Typography>
        </Box>  
        </Box>
    </Grid>
    );
}

export default Strategy;