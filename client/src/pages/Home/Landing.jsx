import React,{useRef,useState,useEffect} from 'react';
import {Box,Typography,Grid,Button,IconButton} from '@mui/material'
import './style.css'
import {CustomCard,CustomButton, CustomInput,ForexApi} from '../../components'
import {CustomShapes, CustomAppBar,CustomContent} from './Components'
import {person,person2,bottom} from '../../assets'
import {useNavigate,Link} from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ApiIcon from '@mui/icons-material/Api';
import {image1,image2,image3,image4,vip,automate,hedge,intermidiate,beginner,tradingrobot,professional,managers,benefits,advanced,professional2,whatsapp} from '../../assets'
import Contact from './Components/Contact';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import axios from 'axios'
import GoogleTranslate from './Components/GoogleTranslate';
import { Helmet } from "react-helmet";
function Landing() {
    const history = useNavigate()
    const courses = useRef(null);
    const [ip, setIP] = useState('');
    const executeScroll2 = () => courses.current.scrollIntoView() 
    const handleAdmin = ()=>{
      history('/access')
    }
    const [open, setOpen] = React.useState(false);
    const handleSubmit = ()=>{
        setOpen(true);
     }
     const currentYear = new Date().getFullYear();
     const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data.country_name);
      setIP(res.data.IPv4)
      if(res.data.country_name !== "Kenya"){
        window.location.replace("https://forextradingacademy.co/")
      }
    }
    function googleTranslateElementInit() {
      new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }
    useEffect(()=>{
      getData()
    },[])
    
    return (
    <Box sx={{width:"100%", height:"100%",margin: 0, padding: 0,boxSizing:"border-box",position:"relative"}}>
     <Helmet>
     <title>Forex Trading</title>
    <meta
      name="keywords"
      content="MT4,MT5,Binary Bots,Forex Robots,Algorithmic trading,High Quality FX Robots"
      />
    <meta
        name="description"
        content="FX Brokers for Forex Trading"
    />
    <meta
        name="keywords"
        content="Expert Advisors,Crypto Currency,Robo Trading"
    />
    </Helmet>
    <Box sx={{postion:"relative"}}>
    {/* <CustomShapes/> */}

    <div id="google_translate_element" style={{display:"flex",float:"right",height:"8vh"}}>
    <Button  onClick={googleTranslateElementInit}>Translate</Button>
    </div>
    <CustomAppBar onclick2={executeScroll2} contact={handleSubmit}/>
    <Box>
    <ForexApi/>
    </Box>
  
    <Box sx={{position:"absolute", color:"white",  left:"720px",
    top:"150px", fontWeight:700, fontSize:64}}>
     <Typography component="h5" variant="h5">Forex Trading Academy</Typography>

     <Typography color="text.disabled" sx={{
        display:{
            lg:"block",
            md:"block",
            sm:"none",
            xs:"none"
        }
     }}>We are a Forex Education and Training Specialist, offering a range<br></br> of courses that help people learn about and understand the Forex market<br></br> and the opportunities and risks within it. Our courses run regularly across the <br></br> country and are taught by Trained and Experienced Professional Traders.</Typography>
    </Box>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 320"><path fill="#CCA300" fill-opacity="1" d="M0,160L34.3,176C68.6,192,137,224,206,224C274.3,224,343,192,411,181.3C480,171,549,181,617,170.7C685.7,160,754,128,823,117.3C891.4,107,960,117,1029,117.3C1097.1,117,1166,107,1234,90.7C1302.9,75,1371,53,1406,42.7L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>

    <Box component="img" src={image4} sx={{position:"absolute", width:"304px",borderRadius:"50%", height:"200px",left:"200px", top:"130px",display:{
        lg:"block",
        md:"block",
        xs:"none",
        sm:"none"
    }}}/>
      <Contact open={open} close={()=>setOpen(false)}/>
       <Grid container sx={{display:"flex",top:{
        lg:350,
        md:350,
        xs:160,
        sm:160
       },position:"absolute",justifyContent:"center",alignItems:"center",textAlign:"center",}}>
       <Box>
       <Box src={image1} component="img" sx={{width:"200px", height:"200px",borderRadius:15, border:"1px #794BFF solid",mb:2,mx:2}}/>
       <Box>
       <Button variant="outlined" onClick={()=>history('/bots')}  sx={{backgroundColor:"transparent",color:"black", border:"1px solid black",mb:2}}>
         Binary Bots
      </Button>
       </Box>
       </Box>
       
       <Box>
        <Box src={tradingrobot} component="img" sx={{width:"200px", height:"200px",borderRadius:15, border:"1px #794BFF solid",mx:2,mb:2}}/>
        <Box>
        <Button variant="outlined" onClick={()=>history('/forexbots')}  sx={{backgroundColor:"transparent",color:"black", border:"1px solid black",mb:2}}>
         Forex Robots
      </Button>
        </Box>
        </Box>

        <Box>
        <Box src={image3} component="img" sx={{width:"200px", height:"200px",borderRadius:15, border:"1px #794BFF solid",mx:2,mb:2}}/>
        <Box>
        <Button variant="outlined" onClick={()=>history('/expert')}  sx={{backgroundColor:"transparent",color:"black", border:"1px solid black",mb:2}}>
        Forex Signals
      </Button>
        </Box>
        </Box>
       
       <Box>
       <Box src={image2} component="img" sx={{width:"200px", height:"200px",borderRadius:15, border:"1px #794BFF solid",mb:2}}/>
       <Box>
       <Button variant="outlined" onClick={()=>history('/strategy')}  sx={{backgroundColor:"transparent",color:"black", border:"1px solid black",mb:2}}>
         Forex Strategies
      </Button>
       </Box>
       </Box>
     
   
    
       {/* <a href="https://wa.me/0782666555/?text=Hello, i would like to place an order" style={{textDecoration:"none",position:"absolute",left:"86%"}}> 
      <Typography></Typography><b>WhatsApp us</b> <WhatsAppIcon sx={{fontSize:50,color:"white",backgroundColor:"green",borderRadius:"50%",padding:2}}/>
         </a>  */}
  <Box sx={{display:"flex", float:"right"}}>
  <a href='https://wa.me/0782666555/?text=Hello, i would like to place an order'>
       <IconButton aria-label="delete">
        <WhatsAppIcon sx={{fontSize:50,color:"white",backgroundColor:"green",borderRadius:"50%"}}/>
     
        <Typography color="primary" sx={{display:{
          lg:"block",
          md:"block",
          sx:"none",
          xs:"none"
        }}}>Whatsapp Us</Typography>
      </IconButton>
      </a>
       </Box>
      
       </Grid>
      
       {/* <Box sx={{left:{
        lg:"95%",
        md:"95%",
        sm:"3%",
        xs:"3%"
       },position:"fixed"}}>
           <a href="https://api.whatsapp.com/send?phone=07113993512" style={{textDecoration:"none"}}>
        
           <WhatsAppIcon sx={{color:"green"}}/>
   
           </a>
           </Box> */}
    
   <Box sx={{justifyContent:"center",alignItems:"center",textAlign:"center",position:"absolute",top:{
    lg:600,
    md:600,
    xs:1200,
    sm:750
   } }}>
   
       <Typography variant="h5" component="h5" sx={{mt:5}}>Our Popular Courses</Typography>
       <Typography color="text.disabled">Our Experienced and Professional Traders will teach you how to trade Forex whilst also providing you with<br></br> the guidance and support you need to be a Successful Forex Trader.</Typography>
       <div ref={courses} className="courses" id='courses'>
       <Grid container sx={{display:"flex", mt:3, justifyContent:"center", alignItems:"center"}}>

       <CustomCard image={beginner} sx={{display:"none"}} title="Forex Trading For Beginners" amount="1000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+1)}/>}/>

        <CustomCard image={intermidiate} sx={{display:"none"}}  title="Forex Trading For Intermediate" amount="2000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+2)}/>}/>

        <CustomCard image={advanced} sx={{display:"none"}}  title="Forex Trading For Advanced Trader" amount="3000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+8)}/>}/>
        <CustomCard image={professional2} sx={{display:"none"}}  title="Forex Trading For Professional Traders" amount="5000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+5)}/>}/>
  
        <CustomCard image={managers} sx={{display:"none"}}  title="Forex Trading For Money Managers" amount="25000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+3)}/>}/>

        <CustomCard image={hedge} sx={{display:"none"}}  title="Forex Trading For Hedge Fund Managers" amount="25000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+4)}/>}/>

       

        <CustomCard image={automate} sx={{display:"none"}}  title="Forex Trading Automation" amount="10000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+6)}/>}/>

        <CustomCard image={vip} sx={{display:"none"}}   title="Forex Trading For VIP Members" amount="15000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+7)}/>}/>

       </Grid>
       </div>
       <Grid container sx={{display:"flex",width:"100%",backgroundColor:"#CCA300",height:{
        lg:"65vh",
        md:"65vh",
        xs:"88vh",
        sm:"88vh"
       }}}>
           <Box sx={{width:"50%",justifyContent:"center",alignItems:"center",textAlign:"center",height:"100%",}} component="img" src={benefits}/>
           <Box sx={{width:"50%",color:"white",textAlign:"left",pt:2,pl:2}}>
            <Typography variant="h6" component="h6">
            Benefits of Learning Forex Trading With us
            </Typography>
            <Typography variant="p" component="p">
            <ApiIcon/> Our only vested interest is you and your success.
            </Typography>
            <br></br>
            <Typography variant="p" component="p">
            <ApiIcon/>We are independently owned and objective educators.
            </Typography>
            <br></br>
            <Typography variant="p" component="p">
            <ApiIcon/> We are experienced, knowledgeable, well-established and credible.
            </Typography>
            <br></br>
            <Typography variant="p" component="p">
            <ApiIcon/>We are Professional Forex Traders and Forex Educators. We live it. You learn it.
            </Typography>
           
           </Box>
       </Grid>

       <Grid container sx={{display:"flex",width:"100%",backgroundColor:"white", display:{
                xs:"none",
                sm:"none",
                lg:"block",
                md:"block"
           },height:{
        lg:"10vh",
        md:"10vh",
        sm:"105vh",
        xs:"105vh"
       },mb:2,paddingLeft:{
        lg:50,
        md:50,
        xs:8,
        sm:8
       }}}>
           <Box sx={{width:"60%",justifyContent:"center",alignItems:"center",textAlign:"center",mt:3,}}>
          <Typography variant="h6" component="h6">Become a Successful Forex Trader by enrolling to our courses and our other services: Trading Bots, Trading Strategies and Trading Signals. </Typography>
          <Typography variant="p" component="p" color="text.disabled">Don’t wait any longer to tap into the wealth creation potential of Forex. Don’t settle for less when it comes to learning. Register below to see how you can achieve the financial freedom and lifestyle you deserve.</Typography>
               
           </Box>
       
       </Grid>
       <Box sx={{display:{
        lg:"flex",
        md:"flex",
        xs:"block",
        sm:"block"
      },height:{
        lg:"35vh",
        md:"45vh",
        xs:"10vh",
        sm:"10vh"
      },justifyContent:"center",mb:2,alignItems:"center",textAlign:"center",pl:{
        lg:10,
        md:10,
        sm:2,
        xs:2
      },mx:{
        lg:8,
        md:8,
        xs:1,
        sm:1

      }}}>
      <Typography>Support: </Typography>
      <Box sx={{display:"flex",}}>
  <a href='https://wa.me/0782666555/?text=Hello, i would like to book a free class' style={{textDecoration:"none",cursor:"pointer"}}>
       <IconButton aria-label="delete">
        <WhatsAppIcon sx={{fontSize:25,color:"white",backgroundColor:"green",borderRadius:"50%"}}/>
     
        <Typography color="primary">Whatsapp Us</Typography>
      </IconButton>
      </a>
       </Box>
      <Box sx={{mx:2, display:"flex"}}>
      <LocalPhoneIcon/>+254782666555
      </Box>
      <Box sx={{mx:2, display:"flex"}}>
      <EmailIcon/>support@forextradingacademy.co.ke
      </Box>


      </Box>

      <Box sx={{width:"100%",height:{
        lg:0,
        md:0,
        sm:"20vh",
        xs:"20vh"
      }}}>

      </Box>
       <Box sx={{position:{
        lg:"absolute",
        xs:"absolute",
        md:"absolute",
        sm:"absolute"
       },width:"100%",bottom:0}}>

       <Box sx={{display:{
         lg:"flex",
         md:"flex",
         sm:"block",
         xs:"block"
       },bottom:0,position:"absolute",textAlign:"center",justifyContent:"center",paddingLeft:{
        lg:40,
        md:40,
        xs:2,
        sm:2
       },}}>
       <Typography variant="p" component="p" color="text.disabled">{currentYear} © Forex Trading Academy. </Typography>
       <Typography variant="p" component="p" color="text.disabled">All Rights Reserved. {" "}| </Typography>
       <Link to='/terms' style={{color:"black",marginRight:"10px"}}>Terms & Conditions</Link>  
        <Link to='/privacy' style={{color:"black",marginRight:"10px"}}>Privacy Policy</Link> 
        <Link to='/refund' style={{color:"black",marginRight:"10px"}}>Refund Policy</Link>
        <Link to="/unsubscribe" style={{color:"black",marginRight:"10px"}}>Unsubscribe</Link>
        <Link to='/access' style={{color:"black",marginRight:"10px"}}>ADMIN</Link>

    
       </Box>

        <Box sx={{
            display:{
                lg:"block",
                md:"block",
                sx:"none",
                xs:"none"
            }
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CCA300" fill-opacity="1" d="M0,224L30,208C60,192,120,160,180,138.7C240,117,300,107,360,138.7C420,171,480,245,540,261.3C600,277,660,235,720,224C780,213,840,235,900,250.7C960,267,1020,277,1080,250.7C1140,224,1200,160,1260,117.3C1320,75,1380,53,1410,42.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </Box>


       </Box>


   </Box>
 
    </Box>

    </Box>
    );
}

export default Landing;