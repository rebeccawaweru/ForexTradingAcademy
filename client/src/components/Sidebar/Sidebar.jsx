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
import ScrollToBottom from 'react-scroll-to-bottom';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
const Sidebar=({selected,selected1,selected2,selected3,selected4,selected5,selected6,selected7})=> {
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
    return (
    <Box sx={{height:"100%",width:{
        lg:"15%",
        md:"15%",
        xs:"20%",
        sm:"20%"
    }, position:"fixed",backgroundColor:"#EAE7FA", justifyContent:"center", alignItems:"center", textAlign:"center",paddingTop:2}}>
    <Typography variant="p" component="h6">Forex Trading Academy</Typography>
    <Box sx={{mt:1}}>
    {/* {activeButton.objects.map((elements,index)=>(
     <div key={index} className="inactive" onClick={()=>toogleActive(index)}></div>
    ))} */}
  
    <CustomListItem selected={selected} onclick={(event) => handleListItemClick(event, 1)} onclick2={()=>history('/enroll/'+id)} title="Home" icon={<BungalowIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem  selected={selected1} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/enroll/'+id)}  title="Enroll" icon={<AppRegistrationIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem  selected={selected2} onclick={(event) => handleListItemClick(event, 2)} onclick2={()=>history('/coursecontent/'+id)}  title="Course Content" icon={<AutoStoriesIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected3} onclick2={()=>history('/vip')}  onclick={(event) => handleListItemClick(event, 3)}  title="VIP Forum" icon={<AttractionsIcon fontSize='large'  sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected4} onclick={(event) => handleListItemClick(event, 4)} onclick2={()=>history("/direct")}  title="Mentorship" icon={<AssistantIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected} onclick={(event) => handleListItemClick(event, 1)} onclick2={()=>history('/referral')} title="Referrals" icon={<AccountTreeIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected5} onclick={(event) => handleListItemClick(event, 5)}  title="Signals" icon={<AutoGraphIcon  fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected6} onclick={(event) => handleListItemClick(event, 6)}  title="Analysis" icon={<BarChartIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem selected={selected7} onclick={(event) => handleListItemClick(event, 7)}  title="Robots" icon={<SmartToyIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    <CustomListItem sx={{position:'fixed',
    bottom:0}} onclick={handleLogout} title="Log out" icon={<ExitToAppIcon fontSize='large' sx={{color:"#CCA300"}}/>}/>

    </Box>
    </Box>

    );
}

export default Sidebar;
