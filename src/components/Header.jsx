import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
   return (
      <div className='navbar navbar-dark navbar-expand-lg bg-primary'>
         <div className='navbar-brand'>
            <p>Note APP</p>
         </div>
         
            
         <ul className='navbar-nav'>
            <li className='nav-item'><NavLink className='nav-link' exact to='/note_app'> <p>HOME</p> </NavLink></li>
            <li className='nav-item'><NavLink className='nav-link' exact to='/about'> <p>ABOUT</p> </NavLink></li>
         </ul>
      </div>
   )
}