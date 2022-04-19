import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Views/Home'
import View from './components/Views/View'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/view' element={<View/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
