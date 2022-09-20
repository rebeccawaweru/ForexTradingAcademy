import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {Box} from '@mui/material'
import {Sidebar,RightSide,Content} from '../../components'
import client from '../../api/client'

const StudentPortal =()=>{
    const history = useNavigate()
    const {id} = useParams()
    const [data,setData] = useState([])
    useEffect(()=>{
    client.get('/user/'+id)
    .then((response)=>{
      setData(response.data.user)
    })
    })
   
    return (
     <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
     overflowX: "hidden", display:"flex"}}>
     <Sidebar selected/>
     <Content />
     <RightSide/> 
     </Box>
    );
}

export default StudentPortal;