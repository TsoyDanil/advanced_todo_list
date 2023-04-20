import React from 'react'
import './App.css'
import AddTaskForm from './containers/AddTaskForm/AddTaskForm'
import { Route, Routes } from 'react-router-dom'

const App: React.FunctionComponent = (): React.ReactElement => {

  return (
    <div className="bg-primary min-h-screen">
      <Routes>
        <Route path='/' element={<h1>Tasks list</h1>}/>
        <Route path='/add-task' element={<AddTaskForm/>}/>
      </Routes>
    </div>
  )
}

export default App
