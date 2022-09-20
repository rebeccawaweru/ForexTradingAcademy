import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box} from '@mui/material'
import Sidebar2 from './Sidebar2'
import ContentAdmin2 from './ContentAdmin2'
const AdminContent=()=>{
const [fullname, setfullName] = useState("");
const [open, setOpen] = useState(false);
const handleClose = () => setOpen(false);
 const [data, setData] = useState([]);
    const history = useNavigate()
    return (
     <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden", display:"flex",position:"relative"}}>
     <Sidebar2 selected/>
      <ContentAdmin2/>
     <Box>
     </Box>
     </Box>
    );
}
export default AdminContent;