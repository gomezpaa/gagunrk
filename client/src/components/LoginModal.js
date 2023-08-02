import React, {useState} from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import "./AuthModal.css"

const LoginModal = ({isOpen, onClose, onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
	event.preventDefault();

	try {
	    const response = await fetch(`https://www.gagunrk.com/api/login`, {
		method: 'POST',
		headers: {
		    'Content-Type':'application/json',
		},
		body: JSON.stringify({
		    username,
		    password,
		}),
	    });

	    if (response.ok) {
		console.log('Login successful!');
		toast.success('Login successful!', {
		    position: "top-center",
		    autoClose: 5000,
		    hideProgressBar: false,
		    closeOnClick: true,
		    pauseOnHover: true,
		    draggable: true,
		    progress: undefined,
		    theme: "dark",
		});
		onClose();
		onLogin(username);
	    } else {
		console.log('Login falied!');
		toast.error('Login failed!', {
		    position: 'top-center',
		    autoClose: 5000,
		    hideProgressBar: false,
		    closeOnClick: true,
		    pauseOnHover: true,
		    draggable: true,
		    progress: undefined,
		    theme: "dark",
		});
	    }
	} catch (error) {
	    console.error('Login error:', error);
	}
    };

    const handleCloseModal = () => {
	setUsername('');
	setPassword('');
	onClose();
    };

    return(
	<Modal
	    isOpen={isOpen}
	    onRequestClose={handleCloseModal}
	    className='auth-modal'
	    overlayClassName="modal-overlay"
	>
		<h2 className="auth-modal-heading">Login Form</h2>
		<hr/>
		<form onSubmit={handleFormSubmit}>
		    <label htmlFor="username"><b>Username</b></label>
		    <input 
			type="text" 
			placeholder="Enter username" 
			name="username" 
			required 
			value={username}
			onChange={(e) => setUsername(e.target.value)}
		    />
		    <label htmlFor="password"><b>Password</b></label>
		    <input 
			type="password" 
			placeholder="Enter password" 
			name="password" 
			required 
			value={password}
			onChange={(e) => setPassword(e.target.value)}
	    
		    />
		    <button type="submit" className="auth-modal-btn">Login</button>
		</form>
		<button className="cancel-modal-btn"onClick={handleCloseModal}>Close</button>
	</Modal>
    );
};

export default LoginModal;
