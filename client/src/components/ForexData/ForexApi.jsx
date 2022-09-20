import {Box,Typography,Stack} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ForexData from './ForexData';
export default function ForexApi(){
    return(
     <Box sx={{overflow:"hidden"}}>
        {/* <marquee
        loop="infinite"
          behavior='scroll'
          scrollamount='8'
          width='100%'
          direction='left'
          height='65px'
  
          style={{backgroundColor:"white", overflow:"hidden"}}
        >
        <Box sx={{position:"relative", left:"-97%",display:"flex",animation:"scroll 10s linear infinite"}}>
         <ForexData
            title1="EUR/USD"
            title2="1.01816"
            title3="Euro / US Dollar"
            ask="1.01827"
            bid="1.0185"
            spread="-2.30"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="EUR/JPY"
            title2="136.591"
            title3="Euro / Japanese yen"
            ask="136.624"
            bid="136.556"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/jpy.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="EUR/GBP"
            title2="0.84021"
            title3="Euro / British Pound"
            ask="0.84065"
            bid="0.83997"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/gbp.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
         <ForexData
            title1="EUR/AUD"
            title2="1.4527"
            title3="Euro / Australian Dollar"
            ask="1.45231"
            bid="1.45185"
            spread="4.60"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/aud.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
        <ForexData
            title1="AUD/USD"
            title2="0.70115"
            title3="Australian Dollar / US Dollar"
            ask="0.70126"
            bid="0.70115"
            spread="1.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/aud.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/CAD"
            title2="1.28390"
            title3="US Dollar / Canadian Dollar"
            ask="1.28434"
            bid="1.28366"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/cad.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/CHF"
            title2="0.94944"
            title3="US Dollar / Swiss Franc"
            ask="1.28434"
            bid="0.9490"
            spread="4.40"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/chf.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/JPY"
            title2="134.163"
            title3="US Dollar / Japanese yen"
            ask="134.163"
            bid="134.152"
            spread="1.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/jpy.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="GBP/USD"
            title2="1.21177"
            title3="British Pound / US Dollar"
            ask="1.2121"
            bid="1.21133"
            spread="7.70"
            src1="https://fxpricing.com/assets/countries/flags-circle/gbp.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAG/USD"
            title2="20.1827"
            title3="Silver Spot / US Dollar"
            ask="20.1928"
            bid="20.1737"
            spread="19.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/xag.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAU/USD"
            title2="1778.861"
            title3="Gold Spot / US Dollar"
            ask="1779.00"
            bid="1778.714"
            spread="28.60"
            src1="https://fxpricing.com/assets/countries/flags-circle/xau.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>

         </Box>
        </marquee> */}

<div class="wrapper">
  <div class="marquee">
    <p>
    <ForexData
            title1="EUR/USD"
            title2="1.01816"
            title3="Euro / US Dollar"
            ask="1.01827"
            bid="1.0185"
            spread="-2.30"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="EUR/JPY"
            title2="136.591"
            title3="Euro / Japanese yen"
            ask="136.624"
            bid="136.556"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/jpy.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="EUR/GBP"
            title2="0.84021"
            title3="Euro / British Pound"
            ask="0.84065"
            bid="0.83997"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/gbp.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
         <ForexData
            title1="EUR/AUD"
            title2="1.4527"
            title3="Euro / Australian Dollar"
            ask="1.45231"
            bid="1.45185"
            spread="4.60"
            src1="https://fxpricing.com/assets/countries/flags-circle/eur.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/aud.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
        <ForexData
            title1="AUD/USD"
            title2="0.70115"
            title3="Australian Dollar / US Dollar"
            ask="0.70126"
            bid="0.70115"
            spread="1.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/aud.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
                <ForexData
            title1="USD/CAD"
            title2="1.28390"
            title3="US Dollar / Canadian Dollar"
            ask="1.28434"
            bid="1.28366"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/cad.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/CHF"
            title2="0.94944"
            title3="US Dollar / Swiss Franc"
            ask="1.28434"
            bid="0.9490"
            spread="4.40"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/chf.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/JPY"
            title2="134.163"
            title3="US Dollar / Japanese yen"
            ask="134.163"
            bid="134.152"
            spread="1.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/jpy.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="GBP/USD"
            title2="1.21177"
            title3="British Pound / US Dollar"
            ask="1.2121"
            bid="1.21133"
            spread="7.70"
            src1="https://fxpricing.com/assets/countries/flags-circle/gbp.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAG/USD"
            title2="20.1827"
            title3="Silver Spot / US Dollar"
            ask="20.1928"
            bid="20.1737"
            spread="19.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/xag.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAU/USD"
            title2="1778.861"
            title3="Gold Spot / US Dollar"
            ask="1779.00"
            bid="1778.714"
            spread="28.60"
            src1="https://fxpricing.com/assets/countries/flags-circle/xau.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
       
    </p>
    <p>
    <ForexData
            title1="USD/CAD"
            title2="1.28390"
            title3="US Dollar / Canadian Dollar"
            ask="1.28434"
            bid="1.28366"
            spread="6.80"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/cad.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/CHF"
            title2="0.94944"
            title3="US Dollar / Swiss Franc"
            ask="1.28434"
            bid="0.9490"
            spread="4.40"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/chf.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="USD/JPY"
            title2="134.163"
            title3="US Dollar / Japanese yen"
            ask="134.163"
            bid="134.152"
            spread="1.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/jpy.svg"
            icon={<KeyboardArrowDownIcon color="error"/>}/>
        <ForexData
            title1="GBP/USD"
            title2="1.21177"
            title3="British Pound / US Dollar"
            ask="1.2121"
            bid="1.21133"
            spread="7.70"
            src1="https://fxpricing.com/assets/countries/flags-circle/gbp.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAG/USD"
            title2="20.1827"
            title3="Silver Spot / US Dollar"
            ask="20.1928"
            bid="20.1737"
            spread="19.10"
            src1="https://fxpricing.com/assets/countries/flags-circle/xag.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
         <ForexData
            title1="XAU/USD"
            title2="1778.861"
            title3="Gold Spot / US Dollar"
            ask="1779.00"
            bid="1778.714"
            spread="28.60"
            src1="https://fxpricing.com/assets/countries/flags-circle/xau.svg"
            src2="https://fxpricing.com/assets/countries/flags-circle/usd.svg"
            icon={<KeyboardArrowUpIcon color="success"/>}/>
    </p>
  </div>
</div>
     </Box>

    )
}