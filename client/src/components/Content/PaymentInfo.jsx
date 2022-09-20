import React,{useState,useEffect} from 'react';
import {Box,Stack,Table,TableBody,InputAdornment,TableCell,TableContainer,TableHead,TableRow,Paper,TextField} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { red } from '@mui/material/colors';
import client from '../../api/client'
import {CustomAppBar2} from '../../components';
import {ExportToExcel} from '../../pages/Portal/ExportToExcel'
import SearchIcon from '@mui/icons-material/Search';
function PaymentInfo() {
  const [fullname, setfullName] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
   const [data, setData] = useState([]);
   const [data2, setData2] = useState([]);
   const [search,setSearch] = useState('')
   const [filter,setFilter]= useState(false)
   const fileName = "PaymentData";
  const history = useNavigate()
  const id = localStorage.getItem('userId');
  useEffect(() => {
    client
      .get("/payments")
      .then((res) => {
        setData(res.data.payment)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSearch = (e)=>{
    setSearch(e.target.value)
    let result = data.filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
    setData2(result)
    setFilter(true)
    if(!e.target.value){
      setFilter(false)
    }
  }
    return (
        <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
        overflowX: "hidden", display:"flex"}}>
         <Box sx={{width:"100%"}}>
         <CustomAppBar2/>
         <ExportToExcel apiData={data} fileName={fileName} />
         <TextField value={search} onChange={handleSearch}  placeholder="search" sx={{color:"black",float:"right",border:"1px solid black"}}  InputProps={{
            startAdornment:<InputAdornment position="start">{<SearchIcon sx={{color:"black"}}/>}</InputAdornment>,
            style:{fontSize:20,fontWeight:"500",color:"black"}
          }}/>
            <Stack direction="row" alignItems="center" spacing={2} sx={{mt:3,mx:2}}>
            <TableContainer component={Paper} elevation={0}>
     <Table aria-label="simple table" stickyHeader >
       <TableHead>
         <TableRow>
           <TableCell align="left" style={{width: 100}}>Name</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Transaction Code</TableCell>
           <TableCell align="left" style={{width: 100}}>Amount</TableCell>
           <TableCell align="left" style={{width: 100}}>orderId</TableCell>
           <TableCell align="left" style={{width: 100}}>Mode of Payment</TableCell>
           {/* <TableCell align="left" style={{width: 100}}>Date</TableCell> */}
           {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell> */}
           
         </TableRow>
       </TableHead>
       <TableBody>
         {!filter && data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.phone}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.transactioncode}</TableCell>
             <TableCell align="left"> {row.currency}{row.amount}</TableCell>
             <TableCell align="left">{row.orderId}</TableCell>
             <TableCell align="left">{row.channel}</TableCell>
           </TableRow>
         ))}
            {filter && data2.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.name}</TableCell>
             <TableCell align="left">{row.phone}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.transactioncode}</TableCell>
             <TableCell align="left"> {row.currency}{row.amount}</TableCell>
             <TableCell align="left">{row.orderId}</TableCell>
             <TableCell align="left">{row.channel}</TableCell>
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

export default PaymentInfo;
// background-color: #fba8a4;
// background-image: linear-gradient(315deg, #fba8a4 0%, #dad2f3 74%);

