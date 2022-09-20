import React, { useState,useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import {Box,Typography,InputLabel,MenuItem,FormControl,Select, CardMedia} from '@mui/material'
import {CustomInput, CustomButton,Sidebar,CustomAlert,CourseData,CustomAppBar2} from '../../components';
import client from '../../api/client'
import {useParams} from 'react-router-dom'
function ContentAdmin() {
  const {id} = useParams()
  const [data,setData] = useState([])
  const [admin,setAdmin] = useState(null)
  const [singleFile, setSingleFile] = useState('');
  const [singleProgress, setSingleProgress] = useState(0);
  useEffect(()=>{
       setAdmin(true)
//   client.get('/user/'+id)
//   .then((response)=>{
//     setData(response.data.user)
//     if(data.email == "calvinkirochi254@gmail.com"){
//       setAdmin(true)
//     }else{
//       setAdmin(false)
//     } 
//   })
  })
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [type, setType] = React.useState("");
   const [file, setFile] = useState('')
   const [read, setRead] = useState(false);
   const [play, setPlay] = useState(false);
   const [course, setCourse] = useState("")
   const [content, setContent] = useState(false);
   const [selectedIndex, setSelectedIndex] = React.useState(3);
 
  const handleCourse = (event)=>{
     setCourse(event.target.value);
  }
  const handleChange = async (event) => {
    setType(event.target.value)
    console.log(event.target.value)
    if(event.target.value == "pdf"){
      setRead(true)
    }else if(event.target.value == "video"){
        setPlay(true)
    }
  };
   const [pdfFile, setPdfFile] = useState(null);
   const [pdfFileError, setpdfFileError] = useState('');
   const [video, setVideo] = useState('');
   const [dataFile, setDataFile] = useState('');
   const fileType = ['application/pdf'];
   const fileT = ['application/mp4']

   const handleFileChange = (e)=>{
     let selectedFile = e.target.files[0];

     if(selectedFile){
       if(selectedFile&&fileType.includes(selectedFile.type)){
         let reader = new FileReader();
         reader.readAsDataURL(selectedFile);
         if(read){
          reader.onloadend = (e) =>{
            setPdfFile(e.target.result);
            setDataFile(selectedFile)
          }
         }else{
          setpdfFileError('Please select the correct type of Content you wish to view')
        }
       }else if(selectedFile.type.includes("video")){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        if(play){
          reader.onloadend = (e) =>{
            setVideo(e.target.result);
            setDataFile(selectedFile);
             console.log(selectedFile)
          }
        }else{
          setpdfFileError('Please select the correct type of Content you wish to view')
        }
       }else{
        setPdfFile(null)
        setpdfFileError('Please select valid file')
      }
     }else{
      setpdfFileError('Please select valid video file')
     }
   
   }
 
   const handlePdfSubmit = async(e)=>{
     e.preventDefault();
      try {
       const formData = new FormData();
       formData.append("course", course);
       formData.append("format", type);
       formData.append("file", dataFile);
       const response = await client.post('http://localhost:5000/forexarena/newcourse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if(response){
        console.log(dataFile)
      }else{
        console.log("error")
      }
      } catch (error) {
        console.log(error.message)
      }
   }
   useEffect(()=>{
     
    if(!pdfFile && !video){
      setContent(true)
    }
   })

   
   const SingleFileChange = async (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
    const formData = new FormData();
      formData.append('file', singleFile);
      const response = await client.post('/newcourse', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      if(response){
        console.log("hey")
      }else{
        console.log("error")
      } 
    }
  //   const uploadSingleFile = async () => {
  //     const formData = new FormData();
  //     formData.append('file', singleFile);
  //     const response = await client.post('/newcourse', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     if(response){
  //       console.log(response.data)
  //     }else{
  //       console.log("error")
  //     } 
     
  // }
    return (
      <Box sx={{margin: 0, padding:0,boxSizing:"border-box",width:"100%",height:"100vh",
      overflowX: "hidden",display:"flex"}}>
         <Box sx={{width:"100%"}}>
           <CustomAppBar2/>
       <Typography variant="div" component="h5">Course Content</Typography>
        {/* //admin */}
        <form onSubmit={handlePdfSubmit}>
       <Box sx={{mt:3, display:"flex"}}>
         {pdfFileError && <CustomAlert message={pdfFileError} color="error"/>}
         {admin&&(
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
         )}
        <FormControl sx={{mx:2, width:"10%"}}>
        <InputLabel id="demo-simple-select-label">Video</InputLabel>
        <Select
         name="format"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Content Type"
          onChange={handleChange}
        >
          <MenuItem value="video">Video</MenuItem>
        <MenuItem value="pdf">Pdf</MenuItem>
        </Select>
      </FormControl>

       {admin&&(
        <>
    
      {/* <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} /> */}
     
    <CustomInput name="file" type="file"  placeholder="select pdf file to upload" label="Course PDF" handleChange={handleFileChange}/>
    </>
       )}


       </Box>
       {admin&&(
       <CustomButton onClick={handlePdfSubmit} title="Upload"/>
       )}
</form>

        {pdfFile&&(
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
        {/* {content &&(
          <Box sx={{justifyContent:"center", alignItems:"center", textAlign:"center",paddingTop:20}}>
            <Typography color="text.disabled" variant="h6" component="h6">No Content to Display</Typography>
          </Box>
        )} */}
       </Box>
      <Box sx={{justifyContent:"center", alignItems:"center", height:"fit-content", width:"fit-content"}}>  
      </Box>
      </Box>
    );
}

export default ContentAdmin;