import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import personService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filtered, setFiltered] = useState(persons)

// obtener los datos del servidor
  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])

  // actualizar la lista de personas filtrada cada vez que cambian las personas o el texto del filtro
  useEffect(() => {
    const nextFiltered = filterText === ''
      ? persons
      : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
    setFiltered(nextFiltered)
  }, [persons, filterText])

  const handleDelete = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (!personToDelete || !window.confirm(`Delete ${personToDelete.name}?`)) {
      return
    }
    personService
      .deletePerson(id)
      .then(() => {
        setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
      })
      .catch(error => {
        console.error(error)
        setPersons(prevPersons => prevPersons.filter(person => person.id !== id))
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert('name and number cannot be empty')
      return
    }

    const existingPerson = persons.find(p => p.name === newName)

    if (existingPerson) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        return
      }
      const updatedPerson = { ...existingPerson, number: newNumber }
      personService
        .update(existingPerson.id, updatedPerson)
        .then(returnedPerson => {
          setPersons(prevPersons => prevPersons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      return
    }

    const newPerson = { name: newName, number: newNumber }
    personService
      .create(newPerson)
      .then(createdPerson => {
        setPersons(prevPersons => prevPersons.concat(createdPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleInputChange = (event) => {
    if (event.target.name === 'name') {
      setNewName(event.target.value)
    } else {
      setNewNumber(event.target.value)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with: <input value={filterText} onChange={(event) => {
          setFilterText(event.target.value)
      }} /></p>
      <h2>add a new</h2>
      {/* manejar el submit del formulario para agregar una nueva persona, también manejar el cambio en los inputs para actualizar el estado de newName y newNumber */}
      <form onSubmit={addPerson} onChange={handleInputChange}>
        <div>name: <input name="name" value={newName} /></div>
        <div>number: <input name="number" value={newNumber} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={filtered} onDelete={handleDelete} />
    </div>
  )
}

export default App