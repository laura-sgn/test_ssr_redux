import { data } from '../../data/noteData'

const initialState = {
  allNotes: data,
  currentNote: '1'
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_NOTE': {
        return {...state, currentNote: action.payload.noteId}
      }
      case 'FETCH_NOTES': {
        return {...state, allNotes: action.payload.allNotes}
      }
      case 'ADD_NOTE': {
        const add = state.allNotes.concat(action.payload.newNote)
        return {...state, allNotes: add}
      }
      case 'DELETE_NOTE': {
        const filtered = state.allNotes.filter(note => note.id !== action.payload.noteId)
        return {...state, allNotes: filtered}
      }
      default:
          return state;
  }
}

export default notesReducer