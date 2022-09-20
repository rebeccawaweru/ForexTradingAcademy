import React from 'react';
import {Typography,Grid,Box} from '@mui/material'
function CustomContent({title,image,paragraph}) {
    return (
        <Grid container sx={{mt:2,display:"flex", alignItems:"center",justifyContent:"center"}}>
        <Box sx={{display:"flex"}}>
        <Box sx={{textAlign:"left",mx:{
            lg:20,
            md:20,
            sm:2,
            xs:2
        }}}>
        <Typography component="p" variant="h6" sx={{textAlign:{
            sm:"center",
            xs:"center",
            lg:"left",
            md:"left"
        }}}>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{paragraph}</Typography>
        </Box>
        <Box component="img" sx={{height:300, width:"100%", mx:10, display:{
            sm:"none",
            lg:"block",
            xs:"none",
            md:"block"
        }}} src={image} alt="" />
        </Box>
      </Grid> 
    );
}

export default CustomContent;
