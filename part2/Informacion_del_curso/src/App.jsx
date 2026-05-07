import Course from './components/Course'


// Este componente se ha creado para mostrar la información de los cursos, ya que el ejercicio pide mostrar dos cursos, y el componente App.jsx se hizo pensando en mostrar solo uno. Por lo tanto, se ha creado este nuevo componente para mostrar ambos cursos y sus respectivas partes y ejercicios.
const App = () => {
  const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return <Course course={course} />
}

export default App