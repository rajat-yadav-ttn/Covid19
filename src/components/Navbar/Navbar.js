import React from 'react';

import './Navbar.css';
// import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import '../../assets/fonts.css';

const Navbar = props =>{
    return(
        <nav>
            <div className='logo'>
                <img src={require('../Images/nav/virus.svg')} 
                     alt="logo" 
                     className="logo_img"
                />
                <div className="logo_txt">COVID'19</div>
            </div>

            <div className='list_wrap'>
                <ul className='nav_opts_list'>
                    <li> 
                        <NavLink 
                            to='/' 
                            className='nav_link_item'
                            activeClassName='active'
                            exact
                            >HOME</NavLink>
                    </li>
                    <li> 
                        <NavLink 
                            className='nav_link_item'
                            activeClassName='active'
                            to='/faqs'>FAQs</NavLink>
                    </li>
                    <li> 
                        <NavLink 
                            className='nav_link_item'
                            activeClassName='active'
                            to='/helpful-links'>HELPFUL LINKS</NavLink>
                    </li>
                </ul>
            </div>
            
            
        </nav>
    );
}

export default Navbar;