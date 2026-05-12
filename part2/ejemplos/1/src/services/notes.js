import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

// obtener todas las notas del servidor
const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = { id: 1000, content: 'This note does not exist', important: true }
    return request.then(response => response.data.concat(nonExisting))
}

// crear una nueva nota, el nuevo objeto se pasa como argumento
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

// actualizar una nota con un nuevo objeto, el id se pasa por separado
const update = (id, newObject) => {
    const request = axios
    .put(`${baseUrl}/${id}`, newObject)
    .then(response => response.data)
    .then(changedNote => {
        console.log(changedNote)
        return changedNote
    })
    .catch(error => {
        console.error('Error updating note:', error)
        throw error
    })
    return request
}

export default {getAll, create, update}