import { FETCH_WEATHER } from "../actions";
import { TEMP, PRESSURE, HUMIDITY } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      const rawData = action.payload.data;
      const data = {
        city: {
          name: rawData.city.name,
          country: rawData.city.country,
          population: rawData.city.population
        },
        [TEMP]: rawData.list.map(index => index.main.temp),
        [PRESSURE]: rawData.list.map(index => index.main.pressure),
        [HUMIDITY]: rawData.list.map(index => index.main.humidity)
      }
      return [data, ...state]
    default:
      return state;
  }
}