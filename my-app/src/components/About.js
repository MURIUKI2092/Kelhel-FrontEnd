import React from 'react'
import "../styles/about.css"
import Typography from '@mui/material/Typography';
import Slider from '../sliders/homeSlider';
const About = ({children}) => {
  return (
    <div className='about'>
      <section className='aboutImg'>
      <Slider/>
      </section>
      <section className='aboutUs'>
        <h2><i><q>The  Better Way...</q></i></h2>
        <Typography variant="body1" color="text.primary" sx={{fontSize:"18px"}}>
            With KELHEL, we offer unmatchable products quality where we 
            attest the quality to ensure it's the right one for you. Building with us is a true investment 
            and the better way for our clients. Our services are top notch and are far much affordable. when you think construction
            your answer is KELHEL.
          </Typography>

      </section>

    </div>
  )
}

export default About