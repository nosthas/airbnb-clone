import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.mapbox_key}
            mapboxAccessToken={process.env.mapbox_key}
            mapStyle='mapbox://styles/nosthas/clcxi22cd000e15pdai6t28s3'
            onMove={(nextViewport) => setViewport(nextViewport.viewState)}
        >
        </ReactMapGL >
    );
}

export default Map
