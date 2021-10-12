import ListNotes from '../components/ListNotes'
import { useDispatch } from "react-redux"
import { fetchNotes, fetchNote } from '../store/actions/notesActions'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { flexContainer } from '../styles/noteFlex'
import FullNote from '../components/FullNote'
import NewNote from '../components/NewNote'
import { wrapper } from '../store/store'

export default function Home() {
  const dispatch = useDispatch()
  let firstNote = useSelector(state => state.notes.allNotes)[0]
  const [noteVisible, setNoteVisible] = useState(true)
  const [newNoteVisible, setNewNoteVisible] = useState(false)
  
  
  /*useEffect(() => {
    dispatch(fetchNotes())
  }, [])
  */

  if (firstNote) {
    dispatch(fetchNote(firstNote.id))
  }

  return (
    <>
      <NewNote newNoteVisible={newNoteVisible} changeNewNoteVisible={setNewNoteVisible} changeNoteVisible={setNoteVisible}/>
      <div css={[flexContainer, {display: noteVisible ? '' : 'none'}]}>
        <ListNotes />
        <FullNote changeNewNoteVisible={setNewNoteVisible} changeNoteVisible={setNoteVisible}/>
      </div> 
   </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => () => {
  store.dispatch(fetchNotes())
})