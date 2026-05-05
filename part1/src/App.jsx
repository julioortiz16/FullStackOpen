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
      <Part name={props.p1.name} exercises={props.p1.exercises} />
      <Part name={props.p2.name} exercises={props.p2.exercises} />
      <Part name={props.p3.name} exercises={props.p3.exercises} />
    </div>
  )
}

// 4. Total recibe los ejercicios y los suma
const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = { name: 'Fundamentals of React', exercises: 10 }
  const part2 = { name: 'Using props to pass data', exercises: 7 }
  const part3 = { name: 'State of a component', exercises: 14 }

  return (
    <div>
      <Header course={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

export default App