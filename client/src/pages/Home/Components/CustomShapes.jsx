import React from 'react';
import {Box} from '@mui/material'
function CustomShapes({width,height,margin}) {
    return (
        <Box sx={{
            marginLeft:{margin},
            mt:2,
            position:"absolute",
            width: {width},
            height: {height},
            borderRadius:"50%",
            border: "9px solid rgba(255, 255, 255, 0.54)"}}/>
    );
}

export default CustomShapes;