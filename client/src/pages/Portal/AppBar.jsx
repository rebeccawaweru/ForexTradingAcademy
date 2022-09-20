import React,{useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Toolbar,AppBar,Typography,Box,Avatar} from '@mui/material'
import CustomButton from '../../components/Reused/CustomButton';
import {logo} from '../../assets'
import CustomDrawer from  '../../components/Reused/CustomDrawer'
function CustomAppBar() {
     const history = useNavigate();
    return (
        <AppBar position="sticky"  elevation={0} sx={{backgroundColor:"white", color:"black"}}>
        <Toolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        <Box component="img" sx={{height:120, width:200}} src={logo} alt="" />
        </Typography>
      <CustomDrawer sx={{border:"none", display:{
        xs:"block",
        sm:"block",
        lg:"none",
        md:"none"
      }}}/>
        <Box sx={{display:{
          xs:"none",
          sm:"none",
          lg:"block",
          md:"block"
        }}}>
        <CustomButton title="Dashboard"/>
          <CustomButton title="Member"/>
      
          <CustomButton title="Report" />
          <CustomButton title="Help"/>
          <CustomButton title="Login"/>
        </Box>
        <Box sx={{display:"flex"}}>
            <Avatar
            alt=""
            src="/static/images/avatar/1.jpg"
            sx={{marginLeft:3}}
            />
            <Typography variant="p" component="h6" sx={{mt:1,mx:1}}>Rebecca</Typography>
                </Box>
        </Toolbar>
      </AppBar>
    );
}

export default CustomAppBar;