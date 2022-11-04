import React from "react";
import "./Weather.css";
export default function Weather(){
    return (
        <div className="Weather">
                          
            <form> 
                <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"
                />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary"/>
            </div>
            </div>
            </form>
            <h1>Kyiv</h1>
            <ul>
                <li>
                    Friday, 19:00
                </li>
                <li>
                    Mostly cloudy
                </li>
            </ul>
            <div className="row">
                <div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Cloudy"></img>
                6°C
                </div>
                <div className="col-6">
                <ul>
                    <li>
                Precipitaion: 20%        
                    </li>
                    <li>
Humidity: 71%
                    </li>
                    <li>Wind: 5 km/h</li>
                </ul></div>
            </div>
        </div>
    );
}