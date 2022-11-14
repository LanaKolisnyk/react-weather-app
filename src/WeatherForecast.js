import axios from "axios";
import React from "react";


import "./WeatherForecast.css";



export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);
    const key = "0bf3b313aa0f63at381d644cc6b68o17";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${key}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
       <div className="row">
        <div className="col">
         <div className="WeatherForecast-day">Thu</div> 
         <div className="WeatherForecast-icon"></div>   
         <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>   
            </div> 
        </div>
</div>
       </div>
    );
}