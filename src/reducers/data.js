// this reducer updates the state container upon .dispatch({...})
// (See: src/components/Jexcel.js)

import ActionTypes from '../constants/actionTypes'

const initialState = {}

export default function setData(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.STORE_DATA: // <- .dispatch({ type: ..., ... })
      // this reducer updates the state container: action.something is passed along as extra parameters in .dispatch({...})
      return {
        data: action.newData,
        change: action.change,
        comments: action.comments,
      }
    default:
      return state
  }
}
