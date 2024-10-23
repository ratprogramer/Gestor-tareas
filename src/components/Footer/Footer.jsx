import './Footer.css'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
export function Footer({ clearCompleted, tasks }) {

  const incompleteTasks = tasks.filter(task => !task.completed);
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      {tasks.length > 0 ? 
        (
          <div className='footer'>
              <div className='contador'>
                <p> {incompleteTasks.length === 1 ? 
                ( <> <strong>{incompleteTasks.length}</strong> item left </>) : (
                <><strong>{incompleteTasks.length}</strong> items left</>)}
                </p>
              </div>
              <div className='navegador'>
              <Link to="/all" className={activeLink === 'all' ? 'active' : 'btn-navegador'}onClick={() => handleClick('all')}>All</Link>
              <Link to="/pending" className={activeLink === 'pending' ? 'active' : 'btn-navegador'}onClick={() => handleClick('pending')}>Pending</Link>
              <Link to="/completed" className={activeLink === 'completed' ? 'active' : 'btn-navegador'}onClick={() => handleClick('completed')}>Completed</Link>
              </div>
              <button className='clear-completed' onClick={clearCompleted}>Clear completed</button>
          </div>) : ( <Navigate to='/all'></Navigate>)
      }
    </>
  )
}
