import React from 'react'
import './VerticalSlider.scss'
import batman from './img/batman.jpg'
import superman from './img/superman.jpg'
import spiderman from './img/spiderman.jpg'
import { ArrowBackIosNew, ArrowForwardIos, PlayArrow, Add, ThumbUp, ThumbDown } from '@mui/icons-material'
import { useRef, useState } from 'react'
import trailer from './videos/vid.mp4'


const VerticalSlider = () => {

    const movies = [batman, superman, spiderman];
    

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
            //a
          }
       
    }
  
    
    //FUNCTIONS TO CONTROL VIDEOS ON AND OFF WHEN MOUSE ENTERS AND LEAVES
    const [mouseOnVideo, setMouseOnVideo] = useState(false);

    const handleOnMouseEnter = ()=> {
      setMouseOnVideo(true);
    }
    const handleOnMouseLeave= ()=> {
      setMouseOnVideo(false);
    }
  
  return (
    <div className='verticalSlider'>
        <p>Continue to watch</p>
        <ArrowBackIosNew className='movieButton movieButton_left' onClick={()=>handleClick("left")} ref={buttonArrLeft}/>
        <div className='moviesWrapper' ref={container} >
          <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted> 
                  <source src={trailer} type='video/mp4' />
                </video>
                }
                <img src={movies[0]} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted> 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[1]} alt='movie2' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted> 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[2]} alt='movie3' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[0]} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[1]} alt='movie2' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[2]} alt='movie3' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[0]} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[1]} alt='movie2' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[2]} alt='movie3' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
            <div className='movie' onMouseLeave={handleOnMouseLeave}>
              <div className='media_wrapper'>
                { mouseOnVideo &&
                 <video autoPlay loop muted > 
                  <source src={trailer}  type='video/mp4' />
                </video>
                }
                <img src={movies[0]} alt='movie1' onMouseEnter={handleOnMouseEnter}/>
              </div>
              <div className='showDetails'>
                <div className='icons_wrapper pad_top'>
                  <PlayArrow className='icons'/>
                  <Add className='icons'/>
                  <ThumbUp className='icons'/>
                  <ThumbDown className='icons'/>
                </div>
                <div className='specif_wrapper pad_top'>
                  <span>1h 15min</span>
                  <span>+14</span>
                  <span>2003</span>
                </div>
                <h3 className='pad_top'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptas maxime,
                  eius nobis ullam eveniet numquam accusantium 
                  suscipit magni earum laboriosam temporibus ipsa id fugiat assumenda 
                  laborum culpa? Nemo, quisquam!
                </h3>
                <span className=' genre pad_top'>Genre</span>
              </div>
            </div>
        </div>
        <ArrowForwardIos className='movieButton movieButton_right' onClick={()=>handleClick("right")} ref={buttonArrRight}/>
    </div>
  )
}

export default VerticalSlider
