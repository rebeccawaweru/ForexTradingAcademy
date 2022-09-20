import React,{useRef} from 'react';
import {Box, Typography,Grid,Card,CardMedia,CardActions,Button} from '@mui/material'
import {CustomAppBar,HomeVideo,CustomCard,CustomModal2,CustomContent,Strategy,Stepper,CustomModal,CustomButton} from '../../components';
import {trade1,trade2,trade3,trade4,trade5,trade6,trade7,ebook,tradingvideo,package1,package2,package3,about,ad1,ad2,forexblog,forexnews, dailyanalysis, blackboard} from '../../assets'
import {useNavigate,Link} from 'react-router-dom'
import './style.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

function Home() {
  const history = useNavigate()
  const home = useRef(null);
  const courses = useRef(null);
  const strategies = useRef(null);
  const ebooks = useRef(null);
  const executeScroll1 = () => home.current.scrollIntoView() 
  const executeScroll2 = () => courses.current.scrollIntoView() 
  const executeScroll3 = () => ebooks.current.scrollIntoView() 
  const executeScroll4 = () => strategies.current.scrollIntoView() 
    return (
    <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
    overflowX: "hidden"}}>
      <Box>
      <CustomAppBar onclick1={executeScroll1} onclick2={executeScroll2} onclick3={executeScroll3} onclick4={executeScroll4}/>
      <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <Grid container sx={{mt:2}}>
      <div ref={home} className="home" id='home'>
        <Box sx={{display:{
          lg:"flex",
          md:"flex",
          sm:"block",
          xs:"block"
        }, paddingLeft:{
          lg:15,
          md:9,
          sm:0,
          xs:0
        },
        paddingRight:{
          lg:5,
          md:5,
          sm:0,
          xs:0,
        }}}>
          <Box sx={{mx:{
            lg:0,
            md:0,
            sm:5,
            xs:5
          }}}>
          <CustomCard image={ad1} description="Learn More" Button={ <CustomModal/>} sx={{display:"none"}}/>
          
          </Box>
        <HomeVideo video={tradingvideo} component="video"/>
        <Box sx={{mx:{
            lg:0,
            md:0,
            sm:5,
            xs:5
          }}}>
        <CustomCard image={ad2} description="Learn More"  Button={ <CustomModal2/>} sx={{display:"none"}}/>
        </Box>
        </Box>
       </div>
      </Grid>
      <Grid container sx={{mt:2, justifyContent:"center", alignItems:"center", mx:{
        lg:5,
        md:5,
        sm:2,
        xs:2
      }}}>
      <Card sx={{width:"75%", mx:3 }} elevation={0} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={blackboard}
      />
      <CardActions>
      </CardActions>
      </Card>
      <Button variant="outlined" onClick={()=>history('/physicalclasses')}  sx={{backgroundColor:"transparent",color:"black", border:"2px solid #CCA300"}} endIcon={<KeyboardTabIcon />}>
       Enroll 
      </Button>
      </Grid>
      <CustomContent
      title="About Us"
      paragraph="We train Forex trading enthusiasts into becoming the best Forex experts globally. Our experts are well versed with world class strategies which make the courses you take worthwhile and help in monetizing the skills gained.
      Our strategy is to continue advancing our brokerage making it easier, quicker, and more fulfilling for all parties who interact with Forex Trading"
      image={about}/>
      <Box sx={{mt:5}}>
        <div ref={courses} className="courses" id='courses'>
        <Typography component="p" variant="h4">Courses</Typography>
          <Grid container sx={{display:"flex", mt:1, justifyContent:"center", alignItems:"center"}}>

          <CustomCard image={trade1} days="No of days: 30" icon={<CalendarMonthIcon/>} title="Forex Trading For Beginners" amount="Ksh. 5000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+1)}/>}/>

          <CustomCard image={trade2} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Intermediate" amount="Ksh. 9000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+2)}/>}/>

          <CustomCard image={trade3} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Money Managers" amount="Ksh. 4500" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+3)}/>}/>

          <CustomCard image={trade4} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading For Hedge Fund Managers" amount="Ksh. 4500" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+4)}/>}/>

          <CustomCard image={trade5} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading Professional Traders" amount="Ksh. 5200" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+5)}/>}/>

          <CustomCard image={trade6} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading Automation" amount="Ksh. 5000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+6)}/>}/>

          <CustomCard image={trade7} days="No of days: 30"  icon={<CalendarMonthIcon/>}  title="Forex Trading VIP members" amount="Ksh. 2000" Button={<CustomButton title="Enroll" onClick={()=>history('/courses'+7)}/>}/>
          </Grid>
          </div>
        <div ref={ebooks} className="ebooks" id='ebooks'>
      <Typography component="p" variant="h4" sx={{mt:2}}>E-Books</Typography>
      <CustomContent
      title="Forex Trading For Beginners"
      paragraph="Forex Trading For Beginners!: Best Forex Trading Strategies to Make Money Today! Learn Forex Day Trading Secrets & How To Make Money Currency Trading! Best Forex Trading Guide!"
      image={ebook}/>
      </div>
      <div ref={strategies} className="strategies" id='strategies'>
      <Typography component="p" variant="h6">Forex Trading Strategies</Typography>
     <Strategy/>
      </div>
     <Grid sx={{mt:5, height:{
       lg:300,
       md:300,
       sm:400,
       xs:400
     },color:"white", mb:2}} className="bg">
      <Grid container sx={{ justifyContent:"center", alignItems:"center" }}>
        <Box sx={{textAlign:"left", mx:8}}>
        <Typography component="p" variant="h4">MISSION</Typography>
        <Typography component="p" variant="p">To provide online traders with all the essentials they need<br></br> to achieve maximum profit</Typography>
        </Box>
         <Box component="iframe" sx={{ width:"650", height:"400",mt:10, border:"1px solid blue"}} src="https://www.youtube.com/embed/iyevbcom-Ss"/>
      </Grid>
     </Grid>
     <Typography component="p" variant="h4">Gift Packages</Typography>
     <Grid container sx={{display:"flex", mt:2, justifyContent:"center", alignItems:"center"}}>
       <CustomCard image={package1} title="Forex Trading For Professionals" description="This course is design to set the foundation for those who want to be Professional Forex Traders" header="FOREX TRADING FOR PROFESSIONALS @KES5200.00" sx={{backgroundColor:"purple", color:"white"}} btn="Buy Now" />
       <CustomCard image={package2} title="Forex Trading For VIP Members" description="Forex Trading for V.I.P Members is the ultimate trade booster in all our Forex courses." header="FOREX TRADING FOR VIP MEMBERS @KES2000.00" sx={{backgroundColor:"#CCA300", color:"white"}} btn="Buy Now" />
       <CustomCard image={package3} title="Forex Trading For Hedge Fund Managers" description="The Hedge Fund industry is the fastest growing part of the asset management industry and this course is crucial for anyone who wants to be ready for this growth in the Forex market." header="FOREX TRADING FOR HEDGE FUND MANAGERS @KES4500.00" sx={{backgroundColor:"#e0316f", color:"white"}} btn="Buy Now"/>
     </Grid>
     <Grid sx={{mt:5, mb:2, justifyContent:"center", alignItems:"center"}} className="bg">
    <Typography component="p" variant="h6" sx={{color:"whitesmoke", mb:2}}>FOREX TRADING STRATEGIES</Typography>
     <hr style={{width:"60%",marginLeft:"20%", backgroundColor:"white"}}/>
      <Grid container sx={{ justifyContent:"center", alignItems:"center", display:"flex" }}>
        <Box component="iframe" sx={{ width:"650", height:"400",mt:3,mb:3, mx:3, border:"1px solid blue"}} src="https://www.youtube.com/embed/zhEukjCzXwM"/>
        <Box component="iframe" sx={{ width:"650", height:"400",mt:3,mb:3, mx:3, border:"1px solid blue"}} src="https://www.youtube.com/embed/6LVT0X0r99M"/>
        <Box component="iframe" sx={{ width:"650", height:"400",mt:3,mb:3, mx:3, border:"1px solid blue"}} src="https://www.youtube.com/embed/gppJLIGIS8Y"/>
      </Grid>
     </Grid>
     <Typography component="p" variant="h6">OUR CLIENTS' WORDS</Typography>
      <Stepper/>
      <Typography component="p" variant="h4" sx={{mt:2}}>Our Blog</Typography>
      <Typography variant="body2" color="text.secondary">These blogs can be of greater help in your trading journey as such, it has helped us go far</Typography>
      <Grid container sx={{display:"flex", mt:2, justifyContent:"center", alignItems:"center"}}>
      <CustomCard
      image={forexblog}
      title=""
      sx={{display:"none"}}
      description={<a href="http://www.forexfactorynews.com" style={{color:"#CCA300"}}>Forex Trading Factory</a>}
      btn="Read More"/>
      <CustomCard
       image={forexnews}
      title=""
      sx={{display:"none"}}
      description={<a href="http://www.forexfactorynews.com" style={{color:"#CCA300"}}>Forex Trading Factory</a>}
      btn="Read More"/>
       <CustomCard
        image={dailyanalysis}
      title=""
      sx={{display:"none"}}
      description={<a href="http://www.forexfactorynews.com" style={{color:"#CCA300"}}>Forex Factory News</a>}
      btn="Read More"/>
      </Grid>
    </Box>
    
        
      {/* <Typography variant="h3" component="p" sx={{mb:3}}>Forex Arena Tading Company</Typography>
      <CustomButton title="Enroll with us" onClick={()=>history('/signup')}/> */}
      </Box>
    </Box>
     <Box sx={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center"}}>
      <Link to='/terms' style={{color:"#CCA300",marginRight:"10px"}}>Terms & Conditions</Link>
      <Link to='/privacy' style={{color:"#CCA300",marginRight:"10px"}}>Privacy Policy</Link>
      <Link to='/refund' style={{color:"#CCA300",marginRight:"10px"}}>Refund Policy</Link>
     </Box>
     <Typography sx={{bottom:0, textAlign:"center"}} variant='body2' component='div' color="text.secondary">© 2022 Forex Trading Academy.International Trading Company </Typography>
    </Box> 
    
    );
}

export default Home;