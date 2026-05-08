import { useState, useEffect } from 'react'
import Numbers from './components/Numbers'
import listPersons from './components/listPersons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')
  const [filtered, setFiltered] = useState(persons)


  useEffect(() => {
    const nextFiltered = filterText === ''
      ? persons
      : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
    setFiltered(nextFiltered)
  }, [persons, filterText])

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with: <input value={filterText} onChange={(event) => {
          setFilterText(event.target.value)
      }} /></p>
      <h2>add a new</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
        if (listPersons(newName)) {
          alert(`${newName} is already added to phonebook`)
        }
      }}
      onChange={(event) => {
        if (event.target.name === 'name') {
          setNewName(event.target.value)
        } else {
          setNewNumber(event.target.value)
        }
      }}>
        <div>name: <input name="name" /></div>
        <div>number: <input name="number" /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={filtered} />
    </div>
  )
}

export default App