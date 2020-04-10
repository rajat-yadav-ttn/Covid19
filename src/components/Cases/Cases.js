import React , {Component} from 'react';

import Case from './Case/Case';
import './Cases.css';




class Cases extends Component{
    constructor(props){
        super(props);
        this.state={
        cases:[],
        isLoading:true,
    }
}

    componentDidMount(){
        this.getCases();
    }
  
    async getCases(){
        await fetch('https://api.thevirustracker.com/free-api?global=stats')
            .then(res=>res.json())
            .then(res=>res.results[0])
            .then(res=>this.setState({
                cases:[
                    {
                        caseHeading:'Total Cases',
                        graphImg:require("../Images/Graph.svg"),
                        caseQty:res.total_cases,
                        increased:true,
                    },
                    {
                        caseHeading:'Recovered',
                        graphImg:require("../Images/Graph-3.svg"),
                        caseQty:res.total_recovered,
                        increased:false,
                    },
                    {
                        caseHeading:'Active Cases',
                        graphImg:require("../Images/Graph-2.svg"),
                        caseQty:res.total_active_cases,
                        increased:true,
                    },
                    {
                        caseHeading:'Total Death',
                        graphImg:require("../Images/Graph-1.svg"),
                        caseQty:res.total_deaths,
                        increased:false,
                    }
                ],
                isLoading:false,
            }));
    
    }


    render(){
        return(
            <div className='cases_row'>
                
                {
                    this.state.isLoading?
                    <div style={{
                        textAlign:'center',
                        fontWeight:600,
                        fontSize:22,
                        color:'#5f6769',
                        padding:'35px 0px',
                        position:'relative',
                        left:'50%',
                    }}>Loading</div> :
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