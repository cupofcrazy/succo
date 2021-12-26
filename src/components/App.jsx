import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { RequireAuth } from '../contexts/AuthContext'

// Pages Imports
import Home from '../pages/Home'
import Info from '../pages/Information'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Protected from '../pages/Protected'
import { Header } from './Header'

function App() {
  return (
    <AppContainer id="app">
      <Router>
        <Header />
        <Routes>
          <Route path={'/'} index element={<Home />} />
          <Route path={'/information'} element={<Info />} />
          <Route path={'/auth'} element={<Login />} />
          <Route path={'/protected'} element={<RequireAuth><Protected /></RequireAuth>} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  )
}

export default App


const AppContainer = styled.div`
  padding: 1rem;
`
