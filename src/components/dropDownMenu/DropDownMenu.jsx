import React from 'react'
import './DropDownMenu.scss'


const DropDownMenu = () => {
  return (
    <div className= 'dropDownMenu'>
      <span>Movies</span>
      <select name="category" id="category">
        <option>Genre</option>
        <option value="drama">Drama</option>
        <option value="horror">Horror</option>
        <option value="thriller">Thriller</option>
        <option value="comedy">Comedy</option>
        <option value="adventure">Adventure</option>
        <option value="action">Action</option>
        <option value="mistery">Mistery</option>
      </select>
    </div>
  )
}

export default DropDownMenu
