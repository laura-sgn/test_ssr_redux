import { sharedButtonStyle } from "../styles/buttons"
import { deleteNote } from "../store/actions/notesActions"
import { useDispatch } from "react-redux"


const Buttons = ({ changeNewNoteVisible, changeNoteVisible, currentNote }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteNote(currentNote.id))
  }

  const handleCreateNew = () => {
    changeNewNoteVisible(true)
    changeNoteVisible(false)
  }

  return (
    <>
      <button css={[sharedButtonStyle, {background: '#FFCC99'}]} onClick={handleCreateNew}>Create new</button>
      <button css={[sharedButtonStyle, {background: '#FFCC99'}]}>Edit</button>
      <button css={[sharedButtonStyle, {background:'#FF6347', color: 'white'}]} onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Buttons
