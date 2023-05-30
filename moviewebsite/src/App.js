import React from 'react'
import './App.css'
import Home from './Home'
import SingleMovieCard from './SingleMovieCard'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<SingleMovieCard/>}/>
      </Routes>
    </>
  )
}

export default App
