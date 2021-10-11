import { notePreviewStyle } from '../styles/noteFlex'
import { fetchNote } from '../store/actions/notesActions'
import { useDispatch } from 'react-redux'

export const NotePreview = ({ note }) => {
  const dispatch = useDispatch()

  const handleNoteClick = (event) => {
    event.preventDefault()
    const noteId = event.currentTarget.id
    dispatch(fetchNote(noteId))
  }

  return (
    <div css={notePreviewStyle}>
      <a id={note.id} href="" onClick={handleNoteClick}>
        <p css={{fontWeight: 'bold'}}>{note.title}</p>
        <p css={{font: 'grey'}}>{note.time}</p>
      </a>
    </div>
  )
}

export default NotePreview