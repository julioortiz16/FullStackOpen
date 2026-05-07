import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </ul>
  )
}

const listPersons = (name) => {
  const found = persons.find(person => person.name === name)
  return found ? true : false
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(event) => {
        event.preventDefault()
        setPersons(persons.concat({ name: newName }))
        setNewName('')
        if (listPersons(newName)) {
          alert(`${newName} is already added to phonebook`)
        }
      }}
      onChange={(event) => setNewName(event.target.value)}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons} />
    </div>
  )
}

export default App