import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Views/Home'
import View from './components/Views/View'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Container>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/view' element={<View/>}/>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;