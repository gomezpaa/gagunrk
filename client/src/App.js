import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Snippets from "./pages/News";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import "./App.css"

function App() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleRegisterClick = () => {
	setShowRegisterModal(true);
    };

    const handleLoginClick = () => {
	setShowLoginModal(true);
    };

    const handleCloseModal = () => {
	setShowRegisterModal(false);
	setShowLoginModal(false);
    };

    const handleLogin = (username) => {
	setIsLoggedIn(true);
	setUsername(username);
    };

    const handleLogout = () => {
	setIsLoggedIn(false);
	setUsername('');
	toast.info('Logout successful!', {
	    position: "top-center",
	    autoClose: 5000,
	    hideProgressBar: false,
	    closeOnClick: true,
	    pauseOnHover: true,
	    progress: undefined,
	    theme: "dark",
	});
    };

    return (
	<div className="App">
	    <Router>
		<Navbar 
		    onRegisterClick={handleRegisterClick} 
		    onLoginClick={handleLoginClick}
		    isLoggedIn={isLoggedIn}
		    username={username}
		    onLogout={handleLogout}
		/>
		<RegisterModal 
		    isOpen={showRegisterModal} 
		    onClose={handleCloseModal} 
		/>
		<LoginModal 
		    isOpen={showLoginModal} 
		    onClose={handleCloseModal} 
		    onLogin={handleLogin}
		/>
		<Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/about" element={<About />} />
		    <Route path="/news" element={<Snippets />} />
		</Routes>
	    </Router>
	    
	</div>
    );
}

export default App;
