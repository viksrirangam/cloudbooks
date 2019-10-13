import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Footer = () => (
    <footer>
        <nav className="navbar is-light is-fixed-bottom" role="navigation">
            <div class="navbar-brand">
                <Link className="navbar-item is-expanded is-block has-text-centered" to='/'>Home</Link>
                <Link className="navbar-item is-expanded is-block has-text-centered" to='/roster'>Roster</Link>
                <Link className="navbar-item is-expanded is-block has-text-centered" to='/schedule'>Schedule</Link>
            </div>
        </nav>
    </footer>
)

export default Footer
