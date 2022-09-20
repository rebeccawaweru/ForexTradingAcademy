import React from 'react'
import {Button} from '@mui/material'
function CustomButton({onClick, title,fullWidth,icon}) {
    return (
    <Button type="submit" fullWidth={fullWidth} sx={{mx:2,backgroundColor:"#CCA300"}} variant='raised' onClick={onClick}>{title}</Button>
    );
}

export default CustomButton;