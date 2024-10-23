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
    <li onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <input className='checkBox' type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
      {isEditing ? (
        <input type="text" autoFocus value={newTitle} onChange={(e) => setNewTitle(e.target.value)} onKeyDown={handleSave} onBlur={() => setIsEditing(false)}/>
      ) : (
        <label className="task" onDoubleClick={handleEdit}>{task.title}</label>
      )}
      {isHovered && (
        <button onClick={() => deleteTask(task.id)} className="destroy-btn">Delete</button>
      )}
    </li>
  );
};
