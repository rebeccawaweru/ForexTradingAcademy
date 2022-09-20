import {Box,Typography} from "@mui/material"

const CustomBox = ({label})=>{
    return(
    <Box sx={{width:200,height:200,boxShadow:"5px 5px 10px #CCA300",backgroundColor:"whitesmoke",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:5}}>
        <Typography variant="p" component="h5" sx={{textAlign:"center"}}>{label}</Typography>
    </Box>
    )
}

export default CustomBox