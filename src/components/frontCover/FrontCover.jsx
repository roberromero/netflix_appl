import React, {useState, useEffect} from 'react'
import './FrontCover.scss';
import { PlayArrow, Info } from '@mui/icons-material'
import DropDownMenu from '../dropDownMenu/DropDownMenu';
import axios from 'axios';
const FrontCover = () => {

     //Generates a random number between 1 - 20 to change frontCover randomly
     const randomNumber = ()=> {
      return Math.floor((Math.random() * (20 - 0 + 1)) + 0);
    }

    const API_KEY = "db1e7d01beeb6014463a48079046b84f";
    const BASE_URL = "https://api.themoviedb.org/3";
    const API_URL = BASE_URL+`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const BASE_IMG = "https://image.tmdb.org/t/p/original";
  const [coverInfo, setCoverInfo] = useState(null);
      useEffect(()=>{
        axios.get(`${API_URL}`)
        .then(response=>{
          setCoverInfo(response.data.results[randomNumber()]);
        })
      
      }, [])

   
    
    return(
      <>
        {
          coverInfo ? 
          
      <div className='frontCover' style={{backgroundImage:`url(${BASE_IMG}${coverInfo.backdrop_path})`}} >
        <DropDownMenu />
        <div className='wrapper'>
          <span className='frontCover_title' alt="title">{coverInfo.title}</span>
          <span className='frontCover_elem'>{coverInfo.overview}</span>
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
          
          : <div>Loading</div>
            
        }
      </>
      
    );
    
  
  
  
    
    
}

export default FrontCover


