import cn from 'classnames'
import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import styled from 'styled-components'

export const NavLink = ({ to, children, ...props }) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <StyledNavItem to={to} className={cn({ active: match ? 'active' : '' })} {...props} >
      {children}
    </StyledNavItem>
  )
}


const StyledNavItem = styled(Link)`
  font-weight: 500;
  opacity: .5;
  &.active {
    opacity: 1;
  }
`