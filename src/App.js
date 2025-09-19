import React, { useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import "./App.css"; // Import the polished CSS

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const apiKey = "b535b2d20e574e2c968175015251909"; // Replace with your WeatherAPI.com key
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeatherData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    }
  };

  return (
    <div className="app-container">
      <div className="weather-app">
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
        </header>

        <main className="app-main">
          <Search fetchWeather={fetchWeather} />
          {error && <p className="error-message">{error}</p>}
          {weatherData && <Weather data={weatherData} />}
        </main>
      </div>
    </div>
  );
}

export default App;
