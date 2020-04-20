import React from 'react';

import './Case.css';
import '../../../assets/fonts.css';

const Case = props =>{
    return(
        <div className='case_container' >
            <div className='case_qty_wrap'>
                <div>
                    
                        <span className='case_heading'>{props.caseHeading}</span>
                    
                    <span className='icons'>
                        {
                            props.isCasesInc?
                            <img src={require('../../Images/up-down/Up.svg')} alt="up"/> :
                            <img src={require('../../Images/up-down/Down.svg')} alt="down"/> 
                        }
                    </span>
                </div>
                <span className='case_qty'>{props.caseQty}</span>
            </div>
            <div className='graph_wrap'>
                <img src={props.graphImg} alt="graph"/>                
            </div>
        </div>
    );
}

export default Case;