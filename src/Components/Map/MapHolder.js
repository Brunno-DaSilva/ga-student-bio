import React, { useState } from "react";
import "./mapHolder.scss";
import ReactMapGL from "react-map-gl";

const MapHolder = () => {
  const [viewport, setViewport] = useState({
    width: "95%",
    height: "100%",
    latitude: -8.05,
    longitude: -34.900002,
    zoom: 6,
  });
  return (
    <div className="map">
      <div className="map__title">
        <h1>Map </h1>
      </div>
      <div className="mapHolder">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/bruno-dasilva/ckl5bf4ga46tx18tczxshmi3w"
        />
      </div>
    </div>
  );
};

export default MapHolder;
