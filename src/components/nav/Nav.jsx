import React, { useState } from 'react'
import './Nav.scss'
import { Search,Notifications, ArrowDropDown } from '@mui/icons-material'
import net_logo from './img/net_logo.svg'
import prof_photo from './img/prof_photo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

const Nav = () => {

  const [moveScroll, setMoveScroll] = useState(false);
  const currentPage = useContext(DataContext);

  window.onscroll = ()=> {
    setMoveScroll(window.pageYOffset=== 0 ? false : true);
    return ()=> window.onscroll = false; //Clean up function otherwise it will continue runing creating a loop
  }

  
  const setPage = (clickPage)=> {
    currentPage.setCurrentPage(clickPage);
  }
  
  return (
    <nav className={moveScroll ? 'moveScroll' : null}>
        <div className='left'>
          <img src={net_logo} alt="Netflix"/>
          <ul>
            <NavLink to="/" onClick={()=>setPage("Homepage")}><li>Homepage</li></NavLink>
            <NavLink to="/" onClick={()=>setPage("Series")}><li>Series</li></NavLink>
            <NavLink to="/" onClick={()=>setPage("Movies")}><li>Movies</li></NavLink>
            <NavLink to="/" onClick={()=>setPage("NewAndPopular")}><li>New and Popular</li></NavLink>
            <NavLink to="/" onClick={()=>setPage("MyList")}><li>My List</li></NavLink>  
            <NavLink to="/"><li>{`This is current page: ${currentPage}`}</li></NavLink>
          </ul>  
        </div>
        <div className='right'>
          <Search className='right_item'/>
          <span className='right_item'>NAME</span>
          <Notifications className='right_item'/>
          <img className='right_item' src={prof_photo} alt="Profile"/>
          <div className='right_item drop_menu_act'>
            <ArrowDropDown />
            <div className='drop_menu'>
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav
