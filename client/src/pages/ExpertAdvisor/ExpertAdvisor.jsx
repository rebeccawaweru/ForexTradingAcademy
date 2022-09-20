import React from "react";
import {Box,Grid,Typography,IconButton,Stack} from "@mui/material"
import { CustomButton,CustomInput,Services2,Services3,Services4,Services5} from "../../components"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from "react-router-dom";
import client from '../../api/client';
import { signals } from "../../assets";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from "react-bootstrap";
export default function ExpertAdvisor(){
    const history = useNavigate()
    const [email,setEmail] = React.useState('')
    const [phone,setPhone] = React.useState('')
    const [url,setUrl] = React.useState('')
    const [amount,setAmount] = React.useState('')
    const [open,setOpen] = React.useState('')
    const [open2,setOpen2] = React.useState('')
    const [open3,setOpen3] = React.useState('')
    const [open4,setOpen4] = React.useState('')

    return(
        <Box sx={{width:"100%",height:"100%",position:"relative"}}>
    <IconButton color="primary" aria-label="add to shopping cart" sx={{mt:3,paddingLeft:"5%",position:"absolute"}} onClick={()=>history('/')}>
        <KeyboardBackspaceIcon/>
      </IconButton> 
    <Box component="img" src={signals} sx={{height:"60vh",width:"100%"}}/>
    <Grid container sx={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",textAlign:"center",paddingLeft:"5%"}}>
    <Typography variant="p" component="h3">DAILY FOREX & CRYPTO SIGNALS</Typography>
    <p><b>
    The live Forex & Crypto signals are trusted by over 100,000 traders. Our reliable Forex & Crypto Signals are provided by our experienced traders with over 15 years of combined market experience, earning our members thousands of pip profits each month. Purchase our daily crypto signals right away.
    </b>
    </p>
    <Stack direction="row" spacing={2}>

   {/* 1 month */}
      <Box sx={{height:"60vh",width:250,backgroundColor:"whitesmoke",textAlign:"center",alignItems:"center",justifyContent:"center",pt:4,pl:1,mb:2}}>
       <p><b>1 month subscription</b></p>
       <Box sx={{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",}}>
       <Typography variant="p" component="h3">KSH 3,000</Typography>
       <Typography color="text.disabled">/per month</Typography>
       </Box>
       <br></br>
       <p>KSH 3000 billed per month</p>
       <Services2 open={open}  close={()=>setOpen(false)}/>
       <Box sx={{display:"flex",mt:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Upto 5 signals daily</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>76% success rate</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Entry,take profit & stop loss</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Amount to risk per trade</p>
       </Box>
       <Box sx={{display:"flex",mb:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Risk reward ratio</p>
       </Box>
       <button onClick={()=>setOpen(true)} style={{border:"1px solid dodgerblue", height:"5vh",width:200}}>Choose Plan</button>
      </Box>

      {/* 3 month */}
      <Box sx={{height:"60vh",width:250,backgroundColor:"whitesmoke",textAlign:"center",alignItems:"center",justifyContent:"center",pt:4,pl:1,mb:2}}>
       <p><b>3 month subscription</b></p>
       <Box sx={{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",}}>
       <Typography variant="p" component="h3">KSH 2,000</Typography>
       <Typography color="text.disabled">/per month</Typography>
       </Box>
       <br></br>
       <p>KSH 6000 billed every 3months</p>
       <Services3 open={open2}  close={()=>setOpen(false)}/>
       <Box sx={{display:"flex",mt:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Upto 5 signals daily</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>76% success rate</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Entry,take profit & stop loss</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Amount to risk per trade</p>
       </Box>
       <Box sx={{display:"flex",mb:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Risk reward ratio</p>
       </Box>
       <button onClick={()=>setOpen2(true)} style={{border:"1px solid dodgerblue", height:"5vh",width:200}}>Choose Plan</button>
      </Box>
       
       {/* 6 month */}
      <Box sx={{height:"60vh",width:250,backgroundColor:"dodgerblue",textAlign:"center",color:"white",alignItems:"center",justifyContent:"center",pt:4,pl:1,mb:2,boxShadow:10,borderRadius:2,border:"5px solid #87ceeb "}}>
       <p><b>6 month subscription</b></p>
       <Box sx={{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",}}>
       <Typography variant="p" component="h3">KSH 1,500</Typography>
       <Typography color="text.disabled">/per month</Typography>
       </Box>
       <br></br>
       <p>KSH 9000 billed every 6months</p>
       <Services4 open={open3}  close={()=>setOpen(false)}/>
       <Box sx={{display:"flex",mt:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Upto 5 signals daily</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>76% success rate</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Entry,take profit & stop loss</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Amount to risk per trade</p>
       </Box>
       <Box sx={{display:"flex",mb:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Risk reward ratio</p>
       </Box>
       <button  onClick={()=>setOpen3(true)} style={{border:"1px solid dodgerblue", height:"5vh",width:200}}>Choose Plan</button>
      </Box>


               {/* 12 month */}
      <Box sx={{height:"60vh",width:250,backgroundColor:"whitesmoke",textAlign:"center",alignItems:"center",justifyContent:"center",pt:4,pl:1,mb:2}}>
       <p><b>12 month subscription</b></p>
       <Box sx={{display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",}}>
       <Typography variant="p" component="h3">KSH 1,000</Typography>
       <Typography color="text.disabled">/per month</Typography>
       </Box>
       <br></br>
       <p>KSH 12000 billed every year</p>
       <Services5 open={open4}  close={()=>setOpen(false)}/>
       <Box sx={{display:"flex",mt:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Upto 5 signals daily</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>76% success rate</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Entry,take profit & stop loss</p>
       </Box>
       <Box sx={{display:"flex"}}>
       <CheckCircleIcon color="primary"/>
       <p>Amount to risk per trade</p>
       </Box>
       <Box sx={{display:"flex",mb:2}}>
       <CheckCircleIcon color="primary"/>
       <p>Risk reward ratio</p>
       </Box>
       <button onClick={()=>setOpen4(true)} style={{border:"1px solid dodgerblue", height:"5vh",width:200}}>Choose Plan</button>
      </Box>
      
    </Stack>
    </Grid>
    </Box>

    )
}