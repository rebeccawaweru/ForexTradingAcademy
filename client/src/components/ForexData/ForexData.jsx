import {Box,Typography,Stack} from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const ForexData = ({title1,title2,title3,ask,bid,spread,icon,src1,src2})=>{
    return(
<Box sx={{width:"22%",height:"60px",backgroundColor:"white",borderRight:"1px solid grey",justifyContent:"center",alignItems:"center",textAlign:"center",display:"flex"}}>
           {icon}
           <Box sx={{mt:-4}}>
           <Box component="img" src={src1} sx={{height:18,width:15}}/>
           </Box>
           <Box sx={{mt:-2}}>
           <Box component="img" src={src2} sx={{height:18,width:15,ml:-0.7,}}/>
           </Box>
            <Box sx={{display:"block"}}>
            <Box sx={{textAlign:"left"}}>
            <Stack direction="row" spacing={4}>
            <Typography component="h3" variant="p" fontSize="small" color="bold" sx={{mx:1}}>{title1}</Typography> 
            <Typography component="p" variant="p" fontSize="smaller" color="bold" sx={{mx:1}}>{title2}</Typography> 
            </Stack>
            <Typography component="p" variant="p" fontSize="10px" color="text.disabled" sx={{mx:1}}>{title3}</Typography> 
            </Box>
            <Stack direction="row" spacing={5} sx={{mx:-6}}>
              <Box>
              <Typography component="p" variant="p" fontSize="10px" color="text.disabled" sx={{mx:1}}>Ask</Typography> 
              <Typography component="p" variant="p" fontSize="10px" color="bold" sx={{mx:1}}>{ask}</Typography> 
              </Box>
              <Box>
              <Typography component="p" variant="p" fontSize="10px" color="text.disabled">Bid</Typography> 
              <Typography component="p" variant="p" fontSize="10px" color="bold">{bid}</Typography> 
              </Box>
              <Box>
              <Typography component="p" variant="p" fontSize="10px" color="text.disabled">Spread</Typography> 
              <Typography component="p" variant="p" fontSize="10px" color="bold">{spread}</Typography> 
              </Box>
            </Stack>
            </Box>
         </Box>
    )
}

export default ForexData