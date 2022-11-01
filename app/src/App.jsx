import { NavLink, Outlet } from 'react-router-dom'
import './App.css'


function App() {
  const handleClick = ()=>{
    window.open('https://github.com/DaniR1011/React-Project01')
    }
  return (
    <div className="App">
        <nav>
          <img src="https://img.freepik.com/vector-premium/ilustracion-mapa-mundo-banderas-todos-paises_37674-7.jpg?w=2000" />
          <NavLink to="">Home</NavLink>
          <NavLink to="countries">Countries</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
        <footer>
          <p>Made by student Neolander! 🤓</p>
          <button onClick={handleClick} > 
            <img className='GitHub' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> 
          </button>
        </footer>
      </div>
  )
}

export default App
