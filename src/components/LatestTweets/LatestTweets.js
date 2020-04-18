import React, { Component } from 'react';

import './LatestTweets.css';
import TweetDisplay from './TweetDisplay';

class LatestTweets extends Component{
    state={
        tweets:null,
        isTweetsLoading:true,
    }


    componentDidMount(){
        // let userInfo={};
        // let apiUrl='https://api.twitter.com/labs/2/tweets/search?query=covid-19&tweet.fields=created_at,author_id,lang,context_annotations&max_results=100'
        let apiUrl='https://api.twitter.com/1.1/tweets/search/30day/prod.json?query=from:WHO'
        const proxyUrl='https://cors-anywhere.herokuapp.com/'
        fetch(proxyUrl+apiUrl,{
            method:'GET',
            headers:{
                    'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAI95DgEAAAAAV7KQhUhikghHI9Nr45Jhm%2BZQx6M%3DAZChWMQdQoAOYftiB7hAA0VcERqHvGgmwz5EsGoSAubG4hNn9W'
                    }
        })
            .then(res=>res.json())
            .then(res=>{
                this.setState({tweets:res.results.slice(0,5),isTweetsLoading:false});
                console.log(this.state.tweets);
            });

            
    }



    render(){

        return(
            <div className='latest_tweets_container'>
                <h3>Latest Tweets</h3>

                {
                    this.state.isTweetsLoading?
                    <div>
                        <img 
                            src={require('./icons/twitter_logo.svg')} 
                            alt="Loading"
                            className='loading_logo'   
                        />
                    </div> :

                    this.state.tweets.map((item,index)=>{
                       return  <TweetDisplay 
                            key={index}
                            userName={item.user.name}
                            handle={item.user.screen_name}
                            time={item.created_at}
                            text={item.text}
                            profileImg={item.user.profile_image_url}
                            fav={item.favorite_count}
                            reply={item.reply_count}
                        />
                    })
                }
            </div>
        );
    }
}

export default LatestTweets;