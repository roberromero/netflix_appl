import React from 'react'
import '../verticalSlider/VerticalSlider.scss'
import { PlayArrow, Add, ThumbUp, ThumbDown } from '@mui/icons-material'
import {  useState } from 'react'
import batman from '../verticalSlider/img/batman.jpg'

const Card = () => {

 //FUNCTIONS TO CONTROL VIDEOS ON AND OFF WHEN MOUSE ENTERS AND LEAVES
 const [mouseOnVideo, setMouseOnVideo] = useState(false);

 const handleOnMouseEnter = ()=> {
   setMouseOnVideo(true);
 }
 const handleOnMouseLeave= ()=> {
   setMouseOnVideo(false);
 }


  return (

<div className='movie' onMouseLeave={handleOnMouseLeave}>
    <div className='media_wrapper'>
      <img src={batman} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
    </div>
    <div className='showDetails'>
      <div className='icons_wrapper pad_top'>
        <PlayArrow className='icons'/>
        <Add className='icons'/>
        <ThumbUp className='icons'/>
        <ThumbDown className='icons'/>
      </div>
      <div className='specif_wrapper pad_top'>
        <span>DURACION</span>
        <span>+18 o -18</span>
        <span>RELEASE</span>
      </div>
      <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
        eius nobis ullam eveniet numquam accusantium 
        suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
        laborum culpa? Nemo, quisquam!
      </h3>
      <span className=' genre pad_top'>TITULO</span>
    </div>
  </div>
  )
}

export default Card

