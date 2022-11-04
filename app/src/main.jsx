import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeContextProvider } from './Components/ThemeContext'


import Home from './pages/Home'
import About from './pages/About'
import Countries from './pages/Countries'
import Country from './pages/Country'
import Form from './pages/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeContextProvider>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/countries/:id' element={<Country />} />
        <Route path='/about' element={<About />} />
        <Route path='/form' element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeContextProvider>
  </React.StrictMode>
)
