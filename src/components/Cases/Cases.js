import React , {Component} from 'react';

import Case from './Case/Case';
import './Cases.css';




class Cases extends Component{
    constructor(props){
        super(props);
        this.state={
        cases:[
        {
            caseHeading:'Total Cases',
            graphImg:require("../Images/Graph.svg"),
            caseQty:878679,
            increased:true,
        },
        {
            caseHeading:'Recovered',
            graphImg:require("../Images/Graph-3.svg"),
            caseQty:147359,
            increased:false,
        },
        {
            caseHeading:'Active Cases',
            graphImg:require("../Images/Graph-2.svg"),
            caseQty:731321,
            increased:true,
        },
        {
            caseHeading:'Total Death',
            graphImg:require("../Images/Graph-1.svg"),
            caseQty:47097,
            increased:false,
        }
    ],

    totalCases:0,
    }
}

    componentDidMount(){
        // this.getCases();
    }
  
    // async getCases(){
    //     await fetch('https://api.thevirustracker.com/free-api?global=stats')
    //     .then(res=>res.json()).then(res=>res.results.map(i=>{
    //        if(this.state.cases[0].caseHeading==='Total Cases'){
    //             this.state.cases[0].caseQty=i.total_cases;
    //             console.log(i.total_cases);
    //         }
            
    //     }
    //     ));
    // }
    // async getCases(){
    //     await fetch('https://api.thevirustracker.com/free-api?global=stats')
    //     .then(res=>res.json()).then(res=>res.results.map(i=>{
    //        if(this.state.cases[0].caseHeading==='Total Cases'){
    //             this.state.cases[0].caseQty=i.total_cases;
    //             console.log(i.total_cases);
    //         }
            
    //     }
    //     ));
    // }




    render(){
        return(
            <div className='cases_row'>
                
                {
                    this.state.cases.map((item,index)=>{
                            return(
                                <Case 
                                    key={index}
                                    graphImg={item.graphImg}
                                    caseHeading={item.caseHeading}
                                    caseQty={item.caseQty.toLocaleString()}
                                    increased={item.increased}
                                />
                                );
                       
                    })
                }
            </div>
        );
    }
}

export default Cases;