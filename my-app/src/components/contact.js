import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Container from '@mui/material/Container';
import "../styles/contact.css"
import Typography from '@mui/material/Typography';
const Contact = () => {
  const [ username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [telephone,setTelephone]=useState("");

  const handleSubmit = async(event)=>{
    event.preventDefault();
    const newHost ={
      username,
      email,
      telephone,
      
    }
  }
  return (
    <div className='Contact'>
      <section className='contactImg'>
        <img
        src=' https://metagroupafrica.com/wp-content/uploads/2020/08/shutterstock_1186976332-1536x1024.jpg'
        alt='img here'
        />
      </section>
      <div className='contactInfo'>
        <div className='contactWords'>
        <h2>Send Us A Message</h2>
        <Typography variant="body1" color="text.primary" sx={{fontSize:"18px",width:"70%",ml:10}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <h2>OR<br></br></h2>
          <h3>Call Us At +254-745-362-174</h3>
        </div>
        <div className="contactForm">
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          
          <Box component="form"  sx={{ mt: 1 }}>

            
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Your Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={setUsername}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label=" Your Email Address"
              name="email"
              autoComplete="email"
              onChange={setEmail}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="subject"
              label="Subject"
              id="telephone"
               onChange={setTelephone}
              
            />
                <TextareaAutosize
                         aria-label="minimum height"
                           minRows={10}
                             placeholder="Message"
                        
                             style={{ width: 400,fontSize:"16px",fontFamily:"Arial, Helvetica, sans-serif" }}
    />

                                        
            <Button
             onSubmit={handleSubmit}
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 ,ml:20}}
            >
            Send
            </Button>
            </Box>
             </Box>
            </Container>
        </div>
      </div>
    </div>
  )
}

export default Contact
// https://metagroupafrica.com/wp-content/uploads/2020/08/shutterstock_1186976332-1536x1024.jpg