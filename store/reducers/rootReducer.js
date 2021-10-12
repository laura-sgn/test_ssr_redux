import { notesReducer } from "../reducers/notesReducer"
import { combineReducers } from "redux"
import { HYDRATE } from "next-redux-wrapper"

const combinedReducers = combineReducers({
  notes: notesReducer,
})

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const clientState = {
      ...state, 
      ...action.payload
    }
    return clientState
    } else {
      return combinedReducers(state, action)
    }
  }

export default rootReducer


