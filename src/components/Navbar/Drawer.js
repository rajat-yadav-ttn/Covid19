import React  from 'react';
import { NavLink } from 'react-router-dom';

import './Drawer.css';

const Drawer =(props)=>{
        return(
            <div className='drawer' style={{display:props.showDrawer?'block':'none'}}>
                <ul className='drawer_list'>
    
                    <button className='close_btn' onClick={props.drawerClose}>
                        X
                    </button>
                        <li> 
                            <NavLink 
                                to='/' 
                                className='nav_link_item_d'
                                activeClassName='active'
                                exact
                                >HOME</NavLink>
                        </li>
                        <li> 
                            <NavLink 
                                className='nav_link_item_d'
                                activeClassName='active'
                                to='/faqs'>FAQs</NavLink>
                        </li>
                        <li> 
                            <NavLink 
                                className='nav_link_item_d'
                                activeClassName='active'
                                to='/helpful-links'>HELPFUL LINKS</NavLink>
                        </li>
                    </ul>
            </div>
        );
}

export default Drawer;