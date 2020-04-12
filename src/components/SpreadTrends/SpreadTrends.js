import React , {Component} from 'react';

import './SpreadTrends.css';

import {Line} from 'react-chartjs-2';

const cnfData = {
    labels: ['9 Feb', '16 Feb', '23 Feb','1 Mar'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: [100,900,2000,5000]
      }
    ]
  }

const recData = {
    labels: ['9 Feb', '16 Feb', '23 Feb',
             '1 March', '8 March' , '15 March' ,'21 March'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,255,0,1)',
        borderWidth: 2,
        data: [ 550123, 580123,610123, 620123, 680123 , 714196],
      }
    ]
  }



const Confirmed =props=>(
    <div>
        <Line
          data={cnfData}
          options={{
            title:{
              display:true,
              text:'Confirmed Cases',
              fontSize:20,
            },
            legend:{
              display:false,
            }
          }}
        />
    </div>
);

const Recovered=props=>(
    <div><Line
    data={recData}
    options={{
      title:{
        display:true,
        text:'Recovered Cases',
        fontSize:20
      },
      legend:{
        display:false,
      }
    }}
  /></div>
);

const Deceased=props=>(
    <div>
        <Line
        data={cnfData}
        options={{
        title:{
            display:true,
            text:'Deceased Cases',
            fontSize:20
        },
        legend:{
            display:false,
        }
    }}
  />
  </div>
)



class SpreadTrends extends Component{
    state={
        showCnf:true,
        showRec:false,
        showDec:false
    }
    
    
cnfHandler=(e)=>{
    e.preventDefault();
    this.setState({
        showCnf:true,
        showRec:false,
        showDec:false,
    });
}

recHandler=(e)=>{
    e.preventDefault();
    this.setState({
        showCnf:false,
        showRec:true,
        showDec:false,
    });
}

decHandler=(e)=>{
    e.preventDefault();
    this.setState({
        showCnf:false,
        showRec:false,
        showDec:true,
    });

}


    render(){
        let {showCnf,showRec,showDec}=this.state;
        const renderTab=()=>{
            
            if(showCnf){
                return <Confirmed />
            } else if(showRec){
                return <Recovered />
            }else if(showDec){
                return <Deceased />
            }
        }
        return(
            <div className='spread_trends_container'>
                <div className='heading_tab_row'>
                <h3>Spread Trends</h3>
            
                    {/* <div> */}
                    <ul className='tabs'>
                        <li className='tab_btn'>
                            <button
                                onClick={this.cnfHandler}
                                style={{backgroundColor:showCnf?'#52586A':'#F5F5F5',
                                        color:showCnf?'#FFFFFF':'#30313A'}}>Confirmed
                            </button>
                        </li>
        
                        <li className='tab_btn'>
                        <button 
                            onClick={this.recHandler}
                            style={{backgroundColor:showRec?'#52586A':'#F5F5F5',
                                    color:showRec?'#FFFFFF':'#30313A'}}>Recovered
                            </button>
                        </li>

                        <li className='tab_btn'>
                            <button 
                                onClick={this.decHandler}
                                style={{backgroundColor:showDec?'#52586A':'#F5F5F5',
                                    color:showDec?'#FFFFFF':'#30313A'}}>Deceased
                            </button>
                        </li>

                    </ul>
                {/* </div> */}
                </div>

               <div>
                    {renderTab()}        
               </div>
            </div>
        );
    }
}

export default SpreadTrends;