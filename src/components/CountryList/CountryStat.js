import React from 'react';

import './CountryList.css';

const CountryStat=props=>{
    return(
        <div className='country_stat_container'>
            <div>
                <div>
                    {/* <img src={require('./')}/> */}
                    <div className='country_name'>{props.name}</div>
                </div>
                <div>
                    <span className="stat">{props.confirmed + props.recovered} Affected | {props.recovered} Recovered</span>
                </div>
            </div>
            <div>
                up
            </div>
        </div>
    )
}

export default CountryStat;