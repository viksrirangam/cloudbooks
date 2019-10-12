import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <div className="tabs is-centered">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/roster'>Roster</Link>
        </li>
        <li>
          <Link to='/schedule'>Schedule</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
