import React  from 'react';
import QNAList from './QNAList';
import './FAQs.css';

import {connect} from 'react-redux';

const QAbox=props=>(
    <div className='QA_box'  style={{background:props.isDark?'#2e315d':'#fff'}}>
        <div className='ques'  style={{color:props.isDark?'#ccccea':'#30313A'}}>
           Q{props.index}. {props.ques}
        </div>
        <div className='ans'  style={{color:props.isDark?'#7e83c2':'#30313A'}}>
            {props.answer}
        </div>
    </div>
)

const FAQs =(props)=>{
        return(
            <div className='faq_body' style={{background:props.isDark?'#100a22':'#f7f7f7',paddingBottom:'20px'}}>
                <div className='faq_container'>
                    <div className='faq_heading'  style={{color:props.isDark?'#ccccea':'#30313A'}}>Frequently Asked Questions</div>
                    {
                        QNAList.map((item,index)=>{
                            return <QAbox 
                                        key={index}
                                        index={index+1}
                                        ques={item.ques}
                                        answer={item.answer}
                                        isDark={props.isDark}
                                    />
                        })
                    }
                </div>
                </div>
        )
}


const mapStateToProps=state=>{
    return{
        isDark:state.isDark,        
    }
}


export default connect(mapStateToProps)(FAQs);