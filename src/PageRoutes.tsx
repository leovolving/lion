import { Route, Routes } from 'react-router'

import About from './pages/About'
import Home from './pages/Home'

const PageRoutes = () => (
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Home />} />
  </Routes>
)

export default PageRoutes
