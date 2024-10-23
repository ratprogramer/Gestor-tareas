import { TaskList } from './components/TaskList/TaskList'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
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
      <Router>
        <Header addTask={addTask}></Header>
        <Routes>
          <Route path='/' element={<Navigate to="/all"/>}/>
          <Route path='/all' element= {<TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} filter="all"/>}/>
          <Route path='/pending' element= {<TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} filter="pending"/>}/>
          <Route path='/completed' element= {<TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete} filter="completed"/>}/>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}

export default App
