import App from './App.jsx'
import React from 'react'
import ReactDom from 'react-dom/client'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'Most important methods are reduce, map and filter',
    important: true
  }
]

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
)