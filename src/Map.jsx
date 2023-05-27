// import React, { useRef, useState,useContext } from "react";
// import {MapContainer,TileLayer} from "react-leaflet"
// import  data  from "./Map_components";
// import "leaflet/dist/leaflet.css";
// import dataContext from "./datacontext";



// const Basicmap=()=>{
//     const {isSideBarOpen,setIsSideBarOpen}=useContext(dataContext)
//     const[center,setCenter]=useState({lat:22.9074872,lng:79.07306671},2)
//     const { floodData, setFloodData } = useContext(dataContext);


//     const ZOOM_LEVEL=6
//     const mapRef=useRef()
//     const click=()=>{

//         setCenter();
//         setIsSideBarOpen(!isSideBarOpen)
//     }
// return(<>


//     <div className="row">
//         <div className="map-container">
//             <div className="col map" style={{width: isSideBarOpen ? "78.1vw" :"100vw", position:'absolute', right:'0'}}>
//                 <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef} onClick={click}>
//                     <TileLayer url={data.maptiler.url} attribution={data.maptiler.attribution}/>
//                 </MapContainer>
//             </div>
//         </div>
//     </div>
// </>)
// }
// export default Basicmap
import React from 'react'
import './map.css'
import { useEffect, useContext } from 'react'
import * as L from "leaflet";
import dataContext from './datacontext';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const { floodData, setFloodData } = useContext(dataContext);
  const { isSideBarOpen, setIsSideBarOpen } = useContext(dataContext)

  const style2 = {
    display: 'block'
  }

  useEffect(() => {
    var map1 = L.DomUtil.get('map'); if (map1 != null) { map1._leaflet_id = null; }


    // if(address.items!=undefined){
    //   var southWest = L.latLng(address.items[0].mapView.south,address.items[0].mapView.west)
    //   var northEast = L.latLng(address.items[0].mapView.north,address.items[0].mapView.east)
    //   var bounds = L.latLngBounds(southWest, northEast);
    // }else{

    //   var southWest = L.latLng(29.83900608249045,77.90231862375538)
    //   var northEast = L.latLng(29.88188113949949,77.95107045481006)
    //   var bounds = L.latLngBounds(southWest, northEast);
    // }
    var map = L.map('map', {
      //maxBounds: bounds,   // Then add it here..


    }).setView([22.9074872, 79.07306671], 13);
    var googleHybrid = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);
    // var marker = new L.Marker([17.385044, 78.486671]).addTo(map)
    // L.marker([50.5, 30.5]).addTo(map);
    var latlngs = [
      [29.83900608249045, 77.90231862375538],
      [29.83900608249045, 77.95107045481006],
      [29.88188113949949, 77.95107045481006],
      [29.88188113949949, 77.90231862375538],
      [29.83900608249045, 77.90231862375538],

    ];
    floodData?.forEach((e) => {
      const someData = e?.flooddata[0]?.complete_geojson_geometry ? JSON.parse(replaceQuotes(e?.flooddata[0]?.complete_geojson_geometry)) : 
      { 'type': 'FeatureCollection', 'features': [{ 'type': 'Feature', 'properties': {}, 'geometry': { 'type': 'Polygon', 'coordinates':
       [[[84.1898, 24.6099], [86.1898, 24.6099], [86.1898, 26.6099], [84.1898, 26.6099], [84.1898, 24.6099]]] } }] }
      // console.log(someData)
      L.geoJSON(someData).addTo(map);
    })

    function replaceQuotes(str) {
      var replacedStr = str.replace(/['"]/g, function (match) {
        if (match === '"') {  
          return "'";
        } else {
          return '"';
        }
      });

      return replacedStr;
    }






    // polyline.addTo(map);
    // osm.addTo(map);

    var myStyle = {
      "color": "red",
      "weight": 3,
      "opacity": 1
    };
    var defaultStyle = {
      "color": "lightblue",
      "weight": "2"
    }



  }, [floodData])
  return (
    <div style={{ display: 'block', overflow: 'hidden', width: isSideBarOpen ? "76.4vw" : "100vw", position: 'absolute', right: '0' }} className='map' id="map">

    </div>
  )
}

export default Map