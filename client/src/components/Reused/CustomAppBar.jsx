import React,{useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {Toolbar,AppBar,Typography,Box,Alert,Button,IconButton} from '@mui/material'
import CustomButton from './CustomButton';
import CustomDropDown from './CustomDropDown';
import { HomeScreenPrompt } from '..';
import CloseIcon from '@mui/icons-material/Close';
import {logo} from '../../assets'
import CustomDrawer from './CustomDrawer'
function CustomAppBar({onclick1,onclick2,onclick3,onclick4}) {
     const history = useNavigate();
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
        <AppBar position="sticky" elevation={0} sx={{backgroundColor:"white", color:"black",mt:5}}>
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
      }}} onclick1={onclick1} onclick2={onclick2} onclick3={onclick3} onclick4={onclick4}/>
       
        <Box sx={{display:{
          xs:"none",
          sm:"none",
          lg:"block",
          md:"block"
        }}}>
        <CustomButton title="Home" onClick={onclick1}/>
          <CustomButton title="Courses" onClick={onclick2}/>
          {/* <CustomDropDown/> */}
          <CustomButton title="E-Books"  onClick={onclick3}/>
          <CustomButton title="Strategies" onClick={onclick4}/>
          <CustomButton title="Login" onClick={()=>history('/login')}/>
          <CustomButton title="Contact Us"/>
        </Box>
          
        </Toolbar>
      </AppBar>
    );
}

export default CustomAppBar;