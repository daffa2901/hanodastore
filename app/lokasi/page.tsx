"use client";
import React from "react";

import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from "react-map-gl/mapbox";

function Page() {
  const coordinates = { longitude: 106.75092703837142, latitude: -6.345369502596081 };

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiZGFmZmFkaSIsImEiOiJjbWU2bG5xZGcxNmhtMm1wem95OThyb3N3In0.tlpTKDZ0-oVw_-jOi_3P3Q"
      initialViewState={{
        longitude: coordinates.longitude,
        latitude: coordinates.latitude,
        zoom: 15
      }}
      style={{ width: '100vw', height: '100vh' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Marker longitude={coordinates.longitude} latitude={coordinates.latitude} anchor="bottom">
        <div style={{
          width: "30px",
          height: "30px",
          backgroundColor: "red",
          borderRadius: "50%",
          border: "3px solid white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }} />
      </Marker>
    </Map>
  );
}

export default Page;