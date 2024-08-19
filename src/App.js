import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (location) => {
    const apiKey = 'cbf5fbeec349d0ecf7056f7ab6f4ad42';
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="app">
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;

