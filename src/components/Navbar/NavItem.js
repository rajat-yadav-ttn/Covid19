import React from 'react';

import {NavLink} from 'react-router-dom';

import './Navbar.css';

const NavItem=props=>{
    return(
        <li>
           <a href="/">{props.children}</a>
        </li>
    )
}

export default NavItem;