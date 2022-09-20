import React,{useState,useEffect} from 'react';
import {Box,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';
import client from '../../api/client'
import {CustomAppBar2} from '../../components';
// import io from 'socket.io-client'
import {useLocation} from 'react-router-dom';
// const socket = io.connect("https://forexarena.herokuapp.com/");

function AdminCon() {
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
     history('/adminchat/'+id)
   }
  
    return (
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex"}}>
         <Box sx={{width:"100%"}}>
           <CustomAppBar2/>
           <Box sx={{mt:5,postion:"absolute"}}>
        {users.map((m,i)=>{
       return <Box key={i} sx={{width:"90%",height:'fit-content', backgroundColor:"blue", color:"white",mb:2,paddingLeft:3,pt:2,pb:2,mx:3,justifyContent:"center",alignItems:"center",textAlign:"center" }}>
        <Typography component="p" variant="p" onClick={()=>handleView(m._id)}>{m.fullname}</Typography>
      
        </Box>
      })}
        </Box>
         </Box>
        </Box>
    );
}

export default AdminCon;
// background-color: #fba8a4;
// background-image: linear-gradient(315deg, #fba8a4 0%, #dad2f3 74%);


{/* <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
overflowX: "hidden", display:"flex"}}>
 <Box sx={{width:"100%"}}>
   <CustomAppBar2/>
   
 </Box>
</Box> */}
