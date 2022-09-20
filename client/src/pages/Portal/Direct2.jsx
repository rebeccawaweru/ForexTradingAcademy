import React,{useState,useEffect} from 'react';
import { useNavigate,useParams,useLocation } from 'react-router-dom';
import io from 'socket.io-client'
import {Box, Typography,TextField,InputAdornment} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import CircleIcon from '@mui/icons-material/Circle';
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import CustomAppBar from './AppBar';
import { CustomAppBar2, PrivateMessages } from '../../components';

// const socket = io.connect("https://forexarena.herokuapp.com/");
const Direct2 =()=>{
    const id = localStorage.getItem('userId');
    const history = useNavigate()
    const location = useLocation();
    const [name,setName] = useState('');
    const [admin,setAdmin] = useState('')
    const [course,setCourse] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages]= useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(5);
    // useEffect(()=>{
    //   client.get('/user/'+id).then((response)=>{
    //     setName(response.data.user.fullname)
    //   })
    // })
    // //function for sending messages.
    // const sendMessage = async (event)=>{
    //     event.preventDefault()
    //     const response = await client.post('/addmessage',{
    //       sentMessage:message,
    //       userName:name,
    //       userId:id,
    //     })
    //     if(response.data.success){
    //       setMessage('')
    //     }
    //     if(message){
    //     socket.emit('sendMessage', message, ()=>setMessage(''));
    //     }
    // }
    // const handleClose = ()=>{
    //     history('/vip')
    //     window.location.reload()
    // }
    // console.log(name,id)
    return (
     <>
     <Box sx={{width:"100%"}}>
     <CustomAppBar2/>
     <PrivateMessages/>
        <Box sx={{mt:5,postion:"absolute"}}>
        <TextField
        style={{ bottom:0,width:"100%"}}
        value={message}
          onChange={(event)=>setMessage(event.target.value)}
          // onKeyPress={event=>event.key === 'Enter' ? sendMessage(event) : null}
          InputProps={{
            startAdornment:<InputAdornment position="start">{<CreateIcon sx={{color:"#CCA300"}}/>}</InputAdornment>,
            style:{fontSize:20,fontWeight:"500"}
          }}/>
        </Box>
    </Box>
     <Box>
     </Box>
    </>
    );
}
export default Direct2 ;