import React  from 'react';
import './FAQs/FAQs.css';

const URLBox=props=>(
    <div className='QA_box'>
        <div className='ques'>
         {props.index}. {props.name}
        </div>
        <div className='ans'>
            <a href={props.url}>{props.url}</a>
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

const HelpfulLinks =()=>{
        return(
            <div className='faq_body'>
                <div className='faq_container'>
                    <div className='faq_heading'>Helpful Links</div>
                    {
                        urlList.map((item,index)=>{
                            return <URLBox 
                                        key={index}
                                        index={index+1}
                                        name={item.name}
                                        url={item.url}
                                    />
                        })
                    }
                </div>
            </div>
        )
}

export default HelpfulLinks;