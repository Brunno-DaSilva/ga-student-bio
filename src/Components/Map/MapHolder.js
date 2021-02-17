import React, { useState } from "react";
import "./mapHolder.scss";
import ReactMapGL, { Marker } from "react-map-gl";
import { ReactComponent as MapMarkerSVG } from "./marker.svg";

const MapHolder = ({ studentData }) => {
  const [viewport, setViewport] = useState({
    width: "95%",
    height: "100%",
    latitude: 0.0,
    longitude: 0.0,
    zoom: 2,
  });

  return (
    <div className="map">
      <div className="map__title">
        <h1>Map</h1>
        <br />
      </div>
      <div className="mapHolder">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          mapStyle="mapbox://styles/bruno-dasilva/ckl5bf4ga46tx18tczxshmi3w"
        >
          {studentData.map((locationMarker) => {
            return (
              <Marker
                key={locationMarker.id}
                latitude={locationMarker.latitude}
                longitude={locationMarker.longitude}
              >
                <img
                  src="https://res.cloudinary.com/duprwuo4j/image/upload/v1613601534/location_zl0llp.png"
                  alt="Marker"
                />
              </Marker>
            );
          })}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default MapHolder;
