import React from 'react'
import './App.css'
import AddTaskForm from './containers/AddTaskForm/AddTaskForm'
import { Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import MainPage from './containers/MainPage/MainPage'

const App: React.FunctionComponent = (): React.ReactElement => {

  return (
    <div className="bg-primary min-h-screen">
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/add-task' element={<AddTaskForm/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
