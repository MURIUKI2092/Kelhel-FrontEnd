import React from 'react'
import "../styles/about.css"
import Typography from '@mui/material/Typography';
const About = () => {
  return (
    <div className='about'>
      <section className='aboutImg'>
      <img
        src=' https://metagroupafrica.com/wp-content/uploads/2020/11/shutterstock_141530473-1536x1024.jpg'
        alt='img here'
        />
      </section >
      <section className='aboutUs'>
        <h2><i><q>The  Better Way</q></i></h2>
        <Typography variant="body1" color="text.primary" sx={{fontSize:"18px"}}>
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

      </section>

    </div>
  )
}

export default About