import { useEffect } from 'react'
import { Box,Grid,Stack,Button,Typography,Alert,Table,TableBody, InputAdornment,TextField,TableCell,TableContainer,TableHead,TableRow,Paper,Modal } from '@mui/material'
import { useState } from 'react'
import client from '../../api/client'
import {CustomAppBar2,CustomInput,CustomButton,CustomAlert} from '../../components'
import Sidebar2 from './Sidebar2'
const AddUser = ()=>{
    const [fullname,setFullname] = useState('')
    const [email,setEmail] = useState('')
    const [phonenumber,setPhonenumber] = useState(0)
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [data,setData] = useState([])
    const handleSubmit =async()=>{
    try {
        await client.post('/signup',{
            fullname:fullname,
            email:email,
            phonenumber:phonenumber,
            password:password,
            usertype:"added"
        }).then((response)=>{
           if(response.data.success){
            console.log(response.data)
            client.patch('/user/'+response.data.id, {
                referralLink:`https://forextradingacademy.co.ke/signup/${response.data.id}`
             }).then((response)=>{
                setSuccess('User Added Successfully')
             })
           }
        })  
    } catch (error) {
        if(error.message === "Request failed with status code 400"){
          setError('Kindly input the missing fields')
        }else if (error.message === "Request failed with status code 401"){
        setError('Email  already exists') 
       }else if (error.message === "Network Error" || error.message === "Request failed with status code 500"){
      setError('Network error. Please check your internet connection')
      }
    }
    }
     async function findUsers(){
        await client.post('/addedusers',{
            usertype:"added"
        }).then((response)=>setData(response.data.users))
     }
     useEffect(()=>{
        findUsers()
     })
     const handleDelete = async (id)=>{
      await client.delete('/deleteuser/'+id).then((response)=>{
        if(response.data){
            setSuccess('User deleted Successfully')
        }
      })
     }
    return(
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden", display:"flex",position:"relative"}}>
    <Sidebar2 selected/>  
    <Box sx={{width:"100%"}}>
    <CustomAppBar2/>
    {success && <CustomAlert color="success" message={success}/>}
    {error && <CustomAlert color="error" message={error}/>}
     <Grid container sx={{display:"flex",mt:2}}>
        <Box sx={{mx:2}}>
        <CustomInput border="1px solid black" value={fullname} handleChange={(e)=>setFullname(e.target.value)} label="Fullname"  placeholder="fullname"/>
        </Box>
        <Box sx={{mx:2}}>
        <CustomInput border="1px solid black" value={email} handleChange={(e)=>setEmail(e.target.value)} label="Email"  placeholder="email"/>
        </Box>
        <Box sx={{mx:2}}>
        <CustomInput border="1px solid black" value={phonenumber} handleChange={(e)=>setPhonenumber(e.target.value)} label="Phonenumber" placeholder="phonenumber"/>
        </Box>
        <Box sx={{mx:2}}>
        <CustomInput border="1px solid black" value={password} handleChange={(e)=>setPassword(e.target.value)} label="Password" placeholder="password" />
        </Box>
     </Grid>
      <CustomButton onClick={handleSubmit} title="Add"/>
      <Stack direction="row" alignItems="center" spacing={2} sx={{mt:3,mx:2}}>
            <TableContainer component={Paper} elevation={0}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Delete</TableCell>
      
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.fullname}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.phonenumber}</TableCell>
             <TableCell align="left"><CustomButton title="Delete" onClick={()=>handleDelete(row._id)}/></TableCell>
           </TableRow>
         ))}
      </TableBody>
     </Table>
   
   </TableContainer>
            

             
            

            </Stack>

    </Box>  
    </Box>
    )
}

export default AddUser;