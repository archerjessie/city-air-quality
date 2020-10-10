import React from 'react';
import SimpleForm from '../simpleForm/SimpleForm';
import { fetchCity } from '../../api/airQualityAPI';
import * as R from 'ramda';
import withState from '../../utils/withState';
import CityLocationButton from './cityLocationButton/CityLocationButton';

import './citySearchSideBar.css';

const CitySearchSideBar = ({
    onLocationSelected,
    onRefreshData,
    searchData,
    setSearchData }) => {
    const onSearchCity = (search) => {
        onRefreshData();
        fetchCity(search, setSearchData);
    }

    return (
        <div className='city-search-sidebar'>
            <SimpleForm onSubmit={onSearchCity} />
            <div className="br1 br--bottom flex flex-column w5 bb bl br b--light-gray border-box">
                {searchData ? (
                    <div className="pv2">
                        {searchData.map(({ uid, station: { name } }) => (
                            <CityLocationButton key={uid} onClick={onLocationSelected} name={name} uid={uid} />
                        ))}
                    </div>
                ) : (
                        <div className="ph3 pv2 silver h4 flex items-center justify-center">
                            Search for a city
                        </div>
                    )}
            </div>
        </div>
    )
}
export default R.compose(
    withState('searchData', 'setSearchData', null),
)(CitySearchSideBar);