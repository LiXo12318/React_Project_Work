import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ErrorMessage from './ErrorMessage';
import LoginForm from './LoginForm';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);

    try {
      login(email, password); 
      navigate('/products');
    } catch (err) {
      setError(err.message); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>Login</h1>
        <ErrorMessage error={error} />
        <LoginForm 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
        />
        <p>
          Don't have an account? 
          <Link to="/register" className="btn-link">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
