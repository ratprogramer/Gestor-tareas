import './TaskList.css'
import { Task } from '../Task/Task'
export function TaskList({ tasks, toggleComplete, deleteTask, editTask, filter }) {

  return (
    <ul>
      {filter === 'completed' ? (
        tasks.filter(task => task.completed).map(task => (
            <Task
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ))
      ) : filter === 'pending' ?(
        tasks.filter(task => !task.completed).map(task => (
            <Task
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ))
      ) : (
        tasks.map(task => (
            <Task
                key={task.id}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ))
      )}
    </ul>
  )
}