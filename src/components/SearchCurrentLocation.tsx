import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentLocationWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
  title: string;
}

const SearchCurrentLocation: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    getCurrentLocationData()
  }

  const getCurrentLocationData = () => {
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let latitude = position.coords.latitude
            let longitude =  position.coords.longitude

    dispatch(setLoading());
    dispatch(getCurrentLocationWeather(latitude, longitude))
        })
    }   
  }

  return(
    <div className="hero has-background-info-light	 has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
            <button
            className="button is-primary is-fullwidth"
            style={{maxWidth: 300, margin: '0 auto'}}
            onClick={handleClick}>
              Current Location</button>
        </div>
      </div>
    </div>
  );  
}

export default SearchCurrentLocation;