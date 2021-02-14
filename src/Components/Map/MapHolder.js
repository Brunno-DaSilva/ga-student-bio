import React, { useState } from "react";
import "./mapHolder.scss";
import ReactMapGL from "react-map-gl";

const MapHolder = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  return (
    <div className="map">
      <div className="map__title">
        <h1>Map </h1>
      </div>
      <div className="mapHolder">
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
    </div>
  );
};

export default MapHolder;
