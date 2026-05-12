import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import countriesService from './services/countries'






const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
    </div>
  )
}

function App() {
  const [filterText, setFilterText] = useState('')
  const [countries, setCountries] = useState([])

  const handleFilterChange = (event) => {
    setFilterText(event.target.value)
    countriesService
      .getAll()
      .then(countries => {
        const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
        setCountries(filteredCountries)
      })
  }

  const Notification = ({ countries }) => {
  if (countries.length === 0) {
    return <p>No countries found</p>
  } else if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]} />
    )
  }
  return (
    <ul>
      {countries.map(country => <li key={country.name.common}>{country.name.common}<button onClick={() => setCountries([country])}>View </button></li>)}
    </ul>
  )
}

const Filter = ({ filterText, onFilterChange }) => {
  return (
    <div>
      find countries: <input value={filterText} onChange={onFilterChange} />
    </div>
  )
}

  return (
    <div>
      <Filter filterText={filterText} onFilterChange={handleFilterChange} />
      <Notification countries={countries} />
    </div>
  )
}

export default App
