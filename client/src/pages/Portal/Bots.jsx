import {Box} from '@mui/material'
export default function Bots(){
    const [data,setData ] = useState()
    return(
        <Box>
         <CustomInput placeholder="title"/>
         <CustomInput placeholder = "price"/>
         <CustomInput type="file" placeholder = "picture"/>
         
        </Box>
    )
}