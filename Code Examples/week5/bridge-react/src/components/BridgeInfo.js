import React from "react";
import LeafletMap from "./LeafletMap.js";
import "./BridgeInfo.css";

function InfoPanel(props) {
  const bridge = props.bridge;
  const age = new Date().getFullYear() - bridge.year;

  return (
    <div id="info-panel">
      <h2>{bridge.nameEncoded}</h2>
      <div className="bridge-stats">
        <div>
          Year: {bridge.year} ({age} years)
        </div>
        <div>Width: {bridge.width}m</div>
        <div>Length: {bridge.length}m</div>
      </div>
    </div>
  );
}

function BridgeInfo(props) {
  const infoPanel = props.bridge ? <InfoPanel bridge={props.bridge} /> : null;

  return (
    <div id="bridge-info-wrapper">
      {infoPanel}

      <div id="leaflet-map">
        <LeafletMap bridge={props.bridge} />
      </div>
    </div>
  );
}

export default BridgeInfo;
