// Unicafe app
import { useState } from 'react'

// El componente StatisticLine se encarga de mostrar una estadística individual, como el número de votos buenos, neutrales o malos, o el promedio de votos.
// Recibe dos props: text, que es el nombre de la estadística, y value, que es el valor de la estadística. El componente simplemente muestra el texto seguido del valor en un párrafo.
const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

// El componente Button se encarga de mostrar un botón que el usuario puede hacer clic para dar su opinión. Recibe dos props: handleClick,
//  que es una función que se ejecuta cuando el botón es clickeado, y text, que es el texto que se muestra en el botón. 
// El componente simplemente muestra un botón con el texto y asigna la función handleClick al evento onClick del botón.
const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}



// El componente Statistics se encarga de mostrar las estadísticas de los votos. Recibe cuatro props: good, neutral, bad y allClicks, 
// que representan el número de votos buenos, neutrales, malos y el total de votos respectivamente. Si no se han dado votos (allClicks es 0), 
// muestra un mensaje indicando que no se ha dado feedback. De lo contrario, muestra las estadísticas utilizando el componente StatisticLine para cada una de ellas.
const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text='good' value={props.good} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='neutral' value={props.neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='bad' value={props.bad} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='all' value={props.allClicks} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='average' value={(props.good - props.bad) / props.allClicks} /></td>
          </tr>
          <tr>
            <td><StatisticLine text='positive' value={(props.good / props.allClicks) * 100 + ' %'} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={good + neutral + bad} />
    </div>
  )
}

export default App