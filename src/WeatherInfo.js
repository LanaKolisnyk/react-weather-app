import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            
            <ul className="text-capitalize">
                <li>
                    <FormattedDate date={props.data.time} />
                </li>
                <li>
                    {props.data.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix float-left">
<img src={props.data.iconurl} alt={props.data.icon}></img>
               
               <WeatherTemperature celsius={props.data.temperature}/>
               
               
                </div>
                </div>
                <div className="col-6">
                <ul>
                    <li>
                Feels like: {Math.round(props.data.feelslike)}  °C       
                    </li>
                    <li>
Humidity: {props.data.humidity}%
                    </li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
                </div>
            </div>
        </div>
        );
}