import { Box,Grid,Typography,Stack, Button,IconButton } from "@mui/material";
import { logo2,logo } from "../../assets";
import { CustomInput,CustomAlert } from "../../components";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import client from "../../api/client";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
const FreeClasses = ()=>{
    const history = useNavigate()
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [phone,setPhone] = useState()
    const [morning,setMorning] = useState("")
    const [afternoon,setAfternoon] = useState("")
    const [evening,setEvening] = useState("")
    const [mode,setMode] = useState("")
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
   
    const handleSubmit = async()=>{
        try {
        await client.post('/freeclasses',{
            firstname:firstname,
            lastname:lastname,
            phonenumber:phone,
            email:email,
            country:country,
            city:city,
          morning:morning,
          evening:evening,
          afternoon:afternoon,
            mode:mode
        }).then((response)=>{
            console.log(response.data)
            setMessage("Thank you for registering to our free classes. We will reach out soon")
            setTimeout(()=>{
                history('/')
            },4000)
        })
        } catch (error) {
            console.log(error)
            if(error.message === "Request failed with status code 400"){
                setError('Kindly input the missing fields')
              }else if (error.message === "Network Error" || error.message === "Request failed with status code 500"){
            setError('Network error. Please check your internet connection')
            } 
        }
    }
return(
    <Box sx={{width:"100%",height:"100%", overflow:"hidden", margin:0, position:"relative"}}>
    <Box className="free" sx={{height:"50vh", backgroundRepeat:"no-repeat"}}/>
    <Box sx={{position:"absolute",top:20,left:{
        lg:200,
        md:200,
        xs:10,
        sm:10
    },width:"80%"}}>
    <Box component="img" sx={{height:120, width:200, position:"absolute",}} src={logo2} alt="" />
    <Box sx={{position:"absolute",mt:{
        lg:20,
        md:20,
        xs:14,
        sm:14
    },color:"white"}}>
    <Typography component="h2" variant="h4">Free Forex Education</Typography>
    <Typography>Sign up for free daily workshops and learn how to navigate markets,<br></br>
     spot opportunities & keep pace with the latest trading trends.</Typography>
    </Box>
    </Box>
    <Box sx={{width:{
        lg:"40%",
        md:"40%",
        xs:"100%",
        sm:"100%"
    }, height:{
        lg:"130vh",
        md:"130vh",
        sx:"120vh",
        xs:"120vh"
    },backgroundColor:"whitesmoke",top:{
        lg:-30,
        md:-30,
        sx:2,
        xs:2
    },left:{
        lg:200,
        md:200,
        xs:0,
        sm:0
    },position:"relative",borderRadius:2,p:4,mb:2}}>
    <Typography component="h5" variant="h5">Don’t miss your chance for a free forex education.</Typography>
    <Typography>Save your seat:</Typography>
   {message && <CustomAlert color="success" message={message}/>} 
    {error && <CustomAlert color="error" message={error}/>}
     <b>Choose mode of classes:</b>
    <Stack direction="row" spacing={2}>
        <input type="checkbox" value="Online Classes" onChange={(e)=>setMode(e.target.value)}/><Typography>Online Classes</Typography>
        <input type="checkbox" value="Physical Classes" onChange={(e)=>setMode(e.target.value)}/><Typography>Physical Classes</Typography>
    </Stack>
    <b>Choose time:(Pick one or pick them all)</b>
    <Stack direction="row" spacing={2}>
        <input type="checkbox" value="Morning Class" onChange={(e)=>setMorning(e.target.value)}/><Typography>Morning Class</Typography>
        <input type="checkbox" value="Afternoon Class" onChange={(e)=>setAfternoon(e.target.value)}/><Typography>Afternoon Class</Typography>
        <input type="checkbox" value="Evening Class" onChange={(e)=>setEvening(e.target.value)}/><Typography>Evening Class</Typography>
    </Stack>
     <Grid container sx={{mt:2}}>
        <Stack direction="row" spacing={2}>
          <CustomInput placeholder="First Name" value={firstname} handleChange={(e)=>setFirstName(e.target.value)}  border="1px solid black"/>
          <CustomInput placeholder="Last Name" value={lastname} handleChange={(e)=>setLastName(e.target.value)} border="1px solid black"/>
        </Stack>
        <Box sx={{width:"100%", mb:2}}>
        <CountryDropdown
        style={{height:"8vh",width:"100%"}}
          value={country}
          onChange={(e) => setCountry(e)} /> 
        </Box>
         <Box sx={{width:"100%", mb:2}}>
        <RegionDropdown
        defaultOptionLabel="Select City"
           style={{height:"8vh",width:"100%"}}
          country={country}
          value={city}
          onChange={(e) => setCity(e)} />
         </Box>
        <Box sx={{width:"100%"}}>
        <CustomInput  placeholder="Email Address" value={email} handleChange={(e)=>setEmail(e.target.value)} border="1px solid black" fullWidth/>
        </Box>
       
        <Box sx={{width:"100%"}}>
    
         <CustomInput  placeholder="Mobile Number" value={phone} handleChange={(e)=>setPhone(e.target.value)} border="1px solid black" fullWidth/>
        </Box>
     
        By pressing ‘Submit’ you consent to receiving marketing communications. Don’t worry, you can change your mind at anytime by updating your preferences
        <Button fullWidth variant="contained" onClick={handleSubmit} color="success" sx={{mt:2}}>Submit</Button>
     </Grid>
     </Box>
     <Box sx={{width:"100%",height:{
        lg:"15vh",
        md:"15vh",
        xs:"25vh",
        sm:"25vh"
     }, backgroundColor:"whitesmoke",pl:{
        lg:23,
        md:23,
        xs:1,
        sm:1
     },alignItems:"center",}}>
     <Box component="img" sx={{height:85, width:165, position:"absolute",mx:-12,display:{
        lg:"block",
        md:"block",
        xs:"none",
        sm:"none"
     }}} src={logo} alt="" />
 
      <Box sx={{display:{
        lg:"flex",
        md:"flex",
        xs:"block",
        sm:"block"
      },justifyContent:"center",alignItems:"center",textAlign:"center",p:4}}>
      <Typography>Support: </Typography>
      <Box sx={{display:"flex",}}>
  <a href='https://wa.me/0782666555/?text=Hello, i would like to book a free class' style={{textDecoration:"none"}}>
       <IconButton aria-label="delete">
        <WhatsAppIcon sx={{fontSize:30,color:"white",backgroundColor:"green",borderRadius:"50%"}}/>
     
        <Typography color="primary">Whatsapp Us</Typography>
      </IconButton>
      </a>
       </Box>
      <Box sx={{mx:2, display:"flex"}}>
      <LocalPhoneIcon/>+254782666555
      </Box>
      <Box sx={{mx:2, display:"flex"}}>
      <EmailIcon/>support@forextradingacademy.co.ke
      </Box>


      </Box>

     </Box>
    </Box>
)
}



export default FreeClasses;