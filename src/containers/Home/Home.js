import React , {Component} from 'react';

import './Home.css';
import Cases from '../../components/Cases/Cases';
import Recovery from '../../components/Recovery/Recovery';
import CountryList from '../../components/CountryList/CountryList';
// import MapDisplay from '../../components/Map/Map';
import Map2 from '../../components/Map/Map2';
import LatestTweets from '../../components/LatestTweets/LatestTweets';
import SpreadTrends from '../../components/SpreadTrends/SpreadTrends';
import News from '../../components/News/News';



class Home extends Component{
    state = {
        data: [
          ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
          ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
          ["PE", 67]],
      }
    render(){
        return(
            <div className='home_container'>
                <div className='left_area'>
                    <div className='cases_container'>
                        <Cases />
                    </div>
                    
                    <div className='row'>
                        <div className='CountryList_container'>
                            <CountryList />
                        </div>
                        <div className='Map_container'>
                            <Map2 data={this.state.data}/>
                        </div>
                    </div>

                    <div className='row margin_top_20'>
                        <div className='SpreadTrends_container'>
                                <SpreadTrends />
                        </div>
                        <div className='News_container'>
                                <News />
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