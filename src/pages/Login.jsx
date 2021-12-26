import React from 'react'
import styled from 'styled-components'
import { SignInButton, SignOutButton } from '../components/Auth'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const { isAuthenticated } = useAuth()
  return (
    <StyledPage>
      { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
    </StyledPage>
  )
}

export default Login


const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`
