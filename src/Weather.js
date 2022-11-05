/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props){
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            feelslike: response.data.temperature.feels_like,
            city: response.data.city,
            description: response.data.condition.description,
            icon: response.data.condition.icon,
            iconurl:response.data.condition.icon_url


        });
        
        
    }
    if(weatherData.ready) {
        
    return (
        <div className="Weather">
                          
            <form> 
                <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul className="text-capitalize">
                <li>
                    Friday, 19:00
                </li>
                <li>
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix float-left">
<img src={weatherData.iconurl} alt={weatherData.icon}></img>
               
               <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit"> °C</span> 
               
                </div>
                </div>
                <div className="col-6">
                <ul>
                    <li>
                Feels like: {Math.round(weatherData.feelslike)}  °C       
                    </li>
                    <li>
Humidity: {weatherData.humidity}%
                    </li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul></div>
            </div>
        </div>
    );
}
    else{
        const key = "0bf3b313aa0f63at381d644cc6b68o17";
                let apiUrl = "https://api.shecodes.io/weather/v1/current?query=Kyiv&key=0bf3b313aa0f63at381d644cc6b68o17&units=metric";
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
    }
}