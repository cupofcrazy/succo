import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import Nav from './Nav'

export const Header = () => {
  const { user } = useAuth()
  return (
    <StyledHeader>
      <Nav />
      { user && <ProfileImage user={user} /> }
    </StyledHeader>
  )
}


const ProfileImage = ({ user }) => {
  console.log(user)
  return (
    <StyledImage src={user?.imageUrl} alt={`${user?.givenName}'s Profile Picture`} />
  )
}


const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledImage = styled.img`
  width: 2.725rem;
  height: 2.725rem;
  border-radius: 50%;
`
