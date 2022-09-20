import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {Box, Typography,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
import {CustomAppBar2} from '../../components'
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import CustomAppBar from './AppBar';
import {ExportToExcel} from './ExportToExcel'
const AdminBots =()=>{
 const [data, setData] = useState([]);
 const fileName = "BotsData";
 async function getBots(){
    await client.get('/bot').then((response)=>{
        setData(response.data.bot)
    })
 }

    useEffect(()=>{
     getBots()
    },[])

    
    
    return (
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
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Capital</TableCell>
           <TableCell align="left" style={{width: 100}}>Allowed Capital</TableCell>
           <TableCell align="left" style={{width: 100}}>Risk Appetite</TableCell>
           <TableCell align="left" style={{width: 100}}>Expected Return</TableCell>
           {/* <TableCell align="left" style={{width: 100}}>Date</TableCell> */}
           {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell> */}
           
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.phone}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.capital}</TableCell>
             <TableCell align="left">{row.tradingcapital}</TableCell>
             <TableCell align="left">{row.riskappetite}</TableCell>
             <TableCell align="left">{row.expectedreturn}</TableCell>
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
    );
}
export default AdminBots;