import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import "mapbox-gl/dist/mapbox-gl.css";

import {
    LocationMarkerIcon
} from "@heroicons/react/solid";



function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

    // Transform de search ressult object 
    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))


    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.mapbox_key}
            mapboxAccessToken={process.env.mapbox_key}
            mapStyle='mapbox://styles/nosthas/clcxi22cd000e15pdai6t28s3'
            onMove={(nextViewport) => setViewport(nextViewport.viewState)}
        >
            {searchResults.map(result => (
                <div key={result.long}>

                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                        <LocationMarkerIcon role='img' aria-label='push-pin' onClick={() => setSelectedLocation(result)} className='h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer inline-flex mx-2 animate-bounce' />
                    </Marker>


                    {/* Popup */}
                    {/* {console.log(selectedLocation.long === result.long)} */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={false}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                            {console.log('inside' + result.title)}
                        </Popup>) : (false)
                    }

                </div>
            ))}
        </ReactMapGL >
    );
}

export default Map

