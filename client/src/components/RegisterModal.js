import React, {useState} from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const RegisterModal = ({isOpen, onClose}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
	event.preventDefault();

	try {
	    const response = await fetch(`https://www.gagunrk.com/api/register`, {
		method: 'POST',
		headers: {
		    'Content-Type':'application/json',
		},
		body: JSON.stringify({
		    username,
		    email,
		    password,
		}),
	    });

	    if (response.ok) {
		console.log('Register successful!');
		toast.success('User created successfully!', {
		    position: "top-center",
		    autoClose: 5000,
		    hideProgressBar: false,
		    closeOnClick: true,
		    pauseOnHover: true,
		    draggable: true,
		    progress: undefined,
		    theme: "dark",
		});
	    } else {
		console.log('Register failed!');
		toast.error('User already exists', {
		    position: "top-center",
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
	    console.error('Registration error:', error);
	}
    };

    const handleCloseModal = () => {
	setUsername('');
	setEmail('');
	setPassword('');
	onClose();
    };

    return(
	<Modal
	    isOpen={isOpen}
	    onRequestClose={handleCloseModal}
	    className="auth-modal"
	    overlayClassName="modal-overlay"
	>
	    <h2 className="auth-modal-heading">Register Form</h2>
	    <hr />
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
		<label htmlFor="email"><b>Email</b></label>
		<input 
		    type="email" 
		    placeholder="Enter email" 
		    name="email" 
		    required
		    value={email}
		    onChange={(e) => setEmail(e.target.value)}
		/>
		<label for="password"><b>Password</b></label>
		<input 
		    type="password" 
		    placeholder="Enter password" 
		    name="password" 
		    required 
		    value={password}
		    onChange={(e) => setPassword(e.target.value)}
		/>
		<button type="submit" className="auth-modal-btn">Register</button>
	    </form>
	    <button className="cancel-modal-btn" onClick={handleCloseModal}>Close</button>
	</Modal>
    );
};

export default RegisterModal;
