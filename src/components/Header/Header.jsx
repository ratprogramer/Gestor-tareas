import './Header.css'
import {useState} from 'react'
export function Header( { addTask } ) {
    const [newTask, setNewTask] = useState('')

    const handleKey = (e) => {
        if(e.key == 'Enter'){
            if (newTask.trim()) {
                addTask(newTask);
                setNewTask('');
            }
        }
    }
    return (
    <div className='header-container'>
        <div className='txt-container'>
            <p className='title'>My Day</p>
            <p className='sub-title'>All your tasks in one place</p>
        </div>
        <input autoFocus type="text" placeholder="Type new todo" value={newTask} onKeyDown={handleKey} onChange={(e) => {setNewTask(e.target.value)}} />
    </div>
  )
}
