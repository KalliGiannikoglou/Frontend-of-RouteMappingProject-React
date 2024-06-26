import React, { useState, useRef, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const MapInteraction = ({setLocations}) => {

  // load places from libraries (GoogleMapsApi)
  const [libraries] = useState(["places"]);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const inputRef = useRef(null);
  const searchBoxRef = useRef(null);

  const mapContainerStyle = {
    height: "60vh",
    width: "100%"
  };

  const center = {
    lng: 22.950,
    lat: 39.366
  };

  const onSearchBoxLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  // Add marker in the location of SearchBox
  // useCallback to avoid unintended renders 
  const onPlacesChanged = useCallback(() => {
    const places = searchBoxRef.current.getPlaces();
    // Check that places is not empty -> slow rendering
    if ( places && places.length !== 0){
      const place = places[0];

      //Geometry library for geocoding-> get lat and lng
      if (place && place.geometry) {
        const { location } = place.geometry;
        const newMarker = [...markers, { lat: location.lat(), lng: location.lng(), id: markers.length }];
        
        setMarkers(newMarker);
        // to update the parent component
        setLocations(newMarker);
        console.log(markers);
        mapRef.current.panTo(location);
      }
    }
   
  }, [markers, setLocations]);

  const onMapClick = (e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    ]);
    setLocations ((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
    ]);
  };

  // Add marker with 'Enter' key
  const onKeyPress = useCallback((e) => {
    if(e.key === 'Enter'){
      onPlacesChanged();
    }
  }, [onPlacesChanged]);
 
 

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('keypress', onKeyPress);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('keypress', onKeyPress);
      }
    };
  }, [onKeyPress]);

  const onLoad = useCallback((map) => { 
    mapRef.current = map;
  }, []);


  return (
    // My API-KEY
    <LoadScript googleMapsApiKey="AIzaSyCv3MQCBBotp_djJT9hAD4KsMfBMqQUyLY&loading=async" libraries={libraries}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '70vh' }}>
        <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
          <input
            type="text"
            placeholder="Search..."
         
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `250px`,
              height: `32px`,
              marginTop: `130px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              top: "10px",
              left: "28%",
              transform: "translateX(-50%)",
              zIndex: 1
            }}
          />
        </StandaloneSearchBox>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onClick={onMapClick}
        >
          {markers.map((marker, idx) => (
            <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }}/>
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapInteraction;