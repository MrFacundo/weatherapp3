import React, { FC } from 'react';
import { WeatherData } from '../store/types';

interface WeatherProps {
  data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {

  return(
    <section className="section pt-0">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 20}}>{data.name} - {data.sys.country}</h1>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{data.weather[0].description}</p>
              <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
            </div>
          </div>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">temp</p>
              <div className="title">
                <p className="mb-2">{data.main.temp}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered" >
            <div>
              <p className="heading">feels like</p>
              <div className="title">
                <p className="mb-2">{data.main.feels_like}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Min temperature</p>
              <div className="title">
                <p className="mb-2">{data.main.temp_min}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Max temperature</p>
              <div className="title">
                <p className="mb-0">{data.main.temp_max}<sup>&#8451;</sup></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Weather;