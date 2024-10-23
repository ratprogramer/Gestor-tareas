import './Task.css'
import { useState } from 'react';
export function Task({task, toggleComplete, deleteTask, editTask}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [isHovered, setIsHovered] = useState(false); 

  const handleEdit = () => setIsEditing(true);

  const handleSave = (e) => {
    if (e.key === 'Enter') {
      editTask(task.id, newTitle);
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setNewTitle(task.title);
      setIsEditing(false);
    }
  };

  return (
    <li  className="task-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {isEditing ? (
        <input type="text" className='edit-input' autoFocus value={newTitle} onChange={(e) => setNewTitle(e.target.value)} onKeyDown={handleSave} onBlur={() => setIsEditing(false)} />
      ) : (
        <>
          <div className="checkbox-wrapper-12">
            <div className="cbx">
                <input 
                    id={`cbx-${task.id}`} 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleComplete(task.id)} 
                />
                <label htmlFor={`cbx-${task.id}`}></label>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo-12">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
                    </filter>
                </defs>
            </svg>
        </div>
        <label className={task.completed ? "completed-task" : "task"} onDoubleClick={handleEdit}>{task.title}</label>
        {isHovered && (
          <button onClick={() => deleteTask(task.id)} className="destroy-btn">x</button>
        )}
        </>
      )}
    </li>
  );
};
