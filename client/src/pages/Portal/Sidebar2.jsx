import React,{useState,useEffect} from 'react';
import {Box, Grid, Typography} from '@mui/material'
import BungalowIcon from '@mui/icons-material/Bungalow';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AttractionsIcon from '@mui/icons-material/Attractions';
import AssistantIcon from '@mui/icons-material/Assistant';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BarChartIcon from '@mui/icons-material/BarChart';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {CustomListItem} from '../../components'
import { useNavigate } from 'react-router-dom';
import client from '../../api/client';
import EmailIcon from '@mui/icons-material/Email';
import ScrollToBottom from 'react-scroll-to-bottom';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import BadgeIcon from '@mui/icons-material/Badge';
import ClassIcon from '@mui/icons-material/Class';
import ExtensionIcon from '@mui/icons-material/Extension';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
const Sidebar2=({selected,selected1,selected2,selected3,selected4,selected5,selected6,selected7})=> {
    const [name,setName] = useState('')
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
     };
    const history = useNavigate()
    const id = localStorage.getItem('userId')
    useEffect(()=>{
        client.get('/user/'+id)
        .then((response)=>{
          setName(response.data.user.fullname)
        })
        })
    const handleLogout = ()=>{
        localStorage.removeItem('userId');
        history('/')
    }
    const viewHeight = window.outerHeight;
    return (
    <Box sx={{height:"280%",width:"20%", background:"linear-gradient(180deg, #7C71FE 0%, #1C119D 100%)", justifyContent:"center", alignItems:"center", textAlign:"center",paddingTop:2,color:"white",positon:"sticky",position:"-webkit-sticky",top: 0}}>

    <Typography variant="p" component="h6">Dashboard</Typography>
    <Box sx={{mt:1}}>
  
    <CustomListItem selected={selected} onclick={(event) => handleListItemClick(event, 1)} onclick2={()=>history('/members')} title="Home" icon={<BungalowIcon fontSize='large' sx={{color:"white"}}/>}/>

    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/members')}  title="Members" icon={<AppRegistrationIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/newuser')}  title="Add User" icon={<GroupAddIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/adminfreeclass')}  title="Free Classes" icon={<ClassIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/payments')}  title="Payments" icon={< BarChartIcon  fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/adminbots')}  title="User Bots" icon={<BadgeIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/subscriptions')}  title="Subscriptions" icon={<ExtensionIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem selected={selected3} onclick2={()=>history('/vipchats')}  onclick={(event) => handleListItemClick(event, 3)}  title="VIP Forum" icon={<AttractionsIcon fontSize='large'  sx={{color:"white"}}/>}/>

    <CustomListItem selected={selected4} onclick={(event) => handleListItemClick(event, 4)} onclick2={()=>history("/adminchat")}  title="Chats" icon={<AssistantIcon fontSize='large' sx={{color:"white"}}/>}/>

    <CustomListItem selected={selected4} onclick={(event) => handleListItemClick(event, 4)} onclick2={()=>history("/usermessage")}  title="Messages" icon={<EmailIcon fontSize='large' sx={{color:"white"}}/>}/>

    <CustomListItem selected={selected5} onclick={(event) => handleListItemClick(event, 5)} onclick2={()=>history("/admincontent")}  title="Content" icon={<AutoStoriesIcon fontSize='large' sx={{color:"white"}}/>}/>
    <CustomListItem selected={selected4} onclick={(event) => handleListItemClick(event, 4)} onclick2={()=>history("/uploads")}  title="Uploads" icon={<CloudDoneIcon fontSize='large' sx={{color:"white"}}/>}/>

    <CustomListItem selected={selected4} onclick={(event) => handleListItemClick(event, 4)} onclick2={()=>history("/addmedia")}  title="Add Media" icon={<CloudDoneIcon fontSize='large' sx={{color:"white"}}/>}/>

    <CustomListItem selected={selected5} onclick={(event) => handleListItemClick(event, 5)} onclick2={()=>history("/reports")}  title="Reports" icon={<AutoGraphIcon  fontSize='large' sx={{color:"white"}}/>}/>


    <CustomListItem sx={{
    bottom: 0}} onclick={handleLogout} title="Log out" icon={<ExitToAppIcon fontSize='large' sx={{color:"white"}}/>}/>

    </Box>
    </Box>

    );
}

export default Sidebar2;
