import React from 'react'
import './FrontCover.scss';
import { PlayArrow, Info } from '@mui/icons-material'
import Hulk_title2 from './img/Hulk_title2.png'
import DropDownMenu from '../dropDownMenu/DropDownMenu';
const FrontCover = () => {
  return (
    <div className='frontCover'>
      <DropDownMenu />
      <div className='wrapper'>
      <img className='frontCover_elem' src={Hulk_title2} alt="title" />
      <span className='frontCover_elem'>Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Ipsum possimus repellendus deleniti maiores 
        recusandae sapiente corrupti provident perferendis 
        exercitationem, excepturi necessitatibus consequuntur? 
        Ipsum repellat laborum vel nostrum perferendis nulla placeat.
      </span>
      <div className='frontCover_elem button_wrapper'>
        <button>
            <PlayArrow />
            <span>Play</span>          
        </button>
        <button>
            <Info />
            <span>Info</span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default FrontCover
