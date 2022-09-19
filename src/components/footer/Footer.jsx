import './Footer.scss'
import { useContext, useState } from 'react'
import DataContext from '../../context/DataContext'

const Footer = () => {

 const saludo = useContext(DataContext);
  const handleSaludo = () => {
    if(saludo.num === 3){
      saludo.setNum(0);
    }else{
      saludo.setNum(e=>e+1);
    }
  }

  return (
       <>
        <div className='footer' onClick={handleSaludo}>{`El saludo es ${saludo.saludo[saludo.num]}`}</div>
       </>
  )
}

export default Footer