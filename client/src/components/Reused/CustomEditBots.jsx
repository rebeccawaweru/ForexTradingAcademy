import React,{useState,useEffect} from 'react';
import{Box,Button,Typography,Modal,IconButton,InputLabel,FormControl,Select,MenuItem, Alert,} from "@mui/material"
import {CustomInput,CustomButton} from '../../components'
import CloseIcon from '@mui/icons-material/Close';
import client from '../../api/client';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function CustomEditBots({id,open,handleClose}) {
 
    const [title,setTitle] = useState('')
    const [picture,setPicture] = useState('')
    const [type,setType] = useState('')
    const [price,setPrice] = useState(0)
    const [description,setDescription]= useState('')
    const [link,setLink]= useState('')
    const [open2,setOpen2]= useState(false)
    const [success,setSuccess]=useState('')
    const [data,setData] = useState({
         title:'',
         price:0,
         type:"",
         avatar:"",
         description:"",
         link:""
    });
    async function getUploads(){
      await client.get('/getupload/'+id).then((response)=>{
        setData(response.data.upload)
      })
    }
    async function deleteUpload(){
      await client.delete('/deleteupload'+id).then((response)=>{
        window.location.reload()
      })
    }
 
    const handleChange=async(e)=>{
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
      console.log(File.secure_url)
  }

    useEffect(()=>{
       getUploads()
     
    })
     const handleSubmit2 = ()=>{
      if(!title){
        setTitle(data.title)
       }
       if(!price){
        setPrice(data.price)
      }
      if(!description){
        setDescription(data.description)
      }
      if(!type){
        setType(data.type)
      }
      if(!link){
        setLink(data.link)
      }
      if(!picture){
        setPicture(data.avatar)
       }
       setOpen2(true)
     }
    const handleSubmit = async () =>{
        try {
          await client.patch('/updateupload/'+id,{
            title:title,
            price:price,
            type:type,
            avatar:picture,
            description:description,
            link:link
          }).then((response)=>{
              console.log(response.data)
              setSuccess("Information updated successfully")
              setTimeout(()=>{
                window.location.reload()
              },3000)
          })  
        } catch (error) {
          console.log(error.message)
        }
        
       }

   

    const handleDelete = () =>{
      deleteUpload()
    }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <IconButton sx={{float:"right"}} onClick={handleClose}><CloseIcon/></IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Bot
          </Typography>
          <Modal
        open={open2}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Confirm
          </Typography>
          {success && <Alert color='success'>{success}</Alert>}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Information will updated to the database
        <Button variant="contained" onClick={handleSubmit}>Ok</Button>
          </Typography>
        </Box>
      </Modal>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CustomInput label="Title" value={title} placeholder={data.title} handleChange={(e)=>setTitle(e.target.value)}/>
            <CustomInput label="Image"  type="file" handleChange={handleChange} />
            <CustomInput label="Price" value={price} placeholder={data.price} handleChange={(e)=>setPrice(e.target.value)}/>
            <CustomInput label="Description" value={description} placeholder={data.description} handleChange={(e)=>setDescription(e.target.value)}/>
            <CustomInput label="Link" value={link}  placeholder={data.link} handleChange={(e)=>setLink(e.target.value)}/>
            <Box>
            <FormControl sx={{mx:2, width:"50%",mb:2}} fullWidth>
        <InputLabel id="demo-simple-select-label">Content type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={data.type}
          value={type}
          label="Category"
          onChange={(e)=>setType(e.target.value)}
          placeholder={data.type}
        >
          <MenuItem value="Binary Bots">Binary Bots</MenuItem>
          <MenuItem value="Forex Robots">Forex Robots</MenuItem>
          <MenuItem value="Trading Strategies">Trading Strategies</MenuItem>
        </Select>
      </FormControl>
      </Box>
 
            <CustomButton title="Update" onClick={handleSubmit2}/>
            <Button variant='contained' color="error" onClick={handleDelete}>Delete</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}