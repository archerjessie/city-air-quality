import React from 'react';
import CitySearchSideBar from './CitySearchSideBar';
import renderer from 'react-test-renderer';

describe("CitySearchSideBar", () => {
    it("renders as expected", () => {
        const searchData = [{ "uid": 3234, "aqi": "16", "time": { "tz": "+10:00", "stime": "2020-10-08 17:00:00", "vtime": 1602140400 }, "station": { "name": "Alphington", "geo": [-37.7784081, 145.0306], "url": "australia/melbourne/alphington", "country": "AU" } }, { "uid": 10141, "aqi": "11", "time": { "tz": "+10:00", "stime": "2020-10-08 17:00:00", "vtime": 1602140400 }, "station": { "name": "Melbourne CBD", "geo": [-37.8073959, 144.97], "url": "australia/melbourne/melbourne-cbd", "country": "AU" } }, { "uid": 3245, "aqi": "-", "time": { "tz": "+10:00", "stime": "2020-02-28 16:00:00", "vtime": 1582869600 }, "station": { "name": "Yarraville", "geo": [-37.816608, 144.890106], "url": "australia/melbourne/yarraville", "country": "AU" } }, { "uid": 3246, "aqi": "-", "time": { "tz": "+10:00", "stime": "2020-02-28 15:00:00", "vtime": 1582866000 }, "station": { "name": "Richmond", "geo": [-37.818635, 145.0014704], "url": "australia/melbourne/richmond", "country": "AU" } }, { "uid": 6283, "aqi": "37", "time": { "tz": "-06:00", "stime": "2020-10-08 01:00:00", "vtime": 1602140400 }, "station": { "name": "Melbourne, Brevard, Florida, USA", "geo": [28.053611111111, -80.628611111111], "url": "usa/florida/brevard/melbourne", "country": "US" } }, { "uid": 3242, "aqi": "17", "time": { "tz": "+10:00", "stime": "2020-10-08 17:00:00", "vtime": 1602140400 }, "station": { "name": "Footscray", "geo": [-37.80488, 144.8728], "url": "australia/melbourne/footscray", "country": "AU" } }, { "uid": 3236, "aqi": "1", "time": { "tz": "+10:00", "stime": "2020-10-08 06:00:00", "vtime": 1602100800 }, "station": { "name": "Brighton", "geo": [-37.9135475, 144.998], "url": "australia/melbourne/brighton", "country": "AU" } }, { "uid": 3239, "aqi": "-", "time": { "tz": "+10:00", "stime": "2020-02-28 16:00:00", "vtime": 1582869600 }, "station": { "name": "AltonaNorth", "geo": [-37.84455, 144.8629], "url": "australia/melbourne/altonanorth", "country": "AU" } }]
        const tree = renderer
            .create(<CitySearchSideBar searchData={searchData} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})