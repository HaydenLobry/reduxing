import { CHOOSE_DATA } from '../actions';
import { TEMP, PRESSURE, HUMIDITY } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case CHOOSE_DATA:
      const dataTypes = action.payload
      const createDataArray = (object) => {
        const tempStatus = object[TEMP]
        if (tempStatus) return [TEMP]
      }
      return [
        dataTypes[TEMP] ? TEMP : null,
        dataTypes[PRESSURE] ? PRESSURE : null,
        dataTypes[HUMIDITY] ? HUMIDITY : null
      ]
    default:
      return state
  }
}