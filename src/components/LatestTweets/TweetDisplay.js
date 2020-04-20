import React from 'react';

import './LatestTweets.css';

const TweetDisplay =(props)=>{

    let d=new Date(props.time),
        date=d.getDate(),
        month=d.getMonth(),
        monthArr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
        hours=d.getHours(),
        minutes=d.getMinutes();
    return(
        <div className='tweet'>
                    <div className='dp_name_container'>
                        <div>
                            <img src={props.profileImg} alt="dp" className='dp'/>
                        </div>
                        <div>
                            <h4 style={{color:props.isDark?'#7e83c2':'#30313A'}}>{props.userName}</h4>
                            <span className='twitter_handle' style={{color:props.isDark?'#7e83c2':'#30313A'}}>@{props.handle}</span>

                        </div>
                    </div>

                    <div className='tweet_content' style={{color:props.isDark?'#ccccea':'#30313A'}}>
                        {props.text}
                    </div>
                    <div className='tweet_info_container' >
                        <div className="actions">
                            <span>
                                <img src={require('./icons/like.svg')} alt="" style={{marginRight:'5px'}}/>
                                {props.fav}
                            </span>
                            
                            <span>
                                <img src={require('./icons/share.svg')} alt="" style={{marginRight:'5px'}}/>
                                {props.rtCount}
                            </span>
                        </div>
                        <span className='date' style={{color:props.isDark?'#7e83c2':'#30313A'}}>
                            {date} {monthArr[month]}
                            &nbsp;  {hours}:{minutes}
                        </span>
                    </div>
                </div>
    );
}

export default TweetDisplay;