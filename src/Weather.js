import React from "react";

function Weather({ data }) {
  return (
    <div className="weather">
      <h2>
        {data.location.name}, {data.location.country}
      </h2>
      <h3>{Math.round(data.current.temp_c)}°C</h3>
      <p>
        <img src={data.current.condition.icon} alt="weather" />
        {data.current.condition.text}
      </p>
      <p>💧 Humidity: {data.current.humidity}%</p>
      <p>💨 Wind: {data.current.wind_kph} kph</p>
    </div>
  );
}

export default Weather;
