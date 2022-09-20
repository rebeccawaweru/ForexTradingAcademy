import React from 'react';
import {Box, Typography, TextField, InputAdornment } from '@mui/material'
function CustomInput({label,icon,helperText, value,handleChange,name,type,error,onBlur,sx,placeholder,fullWidth,border,press,p}) {
    return (
        <Box sx={{mb:2}}>
        {error ? (
            <Box sx={{mb:1}}>
            <Typography style={{ color: 'red', fontSize: 13 }}>{error}</Typography>
            </Box>
          ) : null}
        <TextField
        fullWidth={fullWidth}
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        helperText={helperText}
        label={label}
        placeholder={placeholder}
        sx={{position:{p},display:{sx}, "& label": {color:"#CCA300"}, border:{border}}}
        onKeyPress={press}
        InputProps={{
            startAdornment:<InputAdornment position="start">{icon}</InputAdornment>,
            style:{fontSize:20,fontWeight:"500"}
          }}
        />  
        </Box>
    );
}

export default CustomInput;