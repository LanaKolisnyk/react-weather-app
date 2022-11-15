import axios from "axios";
import React, { useState } from "react";


import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
    
function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }
    

    if (loaded) { 
        
        return (
        <div className="WeatherForecast">
       <div className="row">
       
        {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
            return (
            <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast}/>
                 </div>
                 );
                }
        })}
        
</div>
       </div>
    );
    
} else {
const key = "0bf3b313aa0f63at381d644cc6b68o17";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${key}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    
    return null;
    
}
}