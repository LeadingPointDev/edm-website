import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar-container">
            <Link to="/">Introduction</Link>
            <Link to="/roadmap">Roadmap</Link>
            <Link to="/edm">Data Model</Link>
            <Link to="/architecture">Architecture</Link>
            <Link to="/standards">Guides & Standards</Link>
        </div >
    )
}

export default Navbar;