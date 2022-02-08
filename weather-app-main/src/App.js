import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

import './App.css';
import CityComponent from './components/CityComponents';
import WeatherComponent from './components/WeatherInfoComponents';

const API_KEY = "39dec829cc4477f44ad8c4b700264021";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  align-items:center;
  padding:20px 10px;
  width:380px;
  box-shadow:0 3px 6px 0 #555;
  background:white;
  border-radius:4px;
  font-family: 'Fuzzy Bubbles', cursive;
`;

const AppLabel = styled.span`
  color:black;
  font-size:18px;
  font-weight:bold;
`;

// const CityComponent = styled.div`
//   diplay:flex;
//   flex-direction:column;
// `;

// const WeatherComponent = styled.div`
//   display:flex;
//   flex-direction:column;
// `;



function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();

  const fetchWeather = async(e) =>{
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    setWeather(response.data);
  }

  return (
      <Container>
        <AppLabel>Weather App</AppLabel>
        {weather ? (
          <WeatherComponent weather={weather} />
          ) : (
            <CityComponent setCity={setCity} fetchWeather={fetchWeather} />)}
        {/*<WeatherComponent>WeatherComponent</WeatherComponent>*/}
      </Container>
  );
}

export default App;
