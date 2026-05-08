import React from 'react'

const Numbers = ({ persons, onDelete }) => {
  return (
    <ul>
      {persons.map(person => (
        <li key={person.id}>
          {person.name}: {person.number}{' '}
          <button onClick={() => onDelete(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  )
}
 export default Numbers