import React, { useEffect, useState } from 'react'
import './Prueba.scss'

const Prueba = () => {
    const API_KEY = "secret";
    const URL_IMAGES = "https://image.tmdb.org/t/p/w200";
    const [title, setTitle] = useState(null);
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/550?api_key='+API_KEY)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data.poster_path);
                            const url = URL_IMAGES + data.poster_path;
                            setTitle(url);
                        });
    })
    
       

  return (
    <div className='prueba'>
        <img src={title} alt="" />
        
    </div>
  )
}

export default Prueba
