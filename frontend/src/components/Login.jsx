import React, { useState } from 'react';
import MainPage from "./MainPage";
import './components_css/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // check if the login credentials are correct
        if (email === 'test@test.com' && password === 'password') {
            // Login successful - change login state to true to allow for redirect
            setIsLoggedIn(true);
        } else {
            setError('Invalid credentials');
        }
    };

    // if log in passes and isLoggedIn state is true, redirect to the apps main page
    if(isLoggedIn) {
        return <MainPage />
    }

    return (
        <div className="login-container">
            <div className="login-header">
                <h1>React Mini Shop 🛍️</h1>
                <p>Admin Login</p>
            </div>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                
                <button type="submit" className="login-btn">Login</button>
            </form>

            <div className="test-credentials">
                <h4>Test Credentials:</h4>
                <p><strong>Email:</strong> test@test.com</p>
                <p><strong>Password:</strong> password</p>
            </div>
        </div>
    );
};

export default Login;
