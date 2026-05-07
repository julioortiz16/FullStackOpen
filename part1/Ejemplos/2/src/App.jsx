// 1. Header recibe el objeto props y usa la propiedad 'course'
const Header = (props) => {
  return <h1>{props.course}</h1>
}

// 2. Un componente reutilizable para las partes
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

// 3. Content recibe las partes y las organiza
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

// 4. Total recibe los ejercicios y los suma
const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React', 
        exercises: 10 
      },
      { 
        name: 'Using props to pass data', 
        exercises: 7 
      },
      { 
        name: 'State of a component', 
        exercises: 14 
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App