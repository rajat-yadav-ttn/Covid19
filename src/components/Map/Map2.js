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
  .domain([2000, 80000])
  .range(["#FFC4C6", "#FF0019"]);

const Map2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // csv(`/vulnerability.csv`)
    csv(`/country-data.csv`)
    .then(data => {setData(data);});
  }, []);

console.log(data);

  return (
    <div className='map_container'>
      <div className='map_label'>
         <span className="head"> COVID-19 Affected Areas </span>
          <div className="sub">
              <span>Most Affected</span>
              <span>Less Affected</span>
          </div>
      </div>
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 186
      }}
    >
      
      {data.length > 0 && (
        <ZoomableGroup zoom={1}>
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

    {/* {data.map(i=>console.log(i.Cases))} */}

    </div>
  );
};

export default Map2;
