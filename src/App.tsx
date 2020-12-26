import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Weather from './components/Weather';
import SearchCurrentLocation from './components/SearchCurrentLocation';

import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <h1 className="has-text-left-tablet has-text-black-ter	is-size-1 px-6 pt-6">Weather App</h1>
      <Search title="Enter city name and press search button" />
      <SearchCurrentLocation title="or press the compass to get your current location" />

      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;