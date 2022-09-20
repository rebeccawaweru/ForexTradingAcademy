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
import {useNavigate,useParams} from 'react-router-dom'
import client from '../../api/client'
// const socket = io.connect("https://forexarena.herokuapp.com/");

const AdminChat = ()=> {
  const {id} = useParams()
    const history = useNavigate()
    const location = useLocation();
    const [name,setName] = useState('');
    const [course,setCourse] = useState('');
    const [message,setMessage] = useState([]);
    const [sent,setSent] = useState('');
    const [admin,setAdmin] = useState([]);
    const [messages,setMessages]= useState([]);

    const getMessages = ()=>{
      client.get('/getmessage/'+id).then((response)=>{
        setMessage(response.data.messages)
      
      })
    } 
    const getAdminMessages = ()=>{
      client.get('/getadminmessage/'+id).then((response)=>{
        setAdmin(response.data.messages)
        console.log(response.data.messages)
      })
    }
    useEffect(()=>{
     getMessages()
     getAdminMessages()
     client.get('/user/'+id).then((response)=>{
      setName(response.data.user.fullname)

      })
    })
    const sendMessage = async ()=>{
    const response =  await client.post('/adminmessage',{
       sentMessage:sent,
       userId:id,
       userName:name,
      })
    if(response.data.success){
      console.log('message sent')
      setSent('')
    }
    }
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

          {/* <Box sx={{width:"60%",position:"sticky", bottom:0,mx:1}}> */}
        <Box sx={{mt:5,postion:"absolute"}}>
        {message.map((m,i)=>{
       return <Box key={i} sx={{maxWidth:"50%",height:'fit-content', backgroundColor:"blue", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10,marginLeft:{
        lg:50,
        md:50,
        xs:0,
        sm:0
       }}}>
          <Typography component="p" variant="p">{m.userName}</Typography>
          <Typography component="p" variant="p">{m.sentMessage}</Typography>
        </Box>
        
      })}
         {admin.map((m,i)=>{
       return <Box key={i} sx={{maxWidth:"50%",height:'fit-content', backgroundColor:"green", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,borderRadius:10 }}>
          <Typography component="p" variant="p">{m.sentMessage}</Typography>
        </Box>
      })}
        <TextField
        value={sent}
        onChange={(event)=>setSent(event.target.value)}
        onKeyPress={event=>event.key === 'Enter' ? sendMessage(event) : null}
        style={{ bottom:0,width:"100%"}}
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

export default AdminChat;