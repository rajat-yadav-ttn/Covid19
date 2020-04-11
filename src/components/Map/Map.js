import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import {Icon} from 'leaflet';


const customMarker=new Icon({
    iconUrl:require('./virus.png'),
    iconSize:[18,18],
});

class MapDisplay extends Component{
    state={
        regions:[],
    }



componentDidMount(){
    fetch('https://corona.lmao.ninja/countries')
        .then(res=>res.json())
        .then(res=>{
            this.setState({regions:res})    
            console.log(this.state.regions[0].countryInfo.long)});
}

    render(){
        return(
                <Map
                    center={[20, 50]}
                    zoom={2}
                    // maxZoom={10}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                    >
                    <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    
                    />
            {
                this.state.regions.map(mark => (
                    <Marker
                    icon={customMarker}
                    key={mark.countryInfo._id}
                    position={[mark.countryInfo.lat, mark.countryInfo.long]}
                    >
                        <Popup>
                            <div className='popup_column'>
                                <div>
                                    Cases:<b>{mark.cases}</b>
                                </div>
                                <div>
                                    Active:<b>{mark.active}</b>
                                </div>
                                <div>
                                    Recovered:<b>{mark.recovered}</b>
                                </div>
                                <div>
                                    Deaths:<b>{mark.deaths}</b>
                                </div>
                            </div>
                        </Popup>
                        
                    </Marker>
                ))
            }

                </Map>
        );
    }
}

export default MapDisplay;