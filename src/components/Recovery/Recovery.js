import React from 'react';

import './Recovery.css';


const Recovery=(props)=>{
    return(
            <div className='container'>

                <div className='heading'> Ratio of Recovery</div>  
                <div className='percent_container'>
                    <img src={require('./img/PrecentageBg.svg')} alt="" className='percent_circle_img'/>
                    <div className='recovery_percent'>31.1%</div>
                </div>     
            </div>
        );
}

export default Recovery;