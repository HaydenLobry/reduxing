import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather.js';
import dataTypeReducer from './reducer_dataTypes';

const rootReducer = combineReducers({
  cityData: weatherReducer,
  dataTypes: dataTypeReducer
});

export default rootReducer;
