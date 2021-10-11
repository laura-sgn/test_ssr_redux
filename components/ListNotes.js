import { useSelector } from "react-redux"
import NotePreview from "./NotePreview"

export const ListNotes = () => {
  let notes = useSelector(state => state.notes.allNotes)

  return (
    <>
    <div>
      {notes.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </div>
    </>
  )
}

export default ListNotes