import './TaskList.css'
import { Task } from '../Task/Task'
export function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {

  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id} 
          task={task} 
          toggleComplete={toggleComplete} 
          deleteTask={deleteTask} 
          editTask={editTask}
        />
      ))}
    </ul>
  )
}