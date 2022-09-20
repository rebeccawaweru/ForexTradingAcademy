import React,{useState} from 'react';
import {Box, Typography,IconButton,Grid,InputLabel,MenuItem,FormControl,Select} from '@mui/material'
import {CustomInput,CustomButton,Sidebar,RightSide,CourseData} from '../../components'
import CreateIcon from '@mui/icons-material/Create';

import { useNavigate } from 'react-router-dom';

const VIPForum =()=> {
  const history = useNavigate()
  const [name,setName] = useState('');
  const [course,setCourse] = useState('');
  const [selectedIndex, setSelectedIndex] = React.useState(4);
  const handleChange = (event)=>{
    setName(event.target.value)
  }
  const handleCourse = (event)=>{
    setCourse(event.target.value);
 }
 const handleSubmit = ()=>{
     history(`/chat?name=${name}&course=${course}`)
 }
    return (
      <Box sx={{margin: 0, padding: 0,boxSizing:"border-box",width:"100%",height:"100vh",
      overflowX: "hidden",display:"flex"}}>
     <Sidebar selected3={selectedIndex === 4}/>
   
    <Grid sx={{color:"black", mb:2,position:"relative",width:"100%",justifyContent:"center", alignItems:"center", textAlign:"center",mx:{
      lg:35,
      md:35,
      xs:8,
      sm:8
    }}}>
    <Box sx={{backgroundColor:"#EAE7FA",width:"100%",height:"10%",textAlign:"center",justifyContent:"center",alignItems:"center",paddingTop:2,mb:2,mt:2,marginLeft:5, postion:"relative",diplay:"flex"}} >
    <Typography variant="p" component="h5"> Join Forum</Typography> 
    </Box>
 <Box sx={{width:"60%",marginTop:{
     lg:20,
     md:20,
     xs:1,
     sm:1
 },mx:{
     lg:22,
     md:22,
     sm:5,
     xs:5
 }}}>
    <CustomInput
    fullWidth
      value={name}
      handleChange={handleChange}
      placeholder="enter name to join by" 
      border="0.5px solid"
      icon={<CreateIcon sx={{color:"#CCA300"}}/>}/>
</Box>
     <FormControl sx={{marginLeft:{
      lg:20,
      md:20,
      xs:5,
      sm:5
     }, width:"60%"}}>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="course"
          value={course}
          label="Content Type"
          onChange={handleCourse}
        >
        {CourseData.map((course,key)=>{
        return <MenuItem key={key} value={course.title}>{course.title}</MenuItem>
        })}
        </Select>
        <Box sx={{mt:3}}>
        <CustomButton title="OK" onClick={handleSubmit} />
        </Box>
  

      </FormControl>

     </Grid>
    <RightSide/>
      </Box>
    );
}

export default VIPForum;