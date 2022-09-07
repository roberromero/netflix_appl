import React from 'react'
import './VerticalSlider.scss'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useRef, useState } from 'react'
import Card from '../card/Card'



const VerticalSlider = (genreId) => {

    console.log(genreId);

    const container = useRef();
    const [contador, setContador] = useState(0);
    const buttonArrLeft = useRef(); 
    const buttonArrRight = useRef(); 
    //Function that manages SLIDER
    const handleClick = (direc) => {

          const displayNone = (elem)=> {
            elem.current.style.display = "none";
            setTimeout(()=>elem.current.style.display = "block", 1000);
          }
          //POINTER DESACTIVATES TO NOT SHOW MOVIE INFO WHILE SLIDER IS MOVING
          const cursorNone = () => {
            container.current.style.pointerEvents = "none";
            setTimeout(()=>container.current.style.pointerEvents = "revert", 1000);
            
          }
          //SLIDER TRANSLATES ON X
          const movePos = ()=> container.current.style.transform= `translateX(${positionX}px)`;
          let positionX = container.current.getBoundingClientRect().x;

          if( direc === "left" && contador > 0 ){
            positionX = positionX + 265;
            setContador(contador - 1);
            displayNone(buttonArrLeft);
            cursorNone();
            movePos();
          }
          if ( direc === "right" && contador < 6 ) {
            positionX = positionX - 275;
            setContador(contador + 1);
            displayNone(buttonArrRight);
            cursorNone();
            movePos();
            
          }
       
    }
  
    
   
  
  return (
    <div className='verticalSlider'>
        <p>Continue to watch</p>
        <ArrowBackIosNew className='movieButton movieButton_left' onClick={()=>handleClick("left")} ref={buttonArrLeft}/>
        <div className='moviesWrapper' ref={container} >

          <Card />
         
          
        </div>
        <ArrowForwardIos className='movieButton movieButton_right' onClick={()=>handleClick("right")} ref={buttonArrRight}/>
    </div>
  )
}

export default VerticalSlider
