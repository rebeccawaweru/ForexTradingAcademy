import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import {Box, Typography,IconButton,TextField,InputAdornment} from '@mui/material'
import {Sidebar,RightSide} from '../../components'
import CreateIcon from '@mui/icons-material/Create';
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import {PrivateMessages} from '../../components';
import {useNavigate} from 'react-router-dom'
import client from '../../api/client'
// const socket = io.connect("http://localhost:5000");

const Direct = ()=> {
   const id = localStorage.getItem('userId');
    const history = useNavigate()
    const location = useLocation();
    const [name,setName] = useState('');
    const [admin,setAdmin] = useState('')
    const [course,setCourse] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages]= useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(5);
    useEffect(()=>{
      client.get('/user/'+id).then((response)=>{
        setName(response.data.user.fullname)
      })
    })
    //function for sending messages.
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
    const handleClose = ()=>{
        history('/vip')
        window.location.reload()
    }
    console.log(name,id)
    return (
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden",display:"flex"}}>
    <Sidebar selected4={selectedIndex === 5}/>
    <Box sx={{mx:{
      lg:38,
      md:38,
      xs:10,
      sm:10
    },width:"70%",mt:1}}>
    <Box sx={{backgroundColor:"#EAE7FA",width:"100%",height:"10%",textAlign:"center",justifyContent:"center",alignItems:"center",paddingTop:2,mb:2, boxShadow:3,postion:"relative",diplay:"flex"}} >
    <Box sx={{position:"sticky"}}>
    <CircleIcon fontSize="small"  sx={{position:"absolute", left:15,color:"#CCA300",mt:1}}/>
    </Box>
    <Typography variant="p" component="h5"> Chat with Mentor
   </Typography> 
    </Box>
 
     <PrivateMessages/>
          {/* <Box sx={{width:"60%",position:"sticky", bottom:0,mx:1}}> */}
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
       <RightSide/>
    </Box>
    );
}

export default Direct;