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
            caseQty:878679
        },
        {
            caseHeading:'Recovered',
            graphImg:require("../Images/Graph-3.svg"),
            caseQty:147359
        },
        {
            caseHeading:'Active Cases',
            graphImg:require("../Images/Graph-2.svg"),
            caseQty:731321
        },
        {
            caseHeading:'Total Death',
            graphImg:require("../Images/Graph-1.svg"),
            caseQty:47097
        }
    ],

    apicases:[],
  
    }
}

    componentDidMount(){
        fetch('https://api.thevirustracker.com/free-api?global=stats').then(response=>response.json())
                .then(response=>{
                        console.log(response.results);
                });
    }

  

    render(){

    console.log(this.state.apicases)
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
                        />
                        );
                    })
                }
            </div>
        );
    }
}

export default Cases;