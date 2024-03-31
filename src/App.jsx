import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('https://passwordreset-backend-ue70.onrender.com/', { email });
      setMessage('Password reset link sent to your email');
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleForgotPassword} className="reset-button">Reset Password</button>
      <p className="message">{message}</p>
    </div>
  );
};

export default ForgotPassword;
