import './Footer.css'
import { Link, Navigate } from 'react-router-dom'
export function Footer({ clearCompleted, tasks }) {

  const incompleteTasks = tasks.filter(task => !task.completed);
  console.log(incompleteTasks);
  
  return (
    <>
      {tasks.length > 0 ? 
        (
          <>
              <div>
              <p> {incompleteTasks.length === 1 ? 
              ( <> <strong>{incompleteTasks.length}</strong> item left </>) : (
              <><strong>{incompleteTasks.length}</strong> items left</>)}
              </p>
              </div>
              <div>
                <Link to="/all" >Todos</Link>
                <Link to="/completed">Completados</Link>
                <Link to="/pending">Pendientes</Link>
              </div>
              <footer>
                <button onClick={clearCompleted}>Clear completed</button>
              </footer>
          </>) : ( <Navigate to='/all'></Navigate>)
      }
    </>
  )
}
