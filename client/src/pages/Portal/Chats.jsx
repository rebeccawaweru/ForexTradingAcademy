import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {Box, Typography} from '@mui/material'
import {Sidebar,RightSide,Content} from '../../components'
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import CustomAppBar from './AppBar';
import Direct2 from './Direct2'
const Chats =()=>{
const [fullname, setfullName] = useState("");
const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);
 const [data, setData] = useState([]);
    const history = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
    client.get('/user/'+id)
    .then((response)=>{
      setData(response.data.user)
    
    })
    })
    return (
     <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden", display:"flex",position:"relative"}}>
     <Sidebar2 selected/>
     <Direct2 />
     <Box>

     </Box>
     </Box>
    );
}
export default Chats;