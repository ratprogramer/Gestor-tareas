import './Footer.css'
import { Link } from 'react-router-dom'
export function Footer({ clearCompleted, tasks }) {

  return (
    <>
      <div>
        <p>{tasks.length == 1 ? `${tasks.length} item left` : `${tasks.length} items left` }</p>
      </div>
      <div>
        <Link to="/all" >Todos</Link>
        <Link to="/completed">Completados</Link>
        <Link to="/pending">Pendientes</Link>
      </div>
      <footer>
        <button onClick={clearCompleted}>Clear completed</button>
      </footer>
    </>
  )
}
