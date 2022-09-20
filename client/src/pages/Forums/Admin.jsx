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

const Admin = ()=> {
    const history = useNavigate()
    const location = useLocation();
    const [name,setName] = useState('');
    const [course,setCourse] = useState('');
    const [users,setUsers] = useState([])
    const [active,setActive] = useState(false)
    const [message,setMessage] = useState([]);
    const [messages,setMessages]= useState([]);
    const getUsers = ()=>{
      client.get('/users').then((response)=>{
         setUsers(response.data.users)
      })
    }
    const getMessages = ()=>{
      client.get('/chats').then((response)=>{
        setMessage(response.data.messages)
      })
    } 
    useEffect(()=>{
     getUsers()
     getMessages()
    })
   const handleView = (id)=>{
     console.log(id)
     history('/adminchat/'+id)
   }
    //function for sending messages.
    // const sendMessage = async (event)=>{
    //     event.preventDefault()
    //     const response = await client.post('/chats',{
    //       sentMessage:message,
    //       userName:name,
    //       userId:id,
    //     })
    //     if(response.data.success){
    //       console.log(response.data)
    //     }
    // }
    return (
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden",display:"flex"}}>
    <Sidebar/>
    <Box sx={{mx:2,width:"100%",mt:1}}>
    <Box sx={{backgroundColor:"#EAE7FA",width:"100%",height:"10%",textAlign:"center",justifyContent:"center",alignItems:"center",paddingTop:2,mb:2, boxShadow:3,postion:"relative",diplay:"flex"}} >
    <Box sx={{position:"sticky"}}>
    <CircleIcon fontSize="small"  sx={{position:"absolute", left:15,color:"#CCA300",mt:1}}/>
    </Box>
    <Typography variant="p" component="h5"> Chats
    </Typography> 
    </Box>
        <Box sx={{mt:5,postion:"absolute"}}>
        {users.map((m,i)=>{
       return <Box key={i} sx={{maxWidth:"100%",height:'fit-content', backgroundColor:"blue", color:"white",mb:2,paddingLeft:3,pt:2,pb:2 }}>
        <Typography component="p" variant="p" onClick={()=>handleView(m._id)}>{m.fullname}</Typography>
      
        </Box>
      })}
        </Box>
    </Box>
       <RightSide/>
    </Box>
    );
}

export default Admin;