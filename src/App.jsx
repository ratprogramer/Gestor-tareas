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

  return (
    <>
      <Header addTask={addTask}></Header>
      <TaskList tasks={tasks} editTask={editTask}></TaskList>
    </>
  )
}

export default App
