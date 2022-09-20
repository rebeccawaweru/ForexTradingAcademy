import React,{useState} from 'react'
import {Box, Typography,Grid,Checkbox, FormControlLabel,TextField} from '@mui/material'
import {ad1} from '../../assets'
import {CustomInput} from '../../components';
export default function Promotion1(){
const [check, setCheck] = useState('')
const [inputstyle, setInputstyle] = useState('none')
const handleSendSelection = (event) => {
setCheck(event.target.value)
        console.log(event.target.value)
        if(check === "Yes"){
          setInputstyle("block")
          }else if(check === "No"){
            setInputstyle("none") 
          }
      }
    return(
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden" ,}}>
    <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
    <Box component="img" src={ad1} sx={{width:"100%", height:"50vh"}}/>
    <Box sx={{display:"flex",justifyContent:"center", alignItems:"center", textAlign:"center"}}>
    <Box>
    <Typography>Give us your details and stand a chance to win</Typography>
    <Box sx={{mx:2}}>
    <CustomInput
        label="Name"/>
        </Box>
        <Box sx={{mx:2}}>
        <CustomInput
        label="Email"/> 
        </Box>
        <Box sx={{mx:2}}>
        <CustomInput
        label="Phone Number"/> 
        </Box>
        </Box>
        <Box>
        <Typography>Questionnaire</Typography> 
    <Typography>Do you follow us on Twitter?</Typography>
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}} >
      <FormControlLabel control={<Checkbox value="Yes" onClick={(event) => handleSendSelection(event)}/> } label="Yes" />
      <FormControlLabel control={<Checkbox />} label="No" />
      {/* <CustomInput placeholder="e.g john@twitter.com"/> */}
    </Box>
        </Box>
    </Box>
    </Box>
    </Box>
    )
}