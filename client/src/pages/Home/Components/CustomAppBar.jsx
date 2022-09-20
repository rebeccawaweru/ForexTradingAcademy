import React from 'react';
import {Box,Typography,Toolbar,AppBar,Button,Alert,IconButton} from '@mui/material'
import {logo} from '../../../assets'
import {CustomDrawer,CustomButton,HomeScreenPrompt} from '../../../components';
import {useNavigate} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

function CustomAppBar({onclick2,contact,translate}) {
  const history = useNavigate()
  const [prompt, promptToInstall] = HomeScreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);
  const hide = () => setVisibleState(false);
  const [open, setOpen] = React.useState(true);
  React.useEffect(
   () => {
     if (prompt) {
       setVisibleState(true);
     }
   },
   [prompt]
);
    return (
        <AppBar position="absolute" elevation={0} sx={{backgroundColor:"transparent", color:"white",mt:8,mb:6}}>
        <Toolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
            <Box component="img" sx={{height:120, width:200}} src={logo} alt="" />
            </Typography>
            {open && 
        <Alert
        icon={false}
        sx={{pl:{
          lg:5,
          md:1,
          xs:1,
          sm:1
        }}}
        action={
          <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={()=>{
            setOpen(false)
          }}
        >
        <CloseIcon fontSize="inherit" />
        </IconButton>
        }
      >
      <Button variant='outlined' onClick={promptToInstall}>Add to Homescreen</Button>
      </Alert>
     }
            <CustomDrawer sx={{border:"none", display:{
            xs:"block",
            sm:"block",
            lg:"none",
            md:"none"
          }}} onclick3={contact}/>
        <Box sx={{display:{
          xs:"none",
          sm:"none",
          lg:"block",
          md:"block"
        }}}>
       
           <CustomButton title="Home" />
              <CustomButton title="Courses" onClick={onclick2}/>
              <CustomButton title="Free Classes" onClick={()=>history('/freeclasses')}/>
              <CustomButton title="Contact Us" onClick={contact}/>
              <CustomButton title="Login" onClick={()=>history('/login')}/>
              </Box>
        </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;