import React from 'react';

import './Case.css';
import '../../../assets/fonts.css';

const Case = props =>{
    return(
        <div className='case_container' >
            <div className='case_qty_wrap'>
                <span className='case_heading'>{props.caseHeading}</span>
                <span className='case_qty'>{props.caseQty}</span>
            </div>
            <div className='graph_wrap'>
                <img src={props.graphImg} alt="graph"/>                
            </div>
        </div>
    );
}

export default Case;