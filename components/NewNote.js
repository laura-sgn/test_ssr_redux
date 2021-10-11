import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../store/actions/notesActions"
const { uuid } = require('uuidv4')
import Form from "./Form"

export const NewNote = ({ newNoteVisible, changeNewNoteVisible, changeNoteVisible}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  

  const dispatch = useDispatch()

  const handleCreateNote = (e, noteData) => {
    noteData.id = uuid()
    noteData.date = date
    noteData.time = time
    e.preventDefault()
    // would send data to api
    dispatch(addNote(noteData))
    resetInputs()
    changeNewNoteVisible(false)
    changeNoteVisible(true)
  }

  const resetInputs = () => {
    setTime('')
    setTitle('')
    setDate('')
    setContent('')
  }
  
  return (
    <div css={{display: newNoteVisible ? "" : "none"}}>
      <h3 css={{padding: '15px'}}>Create a new note</h3>
      <Form 
        title={title}
        content={content}
        changeTitle={setTitle}
        changeContent={setContent}
        changeTime={setTime}
        changeDate={setDate}
        buttonHandler={handleCreateNote}
        buttonLabel={'Create'} 
      />
    </div>
  ) 
}

export default NewNote