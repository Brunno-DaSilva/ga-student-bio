import React, { useState, useEffect } from "react";
import "./mapHolder.scss";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { ReactComponent as MapMarkerSVG } from "./marker.svg";

const MapHolder = ({ studentData }) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.09024,
    longitude: -95.712891,
    zoom: 4,
  });

  const [selectedLocation, setSelectedLocation] = React.useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedLocation(null);
      }
    };

    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="Map animated delay-1s fadeInLeft">
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
              <>
                <Marker
                  key={locationMarker.id}
                  latitude={locationMarker.latitude}
                  longitude={locationMarker.longitude}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedLocation(locationMarker);
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/duprwuo4j/image/upload/v1613666240/markericon16x16_zx778w.png"
                      alt="Marker"
                    />
                  </button>
                </Marker>
              </>
            );
          })}

          {selectedLocation ? (
            <Popup
              latitude={selectedLocation.latitude}
              longitude={selectedLocation.longitude}
              onClose={() => {
                setSelectedLocation(null);
              }}
            >
              <div className="popup__container">
                <img
                  src={selectedLocation.imgUrl}
                  alt={`${selectedLocation.name}'s photo`}
                />
                <h2>{selectedLocation.name}</h2>
                <p>{selectedLocation.title}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
};

export default MapHolder;
