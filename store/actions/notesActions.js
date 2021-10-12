import { getNotes }from "../../lib/apiClient"

export const noteActionTypes = {
  FETCH_NOTES_SUCCESS: 'FETCH_NOTES_SUCCESS',
  FETCH_NOTE: 'FETCH_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
}

export function fetchNotesSuccess(data) {
  return {type: noteActionTypes.FETCH_NOTES_SUCCESS, payload: {allNotes: data}}
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

export async function getAllNotes() {
  const notes = await getNotes()
  return notes
}