import React from 'react';
import {Map, Popup, TileLayer } from 'react-leaflet';
 
import '../../node_modules/leaflet/dist/leaflet.css';
import './LeafletMap.css';

function Tiles(){
    return (
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
    );
}

function OntarioMap(){
    const ontario ={
        coords: [51.2538, -85.3232],
        zoom: 5
    };

    return (
        <Map className="full-height" center={ontario.coords} zoom={ontario.zoom}>
            <Tiles />
        </Map>
    );
}

function LeafletMap(props){
    const bridge = props.bridge;

    if(!bridge){
        return <OntarioMap/>
    }

    const coords=[bridge.lat, bridge.lng];
    const defaultZoom = 14;

    return(
        <Map className="full-height" center={coords} zoom={defaultZoom}>
            <Tiles />
            <Popup position={coords}>
                {bridge.nameEncoded}
            </Popup>
        </Map>
    );
}

export default LeafletMap;