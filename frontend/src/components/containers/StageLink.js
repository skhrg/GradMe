import React from 'react'
import { NavLink } from 'react-router-dom'

const blue = {
	color: '#9bddff',
}

const StageLink = ({ stage, children }) => (
  <NavLink
    to={stage === '' ? '/planner' : `/${ stage }`}
    activeStyle={ {
      textDecoration: 'none',
      color: '#9bddff'
    }}
    style={blue}
  >
    {children}
  </NavLink>
)

export default StageLink