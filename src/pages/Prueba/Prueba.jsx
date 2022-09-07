import { AltRoute } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Prueba.scss'


const Prueba = () => {
  const API_KEY = "db1e7d01beeb6014463a48079046b84f";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL+`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
  const BASE_IMG = "https://image.tmdb.org/t/p/w500/";
  const genres= [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
  {"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},
  {"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},
  {"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
  {"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

  
  //This function returns the << IDs >> of the genre names that are passed as parameters 
  const showGenres = (name1, name2, name3) =>{
    const genresToShow = [name1,name2,name3];
    const chosenGenres = [];
    genres.forEach(pos=>{
      genresToShow.forEach(gen=>{
        if(pos.name === gen){
          chosenGenres.push(pos.id); 
        }
      })
   
  })
  return chosenGenres;
  }
  // showGenres('Comedy', 'Action', 'Documentary');

    const [movies, setMovies] = useState(null);
    useEffect(()=>{
      axios.get(`${API_URL}28`)
      .then(response=>{
        setMovies(response.data.results);
        console.log(response.data.results);
      })
    
    }, [])


  
    


  return (
    <>
     {movies ? 
        movies.map(pos=>{
            return(
            <div key={pos.id}>
              <img src={`${BASE_IMG}${pos.poster_path}`} />
              <p>DURACIÓN</p>
              <p>MAS DE 18 TRUE OR FALSE</p>
              <p>{pos.release_date}</p>
              <p>{pos.overview}</p>
              <p>{pos.title} EN LUGAR DE EL GéNERO</p>
            </div>
            );
          }) : 
          <p>Loading data</p>}
    </>
    
  )
}

export default Prueba
