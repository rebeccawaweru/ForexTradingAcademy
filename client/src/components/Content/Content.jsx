import React,{useState,useEffect} from 'react';
import {Box,Stack,Button,Typography,Alert,Table,TableBody, InputAdornment,TextField,TableCell,TableContainer,TableHead,TableRow,Paper,Modal} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import client from '../../api/client'
import {CustomAppBar2,CustomInput} from '../../components';
import {ExportToExcel} from '../../pages/Portal/ExportToExcel'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
function Content() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [fullname, setfullName] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
   const [data, setData] = useState([]);
   const [data2, setData2] = useState([]);
   const [message,setMessage] = useState('')
  const history = useNavigate()
  const id = localStorage.getItem('userId');
  const [email,setEmail] = useState('');
  const [search,setSearch] = useState('')
  const [filter,setFilter]= useState(false)
  const fileName = "MembersData";
  useEffect(() => {
    client.get('/users').then((response)=>{
      setData(response.data.users)
      console.log(response.data.users)
   })
  }, []);
  const handleSubmit = ()=>{
    setOpen(true)
  }
  const handleChange = async () =>{
    const response = await axios.post('https://forextradingarena.herokuapp.com/forexarena/adminreset',{
      email:email
     })
     if(response.data){
      setMessage("check your email")
     }
  }
  const handleSearch = (e)=>{
    setSearch(e.target.value)
    let result = data.filter(f => f.fullname.toLowerCase().includes(search.toLowerCase()))
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
           <CustomAppBar2 handleReset={handleSubmit}/>
           <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {message && <Alert severity="success">{message}</Alert> }
            <i>Admin</i>
          <Typography id="modal-modal-title" variant="p" component="h6" sx={{mb:1}}>
           Enter email
          </Typography>
        <CustomInput value={email} handleChange={(e)=>setEmail(e.target.value)} />
        <Button onClick={handleChange}>Ok</Button>
        </Box>
      </Modal>
    </div>
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
           <TableCell align="left" style={{width: 100}}>Email</TableCell>
           <TableCell align="left" style={{width: 100}}>Phone</TableCell>
           {/* <TableCell align="left" style={{width: 100}}>Actions</TableCell>
           <TableCell align="left" style={{width: 100}}></TableCell> */}
         </TableRow>
       </TableHead>
       <TableBody>
         
         {!filter && data.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.fullname}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.phonenumber}</TableCell>
           </TableRow>
         ))}
        {filter && data2.map((row, i) => (
           <TableRow key={i}>
             <TableCell align="left">{row.fullname}</TableCell>
             <TableCell align="left">{row.email}</TableCell>
             <TableCell align="left">{row.phonenumber}</TableCell>
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

export default Content;
// background-color: #fba8a4;
// background-image: linear-gradient(315deg, #fba8a4 0%, #dad2f3 74%);

