import { useState, useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // obtener las notas del servidor
  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  // agregar una nueva nota
  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    // crear un nuevo objeto de nota
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    setNewNote('')

    noteService
      .create(noteObject)
      .then(createdNote => {
        setNotes(notes.concat(createdNote))
      })
  }
  // manejar el cambio en el input
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  // cambiar la importancia de una nota
  const toggleImportanceOf = (id) => {
      const url = `http://localhost:3001/notes/${id}`
      // encontrar la nota a cambiar
      const note = notes.find(n => n.id === id)
      // crear una nueva nota con la importancia cambiada
      const changedNote = { ...note, important: !note.important }

      // actualizar la nota en el servidor
      noteService
        .update(id, changedNote)
        // actualizar la nota en el estado, then se ejecuta después de que la promesa se resuelve devolviendo la nota actualizada, 
        // response contiene la nota actualizada
        .then(response => {
          setNotes(notes.map(note => note.id !== id ? note : response.data))
        })
        .catch(error => {
          alert(`the note '${note.content}' was already removed from server`)
          setNotes(notes.filter(n => n.id !== id))
        })
  }

  // mostrar todas las notas o solo las importantes
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* mostrar las notas a mostrar */}
        {notesToShow.map((note, i) => 
          <Note 
            key={i} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)} 
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show important' : 'Show all'}
      </button>
    </div>
  )
}
export default App 