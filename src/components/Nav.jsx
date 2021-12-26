import React from 'react'
import { NavLink } from './NavLink'
import styled from 'styled-components'

const Nav = () => {
  const navItems = [
    { name: 'index', href: '/' },
    { name: 'information', href: '/information' },
    { name: 'protected', href: '/protected' },
    { name: 'auth', href: '/auth' },
  ]
  return (
    <StyledNav>
      <ul>
        { navItems.map(item => (
          <NavLink key={item.name} to={item.href}>{ item.name }</NavLink> 
        ))}
      </ul>
    </StyledNav>
  )
}

export default Nav


const StyledNav = styled.nav`
  padding-bottom: 2rem;
  ul {
    display: flex;
    gap: 2rem;

  }
`
