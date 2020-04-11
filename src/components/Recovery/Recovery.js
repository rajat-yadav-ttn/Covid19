import React , {Component} from 'react';

import './Recovery.css';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';



class Recovery extends Component{
    
    componentDidMount(){
        this.props.fetchCases();
    }
    
    render(){
        let percentage=(this.props.recovered/this.props.affected)*100
        return(
            <div className='container'>

            <div className='heading'> Ratio of Recovery</div>  
            <div className='percent_container'>
                <img src={require('./img/PrecentageBg.svg')} alt="" className='percent_circle_img'/>
                <div className='recovery_percent'>{percentage.toFixed(1)}%</div>
            </div>   

            <div className='svg_circle'>
            
            </div>
            <div className='aff_rec_data'> 
                <div>
                {
                    this.props.affected.toString()>3?
                    `${this.props.affected/1000}k` : this.props.affected
                } Affected
                </div>
                   
                <div>
                    
                    {
                        this.props.recovered.toString()>3?
                        `${this.props.recovered/1000}k` : this.props.recovered
                    } Recovered
                </div>
                
            </div>  
        </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        affected:state.affected,
        recovered:state.recovered,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchCases:()=>{ dispatch(actions.fetchCases()) }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Recovery);