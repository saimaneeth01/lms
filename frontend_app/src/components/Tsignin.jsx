import React, { useState } from 'react';
// import './Tsignin.css';



function Tsignin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // Clear any error and proceed with form submission logic
    setError('');
    console.log('Email:', email);
    console.log('Password:', password);
    
    // You can add authentication logic here
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button   type="submit" className="signin-button">Sign In</button>
        <br /><br />
        <button  type="submit" onClick={()=>handleSubmit()} herf = "#"  className='signup-button' > Sign Up</button>
      </form>
    </div>
  );
}

export default Tsignin;
