import React, { useEffect, useState } from 'react'
import './Prueba.scss'

const Prueba = () => {
  const API_KEY = "db1e7d01beeb6014463a48079046b84f";
    const URL_IMAGES = "https://image.tmdb.org/t/p/w200";
    // const [title, setTitle] = useState(null);
    const [genre, setGenre] = useState(null);
    useEffect(()=>{
      // https://api.themoviedb.org/3/movie/550?api_key=
      // https://api.themoviedb.org/3/genre/movie/list?api_key=
      
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+API_KEY)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data.genres);
                            // const url_image = URL_IMAGES + data.poster_path;
                            // setTitle(url_image);
                            
                            setGenre()
                        });
    })
    
       

  return (
    <>
      {/* <div className='prueba'>
          <img src={title} alt="" />
      </div> */}
      <p>{genre}</p>
    </>
    
  )
}

export default Prueba
