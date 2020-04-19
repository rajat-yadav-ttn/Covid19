import React , {Component} from 'react';

import Case from './Case/Case';
import './Cases.css';

import {connect} from 'react-redux';

import * as actions from '../../store/actions';



class Cases extends Component{

    componentDidMount(){
        this.props.fetchCases();
    }

    // componentWillUnmount(){
    //     clearTimeout(this.intervalID);
    // }


        // getCases(){
        //     console.log('refresh');
        //     this.intervalID = setTimeout(this.getCases.bind(this),900000);
        // }
        




    render(){

        return(
            <div className='cases_row'>
                
                {
                    this.props.isLoading?
                    <div style={{
                        textAlign:'center',
                        fontWeight:600,
                        fontSize:22,
                        color:'#5f6769',
                        padding:'35px 0px',
                        position:'relative',
                        left:'50%',
                    }}>Loading</div> :

                    this.props.cases.map((item,index)=>{
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

const mapStateToProps=state=>{
    return{
        cases:state.cases,
        isLoading:state.isCasesLoading,
    }
}




const mapDispatchToProps=dispatch=>{
    return{
        fetchCases:()=>{ dispatch(actions.fetchCases()) },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cases);