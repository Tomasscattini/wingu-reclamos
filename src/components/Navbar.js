import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary p-4">
            <div className="container">
                <Link to="/" className="navbar-brand">Wingu Reclamos</Link>
            </div>
        </nav>
    )
}

export default Navbar
