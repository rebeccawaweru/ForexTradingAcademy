import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {Box, MenuItem, Typography,InputLabel,FormControl,Select, Button,Grid} from '@mui/material'
import {Sidebar,RightSide,Content} from '../../components'
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import CustomAppBar from './AppBar';
import {CustomAppBar2,CustomInput,CustomButton,CustomCard,CustomEditBots} from '../../components';
const AddMedia =()=>{
     const [title,setTitle] = useState('')
     const [picture,setPicture] = useState('')
     const [type,setType] = useState('')
     const [price,setPrice] = useState(0)
     const [description,setDescription]= useState('')
     const [link,setLink] = useState('')
     const [data,setData] = useState([]);
     const [open,setOpen] = useState(false);
     const [id,setId] = useState('')
     const ksh = "Ksh"
    const handleChange=async(e)=>{
        e.preventDefault();
        const files = e.target.files;
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "Images");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/marite/image/upload",
          {
            method:"POST",
            body:data
          }
        )
        const File = await res.json()
        setPicture(File.secure_url)

    }
    const handleSubmit = async()=>{
      try {
        const response = await client.post('/newupload',{
          title:title,
          avatar:picture,
          price:price,
          type:type,
          description:description,
          link:link
      })
        if(response.data){
           setTimeout(()=>{
            window.location.reload()
           },2000)
        }
      } catch (error) {
        console.log(error.message)
  
      }
    }
    async function getUploads(){
      await client.get('/getuploads').then((response)=>{
        setData(response.data.uploads)
      })
    }
    useEffect(()=>{
      try {
       getUploads()
      } catch (error) {
        console.log(error.message)
      }
    })

    const handleEdit = (id)=>{
    setId(id)
    setOpen(true)
    }
    
    return (
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex"}}>
               <Sidebar2/>
         <Box sx={{width:"100%"}}>
           <CustomAppBar2/>
           <Box sx={{display:"flex", mx:3,mt:3}}>
           <CustomInput placeholder="title" value={title} handleChange={(e)=>setTitle(e.target.value)} border="1px solid black"/>
            <CustomInput placeholder="price" value={price} handleChange={(e)=>setPrice(e.target.value)} border="1px solid black"/>
            <CustomInput placeholder="description" value={description} handleChange={(e)=>setDescription(e.target.value)} border="1px solid black"/>
            <FormControl sx={{mx:2, width:"10%"}}>
        <InputLabel id="demo-simple-select-label">Content type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="Content type"
          value={type}
          label="Content Type"
          onChange={(e)=>setType(e.target.value)}
        >
          <MenuItem value="Binary Bots">Binary Bots</MenuItem>
          <MenuItem value="Forex Robots">Forex Robots</MenuItem>
          <MenuItem value="Trading Strategies">Trading Strategies</MenuItem>
        </Select>
      </FormControl>
            <CustomInput type="file" handleChange={handleChange}/>
            {/* <CustomButton title="Upload" onClick={handleSubmit}/> */}
        
           </Box>
           <CustomInput value={link} handleChange={(e)=>setLink(e.target.value)} fullWidth placeholder="link url
           "/>
           <CustomButton title="Upload" onClick={handleSubmit}/>
           <CustomEditBots open={open} handleClose={()=>setOpen(false)} id={id}/>
             <i>My Uploads</i>
           <Grid container sx={{width:"100%",height:"100%", display:"flex"}}>
           {data.map((u)=>{
            return<Box key={u._id}><CustomCard  image={u.avatar} title={u.title} description={u.description} amount={u.price} header={u.type} Button={<CustomButton title="Edit" onClick={()=>handleEdit(u._id)}/>}/></Box>
           })}
           </Grid>
        </Box>
        </Box>
    );
}
export default AddMedia ;