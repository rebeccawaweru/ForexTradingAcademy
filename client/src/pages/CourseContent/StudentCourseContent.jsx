import React, { useState,useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box,Typography,InputLabel,MenuItem,FormControl,Select, CardMedia} from '@mui/material'
import {Sidebar,CustomAlert,CourseData, CustomButton} from '../../components';
import client from '../../api/client'
import {useParams} from 'react-router-dom'
function StudentCourseContent() {
  const {id} = useParams()

  const [f,setF] = useState([])
  const [d,setD] = useState([])
  const [admin,setAdmin] = useState(null)
  const [type, setType] = useState("");
  const [file, setFile] = useState('')
  const [read, setRead] = useState(false);
  const [play, setPlay] = useState(false);
  const [course, setCourse] = useState('')
  const [content, setContent] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(3);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setpdfFileError] = useState('');
  const [video, setVideo] = useState('');
  const [format,setFormat] = useState('')
  const [data,setData] = useState([]) 

  const handleCourse = (event)=>{
  client.get('/file/'+event.target.value).then((response)=>{
  console.log(response.data.courses) 
  })
 }

  const handleChange =  (event) => {
     setFormat(event.target.value)
  };
   const handleSubmit = async ()=>{
   const a = await localStorage.getItem('file')
   
  }
const getCourse = ()=>{
  client.get('/course').then((response)=>{
    console.log(response.data.response)
    setData(response.data.response)
   
  })

  setData(localStorage.getItem('file'))
  let reader = new FileReader();
  reader.readAsDataURL(localStorage.getItem('file'));
  reader.onloadend = (e) =>{
    setPdfFile(e.target.result)
  }
  console.log(data)
}
useEffect(()=>{
  getCourse()
})
    return (
      <Box sx={{margin: 0, padding:0,boxSizing:"border-box",width:"100%",height:"100vh",
      overflowX: "hidden",display:"flex"}}>
       <Sidebar selected2={selectedIndex === 3}/>  
       <Box sx={{mx:2,width:"100%",mt:3}}>
       <Typography variant="div" component="h5">Course Content</Typography>
       <Box component="img" src={data}/>
       <Box sx={{mt:3, display:"flex"}}>
         {pdfFileError && <CustomAlert message={pdfFileError} color="error"/>}
         <FormControl sx={{mx:2, width:"10%"}}>
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
      </FormControl>
        <FormControl sx={{mx:2, width:"10%"}}>
        <InputLabel id="demo-simple-select-label">Video</InputLabel>
        <Select
         name="format"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={format}
          label="Content Type"
          onChange={handleChange}
        >
        <MenuItem value="video">Video</MenuItem>
        <MenuItem value="pdf">Pdf</MenuItem>
        </Select>
      </FormControl>
      <CustomButton title="ok" onClick={handleSubmit}/>
       </Box>

        {data&&(
       <Box sx={{border:"1px solid black", width:"100%", height:"70%", userSelect: 'none', mt:1}}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfFile}>
       </Viewer>
          </Worker>
      </Box>
        )}
        {video&&(
                <CardMedia component="video" autoPlay 
                controls  src={video} sx={{border:"1px solid black", width:"100%", height:"70%", maxHeight:"80%",mt:1}}/>
        )}
        {content &&(
          <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center",paddingTop:20}}>
            <Typography color="text.disabled" variant="h6" component="h6">No Content to Display</Typography>
          </Box>
        )}
       </Box>
      <Box sx={{justifyContent:"center", alignItems:"center", height:"fit-content", width:"fit-content"}}>  
      </Box>
      </Box>
    );
}

export default StudentCourseContent;