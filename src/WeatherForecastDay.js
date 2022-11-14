import React from "react";

export default function WeatherForecastDay(props) {
return (
    <div>
<div className="WeatherForecast-day">{props.data.time}</div> 
<div className="WeatherForecast-icon"><img src={props.data.condition.icon_url} alt={props.data.condition.icon}></img></div>   
<div className="WeatherForecast-temperature">
   <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}°</span>
   <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}°</span>   
   </div>
   </div>
   );

}