const listPersons = (name) => {
  const found = persons.find(person => person.name === name)
  return found ? true : false
}

export default listPersons