import React from 'react'
import '../verticalSlider/VerticalSlider.scss'
import { PlayArrow, Add, ThumbUp, ThumbDown } from '@mui/icons-material'
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import {  useState } from 'react'


const Card = ({idKey, poster, rate, recomendAge, release, overview, title }) => {

  //To show only the year of release
  let releaseSlice = release.slice(0,4);

 //FUNCTIONS TO CONTROL VIDEOS ON AND OFF WHEN MOUSE ENTERS AND LEAVES
 const [mouseOnVideo, setMouseOnVideo] = useState(false);

 const handleOnMouseEnter = ()=> {
   setMouseOnVideo(true);
 }
 const handleOnMouseLeave= ()=> {
   setMouseOnVideo(false);
 }
 
  return (
        <div className='movie' onMouseLeave={handleOnMouseLeave} key={idKey}>
          <div className='movie_h'>
          <div className='media_wrapper'>
            <img src={poster} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
          </div>
          <div className='showDetails'>
            <div className='icons_wrapper pad_top'>
              <PlayArrow className='icons'/>
              <Add className='icons'/>
              <ThumbUp className='icons'/>
              <ThumbDown className='icons'/>
            </div>
            <div className='specif_wrapper pad_top'>
              <StarRateSharpIcon className='icons'/>
              <span className='rate'>{rate}</span>
              <span className='squared'> { recomendAge ? " +18 " : " under 18 " }</span>
              <span>{releaseSlice}</span>
            </div>
            <h3 className='pad_top'>{overview}</h3>
            <span className=' genre pad_top'>{title}</span>
          </div>
          </div>
        </div>
        );
          
}

export default Card

