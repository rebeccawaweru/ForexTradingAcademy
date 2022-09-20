import React,{useState,useEffect} from 'react';
import {Box, Typography,CardMedia,Stack,IconButton,Button,TextField} from '@mui/material'
import { Sidebar,RightSide } from '../../components';
import { trade1 } from '../../assets';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import {useParams,useNavigate} from 'react-router-dom'
import client from '../../api/client'
import { CustomInput,CustomButton } from '../../components';
const Profile = ()=> {
    const {id} = useParams()
    const [user,setUser] = useState([])
    const [image,setImage] = useState('')
    const [fullname,setFullname] = useState('')
    const [phonenumber,setPhonenumber] = useState(0)
    const [email,setEmail] = useState('')
    const [edit,setEdit] = useState(false)
   
    useEffect(()=>{
     client.get('/user/'+id).then((response)=>{
         setUser(response.data.user)
     })
    })
    const handleEdit = ()=>{
       setEdit(true)
    }


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
        console.log(File.secure_url)
        setImage(File.url)
        console.log("image")
    }

    const handleFull=(e)=>{
       setFullname(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
     }
     const handlePhone=(e)=>{
        setPhonenumber(e.target.value)

     }
    
    const updateUser = async ()=>{
        try {
            if(email === ''){
                setEmail(user.email)
            }else if(phonenumber === 0){
                setPhonenumber(user.phonenumber)
            }else if(fullname === ''){
                setFullname(user.fullname)
            }
        const response =  await client.patch('/user/'+id,{
            email:email,
            fullname:fullname,
            phonenumber:phonenumber,
            avatar:image
        })
        if(response){
          setEdit(false)
          console.log(response.data)
        }
  
        } catch (error) {
          console.log(error.message)  
        }
     
    }
    return (
        <Box sx={{margin: 0, padding:0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden",display:"flex"}}>
         <Sidebar/>
         <Box sx={{mx:{
          lg:45,
          md:45,
          xs:10,
          sm:10
         },width:"100%",mt:2}}>
           {/* <Typography variant="div" component="h5">Profile</Typography> */}
           <CardMedia sx={{width:"100%", margin:0,height:"40vh",position:"relative"}} className="bg">
               <Box component="img" src={
                image
                  ? image
                  : user.avatar
              } alt="" sx={{height:200,width:200,borderRadius:"50%",bottom:-50,position:"absolute",mx:5}} />
               {edit && (
                   <Box sx={{bottom:-100,position:"absolute",mx:30}}>
                    <CustomInput name="file" type="file"  placeholder="choose profile Image" label="Profile Picture" handleChange={handleChange}/>
                   </Box>

            )}
            
          </CardMedia>
   
           <Box sx={{mt:8, width:"100%",height:"46%",pl:5,pt:2,position:"relative"}}>
            {!edit && (
                <IconButton color="primary" component="span" onClick={handleEdit} sx={{right:-10,top:-15,position:"absolute",}}>
                <CreateIcon/>
                </IconButton>
            )}
        
            {!edit && (
           <>
            <Stack direction="row" spacing={1} sx={{mb:4,mt:5}}>
            <PersonIcon sx={{color:"#CCA300"}}/>
            <Typography variant="p" component="h6">Full Name:{user.fullname}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{mb:4}}>
            <EmailIcon sx={{color:"#CCA300"}}/>
            <Typography variant="p" component="h6">Email:{user.email}</Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{mb:4}}>
            <LocalPhoneIcon sx={{color:"#CCA300"}}/>
            <Typography variant="p" component="h6">Phone:{user.phonenumber}</Typography>
            </Stack>
                  </>
            )}

            {edit &&(
             <>
            <Box sx={{width:"80%"}}>
          
     
          <CustomInput
          name="fullname"
           value={fullname}
           handleChange={handleFull}
           placeholder={user.fullname}
           fullWidth  
           icon={<PersonIcon sx={{color:"#CCA300"}}/>}
            />
            <CustomInput 
            name="email"
            value={email}
            handleChange={handleEmail}
            placeholder={user.email}
             fullWidth
             icon={<EmailIcon sx={{color:"#CCA300"}}/>}/>

            <CustomInput
              name="phonenumber"
              value={phonenumber}
              handleChange={handlePhone}
              placeholder='' 
             fullWidth     
             icon={<LocalPhoneIcon sx={{color:"#CCA300"}}/>}/>
            <CustomButton title="Update" onClick={updateUser}/>
            <Button type="submit" onClick={()=>setEdit(false)} variant="contained" color="error">
                Cancel
            </Button>
      
            </Box>
            </>
            )}
             
           </Box>
         </Box>

        <RightSide/>
        </Box>
    );
}

export default Profile;
