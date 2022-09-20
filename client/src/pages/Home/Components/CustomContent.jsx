import React from 'react';
import {Box} from '@mui/material'
function CustomContent({src}) {
    return (
        <Box sx={{width:"168px",mx:2, height:"183px",borderRadius:15, border:"1px #794BFF solid",backgroundColor:"white",pt:10  }} component="img" src={src}/>
   
 
    );
}

export default CustomContent;