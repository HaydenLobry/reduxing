import axios from 'axios';

const API_KEY = '0b151bbd48c7fbf4fb29d2848da60acb';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CHOOSE_DATA = 'CHOOSE_DATA';

export function fetchWeather(city, country) {
  const url = `${ROOT_URL}&q=${city},${country}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};

export const chooseData = (dataTypes) => {
  return {
    type: CHOOSE_DATA,
    payload: dataTypes
  }
}