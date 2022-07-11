import React from 'react'
import SliderContent from './SliderContent'

const Slider = () => {
  return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}/>
    </div>
  )
}

export default Slider