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
    <div className="hero has-text-centered">
      <div className="hero-body pt-0">
        <div className="container">
          <h1 className="subtitle is-3">{title}</h1>
            <button
            className="button is-primary is-large"
            onClick={handleClick}>
              <i className="fa fa-compass fa-lg is-size-1	"></i></button>
        </div>
      </div>
    </div>
  );  
}

export default SearchCurrentLocation;