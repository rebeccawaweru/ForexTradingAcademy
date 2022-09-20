import React,{useState,useEffect} from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {Box, Typography,Stack,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material'
import {CustomAppBar2} from '../../components'
import client from '../../api/client'
import Sidebar2 from './Sidebar2'
import CustomAppBar from './AppBar';
import {ExportToExcel} from './ExportToExcel'
const Subscription = ()=>{
    const [data,setData] = useState([])
    const fileName = "SubscriptionData";
    async function getSubscriptions(){
        await client.get('/subscriptions').then((response)=>setData(response.data.subscriptions))
    }
    useEffect(()=>{
        getSubscriptions()
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
              <TableCell align="left" style={{width: 100}}>Name</TableCell>
              <TableCell align="left" style={{width: 100}}>Mode</TableCell>
              <TableCell align="left" style={{width: 100}}>Email</TableCell>
              <TableCell align="left" style={{width: 100}}>WhatsApp Number</TableCell>
              <TableCell align="left" style={{width: 100}}>Telegram Number</TableCell>
              <TableCell align="left" style={{width: 100}}>Subscription</TableCell>
              {/* <TableCell align="left" style={{width: 100}}>Date</TableCell> */}
              {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell> */}
              
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.mode},{row.mode2},{row.mode3},{row.mode4}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.whatsappnumber}</TableCell>
                <TableCell align="left">{row.telegramnumber}</TableCell>
                <TableCell align="left">{row.invoicenumber}</TableCell>
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
export default Subscription