import React from 'react'
import './VerticalSlider.scss'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useRef, useState, useEffect } from 'react'
import Card from '../card/Card'
import axios from 'axios'
import { useContext } from 'react'///////////////////////////////////////////////////////////////////
import DataContext from '../../context/DataContext'//////////////////////////////////////////////////

const VerticalSlider = ({genreName}) => {

    const API_KEY = "db1e7d01beeb6014463a48079046b84f";
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL = BASE_URL+`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
    const BASE_IMG = "https://image.tmdb.org/t/p/w500/";
  
      const [movies, setMovies] = useState(null);
      useEffect(()=>{
        axios.get(`${API_URL}${idGenre}`)
        .then(response=>{
          setMovies(response.data.results);
          console.log(response.data.results);
        })
      
      }, [])

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
            positionX = positionX + 182;
            setContador(contador - 1);
            displayNone(buttonArrLeft);
            cursorNone();
            movePos();
          }
          if ( direc === "right" && contador < 10 ) {
            positionX = positionX - 192;
            setContador(contador + 1);
            displayNone(buttonArrRight);
            cursorNone();
            movePos();
            
          }
       
    }
    //Function to get ID from the name
    const getGenreId = (name) => {
      const genres= [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
      {"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},
      {"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},
      {"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
      {"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];
      let id = 0;
      genres.forEach(pos=>{
        if(name===pos.name){
          id = pos.id;
        }
      })
      return id;
    }
    const idGenre = getGenreId(genreName);
    
   

    const saludo = useContext(DataContext);//////////////////////////////////////////////////////////

  return (
    <div className='verticalSlider'>
      
        <p>{genreName}</p>
        
        <ArrowBackIosNew className='movieButton movieButton_left' onClick={()=>handleClick("left")} ref={buttonArrLeft}/>
        <div className='moviesWrapper' ref={container} >
      
      {
          movies ? movies.map(pos=>{
          return(
            <Card
              key={pos.id} 
              idKey= {pos.id}
              poster= {`${BASE_IMG}${pos.poster_path}`} 
              rate = {pos.vote_average}
              recomendAge = {pos.adult}
              release= {pos.release_date}
              overview = {pos.overview}
              title = {pos.title}
            />
          );
        }) : 
        <div>Loading data</div>
    }
        </div>
        <ArrowForwardIos className='movieButton movieButton_right' onClick={()=>handleClick("right")} ref={buttonArrRight}/>
    </div>
  )
}

export default VerticalSlider
