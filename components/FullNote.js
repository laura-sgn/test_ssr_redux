import { fullNoteStyle } from "../styles/noteFlex"
import Buttons from "./Buttons"
import { useSelector } from "react-redux"
import Form from "./Form"

const FullNote = ({ changeNewNoteVisible, changeNoteVisible }) => {
  const id = useSelector(state => state.notes.currentNote)
  let note = useSelector(state => state.notes.allNotes)
    .filter((note) => note.id === id)[0]

  if (!note) {
    note = {}
  }
  
  return (
    <div css={fullNoteStyle}>
      <Buttons currentNote={note}
        changeNewNoteVisible={changeNewNoteVisible}
        changeNoteVisible={changeNoteVisible} 
      />
      <p css={{fontWeight: 'bold'}}>{note.title}</p>
      <p css={{color: 'grey'}}>{note.date} {note.time}</p>
      <p>{note.content}</p>
    </div>
  )
}

export default FullNote