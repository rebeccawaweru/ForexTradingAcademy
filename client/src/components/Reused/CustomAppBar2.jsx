import React from 'react';
import {Box,Typography,Stack,IconButton,AppBar,Toolbar,Avatar,Button, TextField, InputAdornment,Modal } from '@mui/material'
import {CustomDrawer} from '../../components'
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import {useNavigate} from 'react-router-dom'
function CustomAppBar2({handleReset}) {
  const history = useNavigate()
    return (
        <AppBar position="sticky"  elevation={0} sx={{background:"linear-gradient(180deg, #7C71FE 0%, #1C119D 100%)", color:"white"}}>
        <Toolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
        {/* <Box component="img" sx={{height:120, width:200}} src={logo} alt="" /> */}
        <Box sx={{mt:2,mb:2}}>
        <AppsIcon sx={{mt:2,mb:2,mx:2}}/>
 
        </Box>
        </Typography>
      <CustomDrawer sx={{border:"none", display:{
        xs:"block",
        sm:"block",
        lg:"none",
        md:"none"
      }}}/>
        <Box sx={{color:"white",display:{
          xs:"none",
          sm:"none",
          lg:"block",
          md:"block"
        }}}>
     <Button sx={{color:"white"}} onClick={()=>history('/sendmails')}>Send Emails</Button>
        <Button sx={{color:"white"}} onClick={handleReset}>Reset Password</Button>
          
      
        </Box>
        <Box sx={{display:"flex"}}>
          <Box sx={{mt:1,mx:1}}>
          <Typography variant="p" component="h6">Calvin Kirochi</Typography>
        <Typography color="text.disabled">Super Admin</Typography>
          </Box>
     
            <Avatar
            alt=""
            src="/static/images/avatar/1.jpg"
            sx={{marginLeft:1}}
            />
          
                </Box>
        </Toolbar>
      </AppBar> 
    );
}

export default CustomAppBar2;