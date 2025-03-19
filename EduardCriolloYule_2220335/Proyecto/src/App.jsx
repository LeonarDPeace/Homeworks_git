import { useState } from 'react'
import './App.css'
import Stack from './components/Stack'

function App() {
  const [stack] = useState(new Stack())
  const [stackItems, setStackItems] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    const nombreLibro = event.target.nombreLibro_input.value
    const nombreAutor = event.target.nombreAutor_input.value
    const ISBN = event.target.ISBN_input.value
    const nombreEditorial = event.target.nombreEditorial_input.value

    stack.push({ nombreLibro, nombreAutor, ISBN, nombreEditorial })

    setStackItems([...stack.items])

    event.target.reset()
  }

  return (
    <>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <title>Hello, world!</title>
      </head>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="nombreLibro_label">Nombre Libro</label>
          <input type="text" class="form-control" id="nombreLibro_input" placeholder="Escriba nombre del Libro"/>
        </div>
        <div class="form-group">
          <label for="nombreAutor_label">Nombre Autor</label>
          <input type="text" class="form-control" id="nombreAutor_input" placeholder="Escriba nombre del Autor"/>
          {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
        </div>
        <div class="form-group">
          <label for="ISBN_label">Nombre Libro</label>
          <input type="text" class="form-control" id="nombreLibro_input" placeholder="Escriba nombre del Libro"/>
        </div>
        <div class="form-group">
          <label for="nombreISBN_label">ISBN</label>
          <input type="text" class="form-control" id="ISBN_input" placeholder="Escriba codigo ISBM del Libro"/>
        </div>
        <div class="form-group">
          <label for="nombreEditorial_label">Nombre Editorial</label>
          <input type="text" class="form-control" id="nombreEditorial_input" placeholder="Escriba nombre de la Editorial"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div className="mt-4">
        <h3>Stack:</h3>
        <ul>
          {stackItems.map((item, index) => (
            <li key={index}>
              <strong>Libro:</strong> {item.nombreLibro}, <strong>Autor:</strong> {item.nombreAutor}, <strong>ISBN:</strong> {item.ISBN}, <strong>Editorial:</strong> {item.nombreEditorial}
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
