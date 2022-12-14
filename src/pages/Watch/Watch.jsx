import React from 'react'
import './Watch.scss'
import trailer from '../../videos/vid.mp4'
import { ArrowBack } from '@mui/icons-material'

const Watch = () => {
    
  return (
    <div className='watch'>
      <div className="home">
        <ArrowBack />
        <span>Home</span>
      </div>
      <video autoPlay={true} controls muted> 
        <source src={trailer}  type='video/mp4' />
      </video>
    </div>
  )
}

export default Watch
