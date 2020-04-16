import React, { Component } from 'react';

import './LatestTweets.css';

class LatestTweets extends Component{
    state={

    }


    componentDidMount(){
        let apiUrl='https://api.twitter.com/labs/2/tweets/search?query=covid-19&tweet.fields=created_at,author_id,lang,context_annotations&max_results=100'
        const proxyUrl='https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl+apiUrl,{
            method:'GET',
            // mode:'no-cors',
            headers:{
                    'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAI95DgEAAAAAV7KQhUhikghHI9Nr45Jhm%2BZQx6M%3DAZChWMQdQoAOYftiB7hAA0VcERqHvGgmwz5EsGoSAubG4hNn9W'
                    }
        })
            .then(res=>res.json())
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