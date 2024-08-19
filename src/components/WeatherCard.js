import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) {
    return <div className="weather-card">No data available</div>;
  }

  const { name, sys, main, weather, timezone} = weatherData;

   // Calculate the local time & date
   const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60000;
   const localTime = new Date(utcTime + timezone * 1000);
   const date = new Date();

  return (
    <div className="weather-card">
      <p>{date.toDateString()}, {localTime.toLocaleTimeString()}</p>
      <h2>{name}, {sys.country}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
