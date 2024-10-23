import { TaskList } from './components/TaskList/TaskList'
import { HashRouter as Router, Route, Switch, Navigate } from 'react-router-dom'
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
  
  const clearCompleted = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  return (
    <>
      <div className='app-container'>
        <div className='fondo'></div>
        <Router>
          <Header addTask={addTask}></Header>
          <div className='main'>
            <Switchwitch>
              <Route path='/' element={<Navigate to="/all"/>}/>
              <Route path='/Gestor-tareas' element={<Navigate to="/all"/>}/>
              <Route path='/all' element= {<TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete}  filter="all"/>}/>
              <Route path='/pending' element= {tasks.length > 0 ? <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete}  filter="pending"/> : <Navigate to="/all"/>}/>
              <Route path='/completed' element= {tasks.length > 0 ? <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} toggleComplete={toggleComplete}  filter="completed"/> : <Navigate to="/all"/>}/>
            </Switchwitch>
            <Footer tasks={tasks} clearCompleted={clearCompleted}></Footer>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
