import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink } from 'react-router'

import { Button } from '@/_ds/Button'

import PageRoutes from './PageRoutes'
import './App.css'

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

const App = () => {
  const [theme, setTheme] = useState(THEMES.DARK)

  const setThemeAttribute = (newTheme: string): void => {
    document.body.setAttribute('data-theme', newTheme)
  }

  const updateTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    setThemeAttribute(newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    setThemeAttribute(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
      </nav>
      <p>Current theme: {theme}</p>
      <Button onClick={updateTheme}>toggle theme</Button>
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
