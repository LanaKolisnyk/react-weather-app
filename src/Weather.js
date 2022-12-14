/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"


export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {

        setWeatherData({
            ready: true,
            coordinates:response.data.coordinates,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            feelslike: response.data.temperature.feels_like,
            city: response.data.city,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            iconurl:response.data.condition.icon_url,
            time: new Date(response.data.time * 1000),


        });}

        function search() {
            const key = "0bf3b313aa0f63at381d644cc6b68o17";
            let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

axios.get(apiUrl).then(handleResponse);  
        }
        
     function handleSubmit(event) {
        event.preventDefault();
        search();
     }
      
     function handleCityChange(event) {
setCity(event.target.value);
     }

    
    if(weatherData.ready) {
        
    return (
        <div className="Weather">
                          
           
            <form onSubmit={handleSubmit}> 
                <div className="row">
                <div className="col-9">
                    <input type="search" 
                    placeholder="Enter a city..." 
                    className="form-control" 
                    autoFocus="on" 
                    onChange={handleCityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            
            <WeatherInfo data={weatherData}/>
<WeatherForecast coordinates={weatherData.coordinates}/>
            
        </div>
    );
}
    else{
     search();   
    return "Loading...";
    }
}