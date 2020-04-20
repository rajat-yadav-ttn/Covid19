import React ,{Component} from 'react';

import './CountryList.css';
import CountryStat from './CountryStat';

class CountryList extends Component{
    state={
        countries:[],
        increased:true,
        isLoading:true,
        searchVal:'',
    }


    componentDidMount(){
        this.getCountries();
    }

    componentWillUnmount(){
        clearTimeout(this.intervalID);
    }

    async getCountries(){
        let countryCases;
        await fetch('https://corona-api.com/countries')
                .then(res=>res.json())
                // .then(res=>res.data.slice(0,10))
                // .then(res=>{this.setState({countries:res.data})});
                .then(res=>{countryCases=res.data})
                .then(res=>this.setState({
                    isLoading:false
                }))


                let sortedCases=countryCases.sort((prev,curr)=>
                     curr.latest_data.confirmed-prev.latest_data.confirmed
                    );

                this.setState({countries:sortedCases});
                console.log('refresh countries');
            this.intervalID = setInterval(this.getCountries.bind(this),900000);
    }    

    handleSearchInput=event=>{
        this.setState({
            searchVal:event.target.value
        })   
    }


        
render(){
    
    const searched=this.state.countries.filter((country)=>{
        return  this.state.searchVal==='' ? country : country.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
    })

        return(
            <div className='search_list_container' style={{background:this.props.isDark?'#25274b':'#fff'}}>
                <div className='wrapper'>
                    <input 
                        type='text' 
                        placeholder='Search Location' 
                        className='search_input'
                        onChange={this.handleSearchInput}
                        value={this.state.searchVal}
                        style={{
                            background:this.props.isDark?'#2e315d':'#f7f7f7',
                            color:this.props.isDark?'#ccccea':'#30313A'
                        }}
                        />

                    <div className='country_list'>
                        {   
                            this.state.isLoading ?
                            <div style={{
                                    textAlign:'center',
                                    fontWeight:600,
                                    fontSize:22,
                                    color:'#5f6769',
                                    position:'relative',
                                    top:'40%',
                                    left:'50%',
                                    transform:'translate(-50%,-50%)',
                                    
                                        }}>Loading...</div> :

                                  
                                       

                            searched.map(i=>{
                                return <CountryStat 
                                            key={i.code}
                                            name={i.name}
                                            confirmed={i.latest_data.confirmed}
                                            recovered={i.latest_data.recovered}
                                            increased={this.state.increased}
                                            code={i.code.toLowerCase()}
                                            isLoading={this.state.isLoading}
                                            isDark={this.props.isDark}
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