import './Footer.css'
import { Link } from 'react-router-dom'
export function Footer() {

  return (
    <>
      <div>
        <Link to="/all" >Todos</Link>
        <Link to="/completed">Completados</Link>
        <Link to="/pending">Pendientes</Link>
      </div>
      <footer>
        <button>Clear completed</button>
      </footer>
    </>
  )
}
