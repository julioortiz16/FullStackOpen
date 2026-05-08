const listPersons = (name, persons) => {
  const found = persons.find(person => person.name === name)
  return Boolean(found)
}

export default listPersons