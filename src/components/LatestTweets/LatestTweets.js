import React, { Component } from 'react';

import './LatestTweets.css';

class LatestTweets extends Component{
    state={

    }


    componentDidMount(){
        fetch('/1.1/search/tweets.json?q=#starwars&result_type=popular')
            // .then(res=>res.json())
            .then(res=>console.log(res));
    }

    render(){

        return(
            <div className='latest_tweets_container'>
                <h3>Latest Tweets</h3>

                <div className='tweet'>
                    <div className='dp_name_container'>
                        <div>
                            {/* <img src={require('./')} */}
                        </div>
                        <div>
                            <h4>World Health Organization</h4>
                            <span className='twitter_handle'>@WHO</span>

                        </div>
                    </div>

                    <div className='tweet_content'>
                        We are the #UnitedNations’ health agency. We are committed to 
                        achieving better health for 
                        everyone, everywhere - #HealthForAll
                    </div>
                </div>
            </div>
        );
    }
}

export default LatestTweets;