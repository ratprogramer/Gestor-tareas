import { TaskList } from './components/TaskList/TaskList'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const[tasks, setTasks] = useState(()=> {
    const saveTasks = localStorage.getItem('mydayapp-reactjs')
    return saveTasks ?  JSON.parse(saveTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('mydayapp-reactjs', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task) => {
    setTasks(prevTasks => [
      ...prevTasks, {id: Date.now().toString(), title: task, completed: false}
    ])
  }

  const editTask = (id, newTitle) => {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, title: newTitle } : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  
  return (
    <>
      <Header addTask={addTask}></Header>
      <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete}></TaskList>
    </>
  )
}

export default App
