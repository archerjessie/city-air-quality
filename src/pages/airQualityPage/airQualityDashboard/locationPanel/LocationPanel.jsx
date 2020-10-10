import React from 'react'
import './locationPanel.css'

const LocationPanel = ({ feed }) => (
    <div className="location-panel ba b--gray br1 ml5 mb5 w-30">
        <div className="pv2 ph3 flex justify-between">
            {feed.city.name}
            <div>
                (
                {feed.city.geo[0]}
                ,
                {' '}
                {feed.city.geo[1]}
            )
            </div>
        </div>
        <div className="h4 pv2 ph3 flex justify-center items-center f1">
            {feed.aqi}
        </div>
        <div className="f7 pv2">
            {feed.attributions.map(({ url, name }) => (
                <div key={url} className="flex justify-between pv1 ph3">
                    <div>{name}</div>
                    <a className="blue pl3" href={url}>{url}</a>
                </div>
            ))}
        </div>
    </div>
)
export default LocationPanel;
