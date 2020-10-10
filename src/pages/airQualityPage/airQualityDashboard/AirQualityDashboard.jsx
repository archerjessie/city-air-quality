import React from 'react';
import LocationPanel from './locationPanel/LocationPanel';

import './airQualityDashboard.css';

const AirQualityDashboard = ({ feeds }) => (
    <div className="air-quality-dashboard flex flex-wrap justify-around">
        {feeds.map((feed) => (
            <LocationPanel key={feed.idx} feed={feed} />
        ))}
    </div>
)
export default AirQualityDashboard;
