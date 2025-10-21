import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email === 'test@test.com' && password === 'password') {
            // Login successful - redirect to products
            window.location.href = '/products';
        } else {
            setError('Invalid credentials');
        }
    };

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
