import React,{useEffect,useState} from "react"
import Sidebar2 from './Sidebar2'
import {Box, Typography,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
import {CustomAppBar2} from '../../components';
import client from "../../api/client";
import {ExportToExcel} from './ExportToExcel'
const FreeClass = ()=>{
    const fileName = "FreeClassesData";
    const [data,setData] = useState([])
     async function getStudents(){
     await client.get('/freeclasses').then((response)=>setData(response.data.students))
     }
     useEffect(()=>{
      getStudents()
     },[])
    return(
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex",position:"relative"}}>
              <Sidebar2 selected/> 
    <Box sx={{width:"100%"}}>
        <CustomAppBar2/>
        <ExportToExcel apiData={data} fileName={fileName} />
        <Stack direction="row" alignItems="center" spacing={2} sx={{mt:3,mx:2}}>
            <TableContainer component={Paper} elevation={0}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>First Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Last Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Country</TableCell>
           <TableCell align="left" style={{width: 100}}>City</TableCell>
           <TableCell align="left" style={{width: 100}}>Mode</TableCell>
           <TableCell align="left" style={{width: 100}}>Time</TableCell>
           {/* <TableCell align="left" style={{width: 100}}>Date</TableCell> */}
           {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell> */}
           
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.firstname}</TableCell>
             <TableCell align="left">{row.lastname}</TableCell>
             <TableCell align="left">{row.phonenumber}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.country}</TableCell>
             <TableCell align="left">{row.city}</TableCell>
             <TableCell align="left">{row.mode}</TableCell>
             <TableCell align="left">{row.morning},{row.afternoon},{row.evening}</TableCell>
             {/* <TableCell align="left"><VisibilityIcon  color="success" /></TableCell>
             <TableCell align="left"><DeleteIcon sx={{color: red[500]}} /></TableCell> */}
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
export default FreeClass