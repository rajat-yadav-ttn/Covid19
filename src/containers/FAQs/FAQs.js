import React  from 'react';
import QNAList from './QNAList';
import './FAQs.css';

const QAbox=props=>(
    <div className='QA_box'>
        <div className='ques'>
           Q{props.index}. {props.ques}
        </div>
        <div className='ans'>
            {props.answer}
        </div>
    </div>
)

const FAQs =()=>{
        return(
            <div className='faq_body'>
                <div className='faq_container'>
                    <div className='faq_heading'>Frequently Asked Questions</div>
                    {
                        QNAList.map((item,index)=>{
                            return <QAbox 
                                        key={index}
                                        index={index+1}
                                        ques={item.ques}
                                        answer={item.answer}
                                    />
                        })
                    }
                </div>
            </div>
        )
}

export default FAQs;