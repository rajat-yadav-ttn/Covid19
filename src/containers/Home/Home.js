import React , {Component} from 'react';

import './Home.css';
import Cases from '../../components/Cases/Cases';
import Recovery from '../../components/Recovery/Recovery';
import CountryList from '../../components/CountryList/CountryList';
import Map from '../../components/Map/Map';
import LatestTweets from '../../components/LatestTweets/LatestTweets';


class Home extends Component{
    render(){
        return(
            <div className='home_container'>
                <div className='left_area'>
                    <div className='cases_container'>
                        <Cases />
                    </div>
                    
                    <div className='country_map_row'>
                        <div className='CountryList_container'>
                            <CountryList />
                        </div>
                        <div className='Map_container'>
                            <Map />
                        </div>
                    </div>

                </div>
                <div className='right_area'>
                    <div className='recovery_container'>
                        <Recovery />
                    </div>
                    <div className='latest_tweet'>
                        <LatestTweets />
                    </div>
                </div>
            </div>
    
        );
    }
}

export default Home;