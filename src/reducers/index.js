// this file just combines the reducers to be used by redux
// (See: src/components/Jexcel.js)

import { combineReducers } from 'redux'
import counter from './counter'
import data from './data'

const rootReducer = combineReducers({
  counter,
  data,
})

export default rootReducer
