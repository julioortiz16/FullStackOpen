// Este componente se ha creado para mostrar la información de los cursos, ya que el ejercicio pide mostrar dos cursos, y el componente App.jsx se hizo pensando en mostrar solo uno. Por lo tanto, se ha creado este nuevo componente para mostrar ambos cursos y sus respectivas partes y ejercicios.
const Course = ({ course }) => {
  const total = (number) => course[number].parts.reduce((sum, part) => sum + part.exercises, 0)
  const currentCourse = (number) => course[number].parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)
  const courseName = course[0].name
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <h1>{courseName}</h1>
      <ul>
        {currentCourse(0)}
      </ul>
      <p><strong>Total of {total(0)} exercises</strong></p>
      <h1>{course[1].name}</h1>
      <ul>
        {currentCourse(1)}
      </ul>
      <p><strong>Total of {total(1)} exercises</strong></p>
    </div>
  )
}