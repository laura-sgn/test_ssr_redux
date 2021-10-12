import { data } from '../../data/noteData'

export const noteActionTypes = {
  FETCH_NOTES: 'FETCH_NOTES',
  FETCH_NOTE: 'FETCH_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
}

export function fetchNotes() {
  return {type: noteActionTypes.FETCH_NOTES, payload: {allNotes: data}}
}

export function fetchNote(noteId) {
  return {type: noteActionTypes.FETCH_NOTE, payload: {noteId}}
}

export function addNote(newNote) {
  return {type: noteActionTypes.ADD_NOTE, payload: {newNote}}
}

export function deleteNote(noteId) {
  return {type: noteActionTypes.DELETE_NOTE, payload: {noteId}}
}

