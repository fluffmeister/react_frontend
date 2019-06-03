import React from 'react'
import { NavLink } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './NavBar.css'

const NavBar = ({currentUser}) =>
  <div>
    <h5>NAVBAR</h5>
    {/* <NavLink className='nav' to={routes.USERS} activeClassName="selected">USERS </NavLink> */}
    <NavLink className='nav' to={routes.CHARACTER} activeClassName="selected">SKILLS SEARCH</NavLink>
    <NavLink className='nav' to={routes.SEARCH} activeClassName="selected">ITEM SEARCH </NavLink>
    {/* {
      currentUser
        ? <span>hello {currentUser.username}</span>
        : [<NavLink key={1} to={routes.REGISTER} activeClassName="selected">REGISTER </NavLink>,
           <NavLink key={2} to={'/login'} activeClassName="selected">login </NavLink>]
        
    } */}
  </div>

export default NavBar