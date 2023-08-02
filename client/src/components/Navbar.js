import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, onLogout, onRegisterClick, onLoginClick}) => {
    return (
	<nav>
	    <ul>
		<li>
		    <Link to="/">Home</Link>
		</li>
		<li>
		    <Link to="/about">About</Link>
		</li>
		<li>
		    <Link to="/news">NYT Snippets</Link>
		</li>
		{isLoggedIn ? (
		    <li className="dropdown">
			<div className="auth-username">Welcome {username}!</div>
			<div className="dropdown-content" onClick={onLogout}>Logout</div>
		    </li>
		) : (
		    <>
			<li className="auth-btn" onClick={onRegisterClick}>Register</li>
			<li className="auth-btn" onClick={onLoginClick}>Login</li>
		    </>
		)}
	    </ul>
	</nav>
    );
}

export default Navbar;
