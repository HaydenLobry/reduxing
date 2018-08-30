import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather.js';

const rootReducer = combineReducers({
  cityData: weatherReducer
});

export default rootReducer;
