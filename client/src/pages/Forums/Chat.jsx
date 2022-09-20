import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import {Box, Typography,IconButton,TextField,InputAdornment} from '@mui/material'
import {Sidebar,RightSide} from '../../components'
import CreateIcon from '@mui/icons-material/Create';
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import { Messages } from '../../components';
import {useNavigate} from 'react-router-dom'
// const socket = io.connect("http://localhost:5000");

const Chat = ()=> {
    const history = useNavigate()
    const location = useLocation();
    const [name,setName] = useState('');
    const [course,setCourse] = useState('');
    const [message,setMessage] = useState('');
    const [messages,setMessages]= useState([]);
    // useEffect(()=>{
    //     const {name, course} = queryString.parse(location.search)
    //     setName(name);
    //     setCourse(course);
    //     socket.emit('join', {name, course},(error)=>{
    //            if(error){
    //                alert(error)
    //            }
    //     });
    //     return ()=>{
    //         socket.emit('disconnect');
    //         socket.off();
    //     }
    // },[ location.search])
    // useEffect(() => {
    //     socket.on('message', (message) => {
    //       setMessages([ ...messages, message ]);
    //     });
        
    // }, [messages]);

    //function for sending messages.
    // const sendMessage = (event)=>{
    //     event.preventDefault()

    //     if(message){
    //     socket.emit('sendMessage', message, ()=>setMessage(''));
       
    //     }
    // }
    const handleClose = ()=>{
        history('/vip')
        window.location.reload()
    }
    console.log(message,messages)
    return (
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden",display:"flex"}}>
    <Sidebar/>
    <Box sx={{mx:{
      lg:35,
      md:35,
      xs:15,
      sm:15
    },width:"80%",mt:1}}>
    <Box sx={{backgroundColor:"#EAE7FA",width:"100%",height:"10%",textAlign:"center",justifyContent:"center",alignItems:"center",paddingTop:2,mb:2, boxShadow:3,postion:"relative",diplay:"flex"}} >
    <Box sx={{position:"sticky"}}>
    <CircleIcon fontSize="small"  sx={{position:"absolute", left:15,color:"#CCA300",mt:1, display:{
      lg:"block",
      md:"block",
      xs:"none",
      sm:"none"
    }}}/>
    </Box>
    <Typography variant="p" component="h5">  {course} Forum
    <IconButton aria-label="delete" sx={{left:160}} onClick={handleClose}>
          <CloseIcon fontSize="small" sx={{color:"#CCA300"}}/>
        </IconButton></Typography> 
    </Box>
 
     <Messages messages={messages} name={name} />
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
          }}

        />
        </Box>
    
    </Box>
       <RightSide/>
    </Box>
    );
}

export default Chat;