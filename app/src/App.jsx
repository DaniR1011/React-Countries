import { NavLink, Outlet } from 'react-router-dom'
import {ThemeContext} from './Components/ThemeContext'
import ThemeSwitcher from './Components/ThemeSwitcher'
import React, {useContext} from 'react'

function App() {
  const handleClick = ()=>{
    window.open('https://github.com/DaniR1011/React-Project01')
    }
  const handleClickNew = ()=>{
      window.open('https://www.linkedin.com/in/daniel-recio-699100252/')
      }
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App color-${theme}`}>
    <div className='App'>
        <nav className='nav'>
          <img src="https://library.kissclipart.com/20180910/hjq/kissclipart-geography-icon-black-clipart-geography-computer-ic-bdf2be3ceb1f40d8.png" />
          <NavLink to="">Home</NavLink>
          <NavLink to="countries">Countries</NavLink>
          <NavLink to="form">Form</NavLink>
          <NavLink to="about">About</NavLink>
          <ThemeSwitcher />
        </nav>
        <main>
          <Outlet />
        </main>
        <footer className='footer'>
          <p>Made by Daniel Recio Álvaro! 🖤</p>
          <button className='GitHubButton' onClick={handleClick} > 
            <img className='GitHub' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> 
          </button>
          <button className='LinkedinButton' onClick={handleClickNew} > 
            <img className='Linkedin' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" /> 
          </button>
        </footer>
        </div>
      </div>
  )
}

export default App
