import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, colors } from '@mui/material';
import Button from '@mui/material/Button';
import { Padding } from '@mui/icons-material';

export default function Student() {
    const paperStyle={Padding:'20px 20px', width:600, Margin:'20px auto'}
    const [name,setName]=useState("");
    const[address,setAddress]=useState("");
    const[students,setStudents]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const student={name,address}
        console.log(student);
        fetch("http://localhost:8081/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("New student added")
        })
    }

    useEffect(()=>{
        fetch("http://localhost:8081/student/getAll")
            .then(res=>res.json())
            .then((result)=>{
                setStudents(result);
        })
    },[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h2><u>Add Student</u></h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth 
      value={name} 
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" color="success" onClick={handleSubmit}>
            Success
    </Button>
    </Box>
    {name}
    {address}
    </Paper>

    <h2>Students</h2>
    <Paper elevation={3} style={paperStyle}>
        {
            students.map((student)=>(
                <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={student.id}>
                    ID:{student.id}<br/>
                    Name:{student.name}<br/>
                    Address:{student.address}<br/>
                </Paper>
            ))
        }
    </Paper>
    </Container>
  );
}
