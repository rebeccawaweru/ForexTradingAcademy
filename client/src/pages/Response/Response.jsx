import React,{useState,useEffect} from 'react'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import client from '../../api/client';
import { Box,FormGroup,FormControlLabel,Checkbox,Modal,Button,Typography, Grid} from '@mui/material';
import { CustomAlert,CustomAppBar,CustomButton,CustomInput,} from '../../components';
import { forexrobots,binarybots } from '../../assets';
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
export default function Response(){
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => setOpen(false);
  const [searchParams, setSearchParams] = useSearchParams();
    //  aei7p7yrx4ae34 
    const history = useNavigate()
    const id = searchParams.get("id") //order id
    const ivm = searchParams.get("ivm") //invoice number
    const mc = searchParams.get("mc")//amount
    const p3 = searchParams.get("p3")//custom parameter
    const p4 = searchParams.get("p4")//course or bot
    const txncd = searchParams.get("txncd")//transaction code
    const msisdn_id = searchParams.get("msisdn_id") //name of payer
    const msisdn_idnum = searchParams.get("msisdn_idnum") //phone no.
    const channel = searchParams.get("channel")
    const cbk = searchParams.get("status")
    const p1 = searchParams.get("p1")
    const p2 = searchParams.get("p2")//CURRENCY
    const [success,setSuccess] = useState('')
    const [success2,setSuccess2] = useState('')
    const [productId,setProductId] = useState('')
    const [viewCourse,setviewCourse] = useState(false)
    const [viewBot,setviewBot] = useState(false)
    const [url,setUrl] = useState([])
    const [risk,setRisk] = useState('')
    const [profit,setProfit] = useState('')
    const [capital,setCapital] = useState(0)
    const[tradingcapital,setTradingcapital] = useState(0)
    const[binary,setBinary] = useState(false)
    const[forexrobot,setForexrobot] = useState(false)
    const [subscription,setSubscription] = useState(false)
    const [email,setEmail] = useState('')
    const [whatsapp,setWhatsApp] = useState('')
    const [telegram,setTelegram] = useState('')
    const [both,setBoth] = useState('')
    const [email2,setEmail2] = useState('')
    const [whatsapp2,setWhatsApp2] = useState(0)
    const [telegram2,setTelegram2] = useState(0)
    // const[riskappetite,setriskAppetite] = useState('')
    // const [expectedreturn,setExpectedreturn] = useState('')
    async function Find(){
      await client.post('/find2',{
        title:"fast bots"
      }).then((response)=>{
          console.log(response.data.response)
          setUrl(response.data.response)
      })
    }
     
    useEffect(()=>{
      Find()
     if(cbk === "aei7p7yrx4ae34"){
        setSuccess("Payment Successful")
        client.post('/newpayment',{
          name:msisdn_id,
          phone:msisdn_idnum,
          transactioncode:txncd,
          email:p3,
          amount:mc,
          invoicenumber:ivm,
          orderId:id,
          channel:channel,
          type:p4,
          currency:p2
        }).then((response)=>{
           console.log(response.data)
           setProductId(id)
          
           if(p4 === "course"){
            setviewCourse(true)
           }else if(p4 === "bots"){
            setviewBot(true)
           }else if(p4 === "Subscription"){
            setSubscription(true)
           }
           
           if(p1 === "Binary Bots"){
            setBinary(true)
           }else if(p1 === "Forex Robots"){
            setForexrobot(true)
           }
          

        }) 
     }
    },[])
const handleSubmit =()=>{
  history('/studentcourse/'+id)
}

const handleSubmit2 = async()=>{
await client.post('/bot',{
  email:p3,
  phone:msisdn_idnum,
  name:msisdn_id,
  capital:capital,
  tradingcapital:tradingcapital,
  riskappetite:risk,
  expectedreturn:profit,
}).then((response)=>{
  setOpen(true)
  setTimeout(()=>{
     history('/')
  },5000)
})
}
const handleEmail = (e)=>{
  setEmail2(e.target.value)
  if(!email2){
      setEmail2(p3)
  }
}
const handleWhatsApp = (e)=>{
  setWhatsApp2(e.target.value)
  if(!whatsapp2){
    setWhatsApp2(msisdn_idnum)
  }
}
const handleTelegram = (e)=>{
  setTelegram2(e.target.value)
  if(!telegram2){
    setTelegram2(msisdn_idnum)
  }
}
const handleSubmit3 = async()=>{
  console.log(email2,whatsapp2,telegram2)
await client.post('/subscriptions',{
     mode:email,
     mode2:whatsapp,
     mode3:telegram,
     mode4:both,
     email:email2,
     whatsappnumber:whatsapp2,
     telegramnumber:telegram2,
     name:msisdn_id,
     invoicenumber:ivm   
}).then((response)=>{
  console.log(response.data)
  setSuccess2("Information Successfully Saved")
})
}
return(
  <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
   overflowX: "hidden", position:"relative",}}>
    <CustomAppBar/>
    <Box sx={{width:"40%",justifyContent:"center", alignItems:"center",textAlign:"center",position:"absolute",left:"30%"}}>
    {success && <CustomAlert color="success" message="Payment Successful"/>}
    

    <Box sx={{mt:5}}>

    {viewCourse && <CustomButton title="View Course" onClick={handleSubmit}/> } 
    {viewBot &&
    <Box>
    {binary && <Box component="img" src={binarybots} sx={{width:"95%", height:"30vh"}}/>}
    {forexrobot && <Box component="img" src={forexrobots} sx={{width:"95%", height:"30vh"}}/>}
         <i>Kindly fill in the questionnaire</i>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Success!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
     
Your {id} Bot will be ready 24 – 48 hrs according to your trading capital, risk appetite and expected return. You will be emailed the bot and our Chief Technology Officer will call you and guide you to set up the {id} Bot on your Trading Account. 

          </Typography>
        </Box>
      </Modal>
    </div>
    <p>What’s your trading capital?</p>
    <CustomInput type="number" value={capital} handleChange={(e)=>setCapital(e.target.value)} border="1px solid black"/>
    How much capital will you allow the trading bots to trade for you?
    <CustomInput type="number" value={tradingcapital} handleChange={(e)=>setTradingcapital(e.target.value)} border="1px solid black"/>
    What’s your risk appetite?
    <FormGroup sx={{textAlign:"center",alignItems:"center",justifyContent
  :"center"}}>
      <FormControlLabel control={<Checkbox value={risk} onChange={()=>setRisk("High")}/>} label="High" />
      <FormControlLabel control={<Checkbox value={risk} onChange={()=>setRisk("Medium")}/>} label="Medium" />
      <FormControlLabel control={<Checkbox value={risk} onChange={()=>setRisk("Low")}/>} label="Low" />
    </FormGroup>
    What`s your expected return?
    <FormGroup sx={{textAlign:"center",alignItems:"center",justifyContent
  :"center"}}>
      <FormControlLabel control={<Checkbox value={profit} onChange={()=>setProfit("High")}/>} label="High" />
      <FormControlLabel control={<Checkbox value={profit} onChange={(e)=>setProfit("Medium")} />} label="Medium" />
      <FormControlLabel control={<Checkbox value={profit} onChange={(e)=>setProfit("Low")}/>} label="Low" />
    </FormGroup>
      <CustomButton title="Submit" onClick={handleSubmit2}/>  
      </Box>
 }

   {subscription && 
   <>
   <Typography>Where would you like to receive your signals</Typography>
    {success2 && <CustomAlert color="success" message={success2}/>}
    <Grid container sx={{mt:3}}>
    <Box sx={{display:"flex",mx:3}}>
    <input type="checkbox" value="Email" onChange={(e)=>setEmail(e.target.value)}/><Typography>Email</Typography>
    </Box>
 
    <Box sx={{display:"flex",mx:3}}>
    <input type="checkbox" value="WhatsApp" onChange={(e)=>setWhatsApp(e.target.value)}/><Typography>WhatsApp</Typography>
    </Box>
    <Box sx={{display:"flex",mx:3}}>
    <input type="checkbox" value="Telegram" onChange={(e)=>setTelegram(e.target.value)}/><Typography>Telegram</Typography>
    </Box>
    <Box sx={{display:"flex",mx:3}}>
    <input type="checkbox" value="Both" onChange={(e)=>setBoth(e.target.value)}/><Typography>Both WhatsApp and Telegram</Typography>
    </Box>  
    <Box sx={{mt:2}}>
    <CustomInput label="Email" value={email2} handleChange={handleEmail} placeholder={p3}/>
    <CustomInput label="WhatsApp Number" value={whatsapp2} handleChange={handleWhatsApp} placeholder={msisdn_idnum} />
    <CustomInput label="Telegram Number" value={telegram2} handleChange={handleTelegram} placeholder={msisdn_idnum}/>
    <CustomButton title="Submit" onClick={handleSubmit3}/>
    </Box>
    </Grid> 
    </>
      } 


    </Box>
    </Box>
   </Box>

)
}