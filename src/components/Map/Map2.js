import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from "react-simple-maps";


import './Map2.css';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([100, 80000])
  .range(["#FFC4C6","#FF797D","#F52D5C"]);

const Map2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/country-data.csv`)
    .then(data => {setData(data);});
  }, []);

// console.log(data);

  return (
    <div className='map_container'>
      <div className='map_label'>
         <span className="head"> COVID-19 Affected Areas </span>
          <div className="legend">
              <span><div className='color_block'></div> Most Affected</span>
              <span><div className='color_block least'></div>Less Affected</span>
          </div>
      </div>
    <ComposableMap
      projectionConfig={{
        rotate: [-10  , 0, 0],
        scale:182
      }}
      style={{
        height:'100%',
        marginTop:'-25px',
        marginLeft:'-13px'
      }}
    >
      
      {data.length > 0 && (
        <ZoomableGroup >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);
              // console.log(geo.properties.NAME);
                // console.log(de);
                return (
                  <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["total"]) : "#F5F4F6"}
              
                  />
                  );
            })
          }
        </Geographies>
      </ZoomableGroup>
      )}
    </ComposableMap>
    </div>
  );
};



export default Map2;
