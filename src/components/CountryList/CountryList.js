import React ,{Component} from 'react';

import './CountryList.css';
import CountryStat from './CountryStat';

class CountryList extends Component{
    state={
        countries:[],
        cd:[],
    }


    componentDidMount(){
        this.getCountries();
    }

    async getCountries(){
        await fetch('https://corona-api.com/countries')
                .then(res=>res.json())
                .then(res=>res.data.slice(0,10))
                .then(c=>{this.setState({cd:c})});

                console.log(this.state.cd);
    }
        
    render(){
        return(
            <div className='search_list_container'>
                <div className='wrapper'>
                    <input type='text' placeholder='Search Location' className='search_input'/>
                    <div className='country_list'>
                        {
                            this.state.cd.map(i=>{
                                return <CountryStat 
                                            key={i.code}
                                            name={i.name}
                                            confirmed={i.latest_data.confirmed}
                                            recovered={i.latest_data.recovered}
                                        />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryList;