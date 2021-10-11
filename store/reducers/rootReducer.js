import { notesReducer } from "../reducers/notesReducer"
import { combineReducers } from "redux"
import { HYDRATE } from "next-redux-wrapper"

const combinedReducers = combineReducers({
  notes: notesReducer,
})

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const clientState = {
      ...state, // use previous state
      ...action.payload // from hydration
    }
      if (state.notes.allNotes) {
        clientState.notes.allNotes = state.notes.allNotes // preserve state
      }

      if (state.notes.currentNote) {
        clientState.notes.currentNote = state.notes.currentNote
      }
      return clientState
    } else {
      return combinedReducers(state, action)
    }
  }

export default rootReducer