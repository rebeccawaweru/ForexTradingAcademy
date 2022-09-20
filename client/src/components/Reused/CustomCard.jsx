import React from 'react';
import {Card,Box,CardActions,CardContent,Typography,CardMedia,CardHeader} from '@mui/material'
function CustomCard({image,title,description,header,days,icon,sx,amount,Button}) {
    return (
      <Box sx={{ height:"30%",width:320}}>
        <Card sx={{mb:{
          lg:3,
          md:3,
          sm:1,
          xs:1
        }, mx:2}} elevation={1}>   
   
         <CardHeader sx={sx} title={header}/>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt=""
        />
      <CardContent sx={{justifyContent:"center", alignItem:"center",textAlign:"center"}}>
          <Typography gutterBottom variant="h6" component="h6">
            {title} 
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center", alignItem:"center",textAlign:"center"}}>
          {icon}
          <Typography variant="body2" color="text.secondary" >
            {days}
            {description}
          </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{display:"flex",justifyContent:"center", alignItem:"center",textAlign:"center"}}>
        <Typography variant="body2" color="text.secondary">
            Ksh {amount}
          </Typography>
          {Button}
        </CardActions>
      </Card>
      </Box>
    );
}

export default CustomCard;