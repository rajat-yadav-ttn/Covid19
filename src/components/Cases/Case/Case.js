import React from 'react';

import './Case.css';
import '../../../assets/fonts.css';

const Case = props =>{
    return(
        <div className='case_container' style={{background:props.isDark?'#2e315d':'#fff'}}>
            <div className='case_qty_wrap'>
                <div>
                    
                        <span className='case_heading' 
                                style={{color:props.isDark?'#7e83c2':'#52586A'}}
                            >{props.caseHeading}</span>
                    
                    <span className='icons'>
                        { 
                            props.isCasesInc?
                            <img src={require('../../Images/up-down/Up.svg')} alt="up"/> :
                            <img src={require('../../Images/up-down/Down.svg')} alt="down"/> 
                        }
                    </span>
                </div>
                <span className='case_qty' style={{color:props.isDark?'#ccccea':'#30313A'}}>{props.caseQty}</span>
            </div>
            <div className='graph_wrap'>
                <img src={props.graphImg} alt="graph"/>                
            </div>
        </div>
    );
}

export default Case;