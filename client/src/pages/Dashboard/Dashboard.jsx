import React,{useState,useEffect} from 'react';
import {Box, Typography,Grid,AppBar,Toolbar,Button,IconButton} from '@mui/material'
import {trade1,trade2,trade3,trade4,trade5,trade6,trade7,logo,beginner,intermidiate,advanced,managers,hedge,professional2,automate,vip} from '../../assets'
import {CustomCard,CustomButton,CustomPayment,CourseData} from '../../components';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {useNavigate,useParams} from 'react-router-dom';
import client from '../../api/client';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'
import ShareIcon from '@mui/icons-material/Share';
function Dashboard() {
    const history = useNavigate()
    const {id} = useParams();

    const [data,setData] = useState([])
    const [url,setUrl] = useState('')
    const [course,setCourse] = useState('')
      

    async function getUser (){
      client.get('/user/'+id)
      .then((response)=>{
         setData(response.data.user)
      })
    }

    useEffect(()=>{
      getUser()
    })
    // useEffect(()=>{
    //   client.get('/user/'+id)
    //   .then((response)=>{
    //      setData(response.data.user)
    //   })
    // })
    
    const handlePayment = () =>{
    axios.post('http://localhost:5000/forexarena/ipay-api',{
      email:data.email,
      phone:data.phonenumber,
      course:'Forex Trading For Beginners'
    }).then(response=>setUrl(response.data))
      if(url != ''){
        window.location.replace(url);
        console.log("hey")
      }
    }

    // async function getSomeDataWithAsync() {
    //   const response = await axios.get(url);
    //   console.log(response)
    //   const { data } = response;
    //   console.log(data);
    //   }
      
    //   getSomeDataWithAsync();

    const handleLogout=()=>{
       history('/')
    }
    
    return (
      <Box>
          <Grid container sx={{display:"flex",paddingTop:2,justifyContent:"center", alignItems:"center",mx:{
            lg:25,
            md:25,
            xs:8,
            sm:8
          },width:"80%"}}>
          {/* <CustomCard image={trade1} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Beginners" amount="Ksh. 5000" Button={<CustomPayment id="1" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={beginner} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading for  Beginners</Typography>
          <Box sx={{mt:3}}>
          <CustomPayment id="1" />
          </Box>
          </Box>

          {/* <CustomCard image={trade2} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Intermediate" amount="Ksh. 9000" Button={<CustomPayment id="2" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:260,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={intermidiate} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading For Intermediate</Typography>
          <Box sx={{mt:3}}>
          <CustomPayment id="2"/>
          </Box>
          </Box>

          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={advanced} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading For Advanced Trader</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="8"/>
          </Box>
          </Box>

          {/* <CustomCard image={trade3} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Money Managers" amount="Ksh. 4500" Button={<CustomPayment id="3" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={managers} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading For Money Managers</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="3" />
          </Box>
          </Box>

          {/* <CustomCard image={trade4} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Hedge Fund Managers" amount="Ksh. 4500"Button={<CustomPayment id="4" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={hedge} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading For Hedge Fund Managers</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="4"/>
          </Box>
          </Box>

          {/* <CustomCard image={trade5} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading Professional Traders" amount="Ksh. 5200" Button={<CustomPayment id="5" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={professional2} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading Professional Traders</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="5" />
          </Box>
          </Box>

          {/* <CustomCard image={trade6} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading Automation" amount="Ksh. 5000"Button={<CustomPayment id="6" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={automate} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading Automation</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="6" />
          </Box>
          </Box>

          {/* <CustomCard image={trade7} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading VIP members" amount="Ksh. 2000" Button={<CustomPayment id="7" user={id}/>}/> */}
          <Box elevation={2} sx={{display:"block",boxShadow:"5px 5px 10px #CCA300", height:350,justifyContent:"center",mx:2,mb:2,alignItems:"center",textAlign:"center",borderRadius:5, width:250,'&:hover': {
          background: "whitesmoke",
          }}}>
          <Box component="img" sx={{height:"65%", width:"100%"}} src={vip} alt="" />
          <MenuBookIcon fontSize='large'  sx={{color:"#CCA300"}}/>
          <Typography component="h6" variant='p'>Forex Trading VIP members</Typography>
          <Box sx={{mt:1}}>
          <CustomPayment id="7"/>
          </Box>
          </Box>

          </Grid>
      </Box>
    );
}

export default Dashboard;