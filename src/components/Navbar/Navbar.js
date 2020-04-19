import React, { Component } from 'react';

import './Navbar.css';
import { NavLink } from 'react-router-dom';
import '../../assets/fonts.css';
// import { connect } from 'react-redux';

import Drawer from './Drawer';


class Navbar extends Component{

    state={
        showDrawer:false,
    }

    drawerOpen=()=>{
        this.setState({showDrawer:true})
    }

    drawerClose=()=>{
        this.setState({showDrawer:false})
    }

    render(){
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
    
                    <button className='menu_btn' onClick={this.drawerOpen}>
                        <div></div>    
                        <div></div>    
                        <div></div>    
                    </button>   
    
                </div>
                <Drawer showDrawer={this.state.showDrawer} 
                        drawerClose={this.drawerClose}
                        />
            </nav>
        );
    }

}


export default Navbar;