import React , {Component} from 'react';

import './Home.css';
import Cases from '../../components/Cases/Cases';
import Recovery from '../../components/Recovery/Recovery';

class Home extends Component{
    render(){
        return(
            <div className='home_container'>
                <div className='left_area'>
                    <div className='cases_container'>
                        <Cases />
                    </div>
                </div>
                <div className='right_area'>
                    <div className='recovery_container'>
                        <Recovery />
                    </div>
                </div>
            </div>
    
        );
    }
}

export default Home;