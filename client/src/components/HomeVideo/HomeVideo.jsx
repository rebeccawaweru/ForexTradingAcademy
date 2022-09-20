import React from 'react';
import {CardMedia} from '@mui/material'
function HomeVideo({video, component,image}) {
    return (
 <CardMedia
 sx={{height:400, mb:{
     lg:0,
     md:0,
     xs:1,
     sm:1
 } ,width:{
     lg:"50%",
     md:"50%",
     xs:"100%",
     sm:"100%"
 }}}
  component={component} 
  autoPlay 
  controls 
  src={video}
  image={image}
 />

    );
}

export default HomeVideo;