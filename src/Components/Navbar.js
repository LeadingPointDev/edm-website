import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="navbar-container">
            <Link to="/">Landing</Link>
            <Link to="/roadmap">Delivery Roadmap</Link>
            <Link to="/edm">Enterprise Data Model</Link>
            <Link to="/architecture">Architecture</Link>
            <Link to="/granite">Project Granite</Link>
            <Link to="/standards">Guides & Standards</Link>
        </div >
    )
}

export default Navbar;