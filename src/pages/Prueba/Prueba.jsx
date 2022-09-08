
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Prueba.scss'


const Prueba = () => {
  const API_KEY = "db1e7d01beeb6014463a48079046b84f";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL+`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`;
  const BASE_IMG = "https://image.tmdb.org/t/p/w500/";
  
    const [movies, setMovies] = useState(null);
    useEffect(()=>{
      axios.get(`${API_URL}28`)
      .then(response=>{
        setMovies(response.data.results);
        console.log(response.data.results);
      })
    
    }, [])

    return (
      movies
    )

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
