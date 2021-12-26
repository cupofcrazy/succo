import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import App from './components/App'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
