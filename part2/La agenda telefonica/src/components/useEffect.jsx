  useEffect(() => {
    const nextFiltered = filterText === ''
      ? persons
      : persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
    setFiltered(nextFiltered)
  }, [persons, filterText])

  export default useEffect