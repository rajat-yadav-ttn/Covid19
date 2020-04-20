import React, { Component } from 'react';

import './Navbar.css';
import { NavLink } from 'react-router-dom';
import '../../assets/fonts.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

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
        console.log(this.props.isDark)
        const {isDark}=this.props;
        return(
            <nav style={{background:isDark?'#1f2244':'#fff'}}>
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
                                style={{color:this.props.isDark?'#ccccea':'#52586A'}}
                                className='nav_link_item'
                                activeClassName='active'
                                exact
                                >HOME</NavLink>
                        </li>
                        <li> 
                            <NavLink 
                                style={{color:this.props.isDark?'#ccccea':'#52586A'}}
                                className='nav_link_item'
                                activeClassName='active'
                                to='/faqs'>FAQs</NavLink>
                        </li>
                        <li> 
                            <NavLink 
                                className='nav_link_item'
                                style={{color:this.props.isDark?'#ccccea':'#52586A'}}
                                activeClassName='active'
                                to='/helpful-links'>HELPFUL LINKS</NavLink>
                        </li>
                    </ul>
    
                    <button className='menu_btn' onClick={this.drawerOpen}>
                        <div></div>    
                        <div></div>    
                        <div></div>    
                    </button>   

                <button
                    className='darkMode_btn' 
                    onClick={()=>this.props.darkMode(this.props.isDark===false?true:false)}>
                    {this.props.isDark? <img src={require('./icons/sun.png')} alt='light'/>:
                                        <img src={require('./icons/moon.png')} alt='dark'/>
                            }
                </button>
                   
    
                </div>
                <Drawer showDrawer={this.state.showDrawer} 
                        drawerClose={this.drawerClose}
                        isDark={this.props.isDark}
                        />
            </nav>
        );
    }

}

const mapStateToProps=state=>{
    return{
        isDark:state.isDark,        
    }
}




const mapDispatchToProps=dispatch=>{
    return{
        darkMode:(val)=>{dispatch(actions.darkMode(val))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);