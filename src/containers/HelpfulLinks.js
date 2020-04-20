import React  from 'react';
import './FAQs/FAQs.css';

import {connect} from 'react-redux';


const URLBox=props=>(
    <div className='QA_box' style={{background:props.isDark?'#2e315d':'#fff'}}>
        <div className='ques' style={{color:props.isDark?'#ccccea':'#30313A'}}>
         {props.index}. {props.name}
        </div>
        <div className='ans'>
            <a href={props.url} style={{color:props.isDark?'#7e83c2':'#30313A'}}>{props.url}</a>
        </div>
    </div>
)


const urlList=[ 
    {
        name:'World Health Organization',
        url:' https://www.who.int/health-topics/coronavirus#tab=tab_1',
    },
    {
        name:'Centers for Disease Control and Prevention',
        url:' https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html',
    },
    {
        name:'MSD Manuals',
        url:'https://www.msdmanuals.com/home/infections/respiratory-viruses/coronaviruses-and-acute-respiratory-syndromes-covid-19,-mers,-and-sars',
    },
]

const HelpfulLinks =(props)=>{
        return(
            <div className='faq_body' style={{background:props.isDark?'#100a22':'#f7f7f7',height:'100vh'}}>
                <div className='faq_container'>
                    <div className='faq_heading' style={{color:props.isDark?'#ccccea':'#30313A'}}>Helpful Links</div>
                    {
                        urlList.map((item,index)=>{
                            return <URLBox 
                                        key={index}
                                        index={index+1}
                                        name={item.name}
                                        url={item.url}
                                        isDark={props.isDark}
                                    />
                        })
                    }
                </div>
            </div>
        );
}

const mapStateToProps=state=>{
    return{
        isDark:state.isDark,        
    }
}

export default connect(mapStateToProps)(HelpfulLinks);