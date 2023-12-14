import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        const { isLoggedIn, username, onLogout, onRegisterClick, onLoginClick} = this.props;
        return (
            <>
                <nav>
                    <Link to="/">
                        <svg id="logo-38" width="78" height="32" viewBox="0 0 78 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" class="ccustom" fill="#FF7A00"></path> <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" class="ccompli1" fill="#FF9736"></path> <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" class="ccompli2" fill="#FFBC7D"></path> </svg>
                    </Link>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li className="news-dropdown">
                                <Link to="#">News <i className="fa-solid fa-caret-down"></i></Link>
                                <div className="news-dropdown-content"><Link to="/nyt">New York Times</Link></div>
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
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;
