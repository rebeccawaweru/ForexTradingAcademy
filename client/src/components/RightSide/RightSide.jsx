import React,{useState,useEffect} from 'react';
import {Box, IconButton,Stack,Avatar,Typography,MenuItem,Menu} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import {CustomListItem} from '../../components'
import client from '../../api/client'
import {useNavigate} from 'react-router-dom'
function RightSide() {
  const history = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    const id = localStorage.getItem('userId')
    const [data,setData] = useState([])
    useEffect(()=>{
    client.get('/user/'+id)
    .then((response)=>{
      setData(response.data.user)
    })
    })
    return (
<Box sx={{height:"180%",width:"20%", backgroundColor:"#EAE7FA", justifyContent:"center", alignItems:"center",paddingTop:2}}>
 <Stack direction="row" alignItems="center"  spacing={4}>
<Box sx={{display:"flex"}}>
<Avatar
  alt=""
  src="/static/images/avatar/1.jpg"
  sx={{marginLeft:3}}
/>
  <Typography variant="p" component="h6" sx={{mt:1,mx:1}}>{data.fullname}</Typography>
     </Box>
            <IconButton aria-label="view" size="small" sx={{position:"absolute", right:20}}        onClick={handleMenu}>
            <MoreVertIcon fontSize="inherit" />
            </IconButton>
         <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={()=>history('/profile/'+id)}><AccountCircleIcon/>Edit Profile</MenuItem>
                <MenuItem onClick={handleClose}><SettingsIcon/>Settings</MenuItem>
              </Menu>

 </Stack>
     <Box sx={{mt:2}}>
     <Typography variant="p" component="h6" sx={{mt:3,mb:3, mx:3}}>Upcoming Classes</Typography>
     <CustomListItem icon={<AccessAlarmIcon/>} title="7:00pm-9:00pm" sx={{backgroundColor:"#f9ea8f",'&:hover': {
    background: "transparent"},backgroundImage:"linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)", borderRadius:5, width:250, height:100, mx:2, mb:2}} />
    <CustomListItem icon={<AccessAlarmIcon/>} title="7:00pm-9:00pm" sx={{backgroundColor:"#f9ea8f",'&:hover': {
    background: "transparent",
    },backgroundImage:"linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%)", borderRadius:5, width:250, height:100, mx:2, mb:2}} />
    </Box>
     </Box>
    );
}

export default RightSide;


