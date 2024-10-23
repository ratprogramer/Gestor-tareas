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
      ...prevTasks, {id: Date.now().toString(), taskTitle: task, completed: false}
    ])
  }
  return (
    <>
      <Header addTask={addTask}></Header>
    </>
  )
}

export default App
