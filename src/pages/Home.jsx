import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Home = () => {
  const { user, isAuthenticated, handleLogout, handleSuccess } = useAuth()
  
  return (
    <div>
      <h1>Index</h1>
      
    </div>
  )
}

export default Home
