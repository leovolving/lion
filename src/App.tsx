import { BrowserRouter, NavLink } from 'react-router'

import PageRoutes from './PageRoutes'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
      </nav>
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
