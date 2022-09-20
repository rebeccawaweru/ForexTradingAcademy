import React,{useState,useEffect} from 'react';
import {Box,TextareaAutosize, MenuItem, Typography,InputLabel,FormControl,Select, Button} from '@mui/material'
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import {CustomAppBar2,CustomInput,CustomAlert,CustomButton,CustomCard,CustomEditBots} from '../../components';
import axios from 'axios';
import * as XLSX from "xlsx";
export default function SendEmail(){
  const [items, setItems] = useState([]);
    const [receipts,setReceipts] = useState('')
    const [emails,setEmails] = useState([])
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError] = useState('')
    const handleReceipts = (e)=>{
       setReceipts(e.target.value)
    }
    const handleEmails = (e)=>{
        setEmails(e.target.value)
        console.log(JSON.stringify(e.target.value))
    }
    const handleSubmit =async ()=>{
        try {
            if(!receipts){
                setError("Kindly choose recepients")
            }
            if(receipts === "All Users"){
                await client.post("/multiple",{
                  subject:subject,
                  message:message
                }).then((response)=>{
                   setSuccess("Email successfully sent to all users!")
                })
              }   
            if(receipts === "Custom"){
              await client.post("https://localhost:5000/forexarena/multiplecustom",{
                emails:emails,
                subject:subject,
                message:message
              }).then((response)=>{
                 setSuccess("Email successfully sent to all users!")
              })
            } 
        } catch (error) {
            setError("Error occurred/Email limit exceeded")
        }
    }
   const handleFile = (e)=>{
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });

      console.log(data);
    };
    reader.readAsBinaryString(file);
   }  

   const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
        console.log(data)
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((d) => {
      setItems(d);
      const emails = d.map((data)=>{
        return data.email
      })
      setEmails(emails)
    });
  };
    return(
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden", display:"flex"}}>
    <Sidebar2/>
    <Box sx={{width:"100%"}}>
    <CustomAppBar2/>
    <Box sx={{textAlign:"center",pt:3}}>
    <Typography component="h3" variant="p">Send Emails</Typography>
    </Box>
  
    
     <Box sx={{width:"60%",height:"80vh",boxShadow:"5px 5px 5px 5px #7C71FE",border:"none",justifyContent:"left",alignItems:'left',textAlign:"left",margin:"auto",p:4,top:20,position:"relative"}}>
     {success && <CustomAlert color="success" message={success}/>}
    {error && <CustomAlert color="error" message={error}/>}
     <FormControl sx={{width:"100%",mb:2}}>

        <InputLabel id="demo-simple-select-label">Choose Recipients</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="course"
          label="Content Type"
          value={receipts}
          onChange={handleReceipts}
        >
          <MenuItem value="All Users">All Users</MenuItem>
          <MenuItem value="Custom">Custom</MenuItem>
        </Select>
      </FormControl>
      {receipts === "Custom" && <CustomInput type="file" handleChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }} fullWidth placeholder="Choose File" border="1px solid black"/> }
        <CustomInput value={subject} handleChange={(e)=>setSubject(e.target.value)} fullWidth placeholder="Enter Subject" border="1px solid black"/>
        <TextareaAutosize
            aria-label="minimum height"
            minRows={6}
            placeholder="write message...."
            style={{ width: 430,border:"1px solid black" }}
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}
           />
           <Box sx={{}}>
           <Button variant='contained' onClick={handleSubmit} fullWidth sx={{backgroundColor:"#7C71FE",mt:2}}>Send</Button>
           </Box>
     </Box>
    

    </Box>
    </Box>
    )
}