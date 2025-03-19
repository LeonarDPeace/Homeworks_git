import { useState } from 'react'
import './App.css'
import Queue from './components/Queue'

function App() {
  const [queue] = useState(new Queue())
  const [queueItems, setQueueItems] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    const usuarioBanco = event.target.usuarioBanco_input.value
    const valorRetiro = event.target.valorRetiro_input.value

    queue.enqueue({ usuarioBanco, valorRetiro })

    setQueueItems([...queue.items])

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
          <label for="usuarioBanco_label">Usuario del Banco</label>
          <input type="text" class="form-control" id="usuarioBanco_input" placeholder="Escriba su nombre"/>
        </div>
        <div class="form-group">
          <label for="valorRetiro_label">Valor del Retiro</label>
          <input type="text" class="form-control" id="valorRetiro_input" placeholder="Valor del retiro"/>
          {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      <div className="mt-4">
        <h3>Queue:</h3>
        <ul>
          {queueItems.map((item, index) => (
            <li key={index}>
              <strong>Libro:</strong> {item.usuarioBanco}, <strong>Autor:</strong> {item.valorRetiro}
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}

export default App
