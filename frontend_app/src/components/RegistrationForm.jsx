// components/RegistrationForm.js

import React, { useState } from 'react';
import './RegistrationForm.css';
import { FaCheckCircle, FaTimesCircle, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.acceptedTerms) {
      formErrors.acceptedTerms = 'You must accept the terms and privacy policy';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptedTerms: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="registration-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={`form-field ${errors.name ? 'error' : 'success'}`}>
          <FaUser />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name ? <FaTimesCircle className="icon error-icon" /> : formData.name && <FaCheckCircle className="icon success-icon" />}
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className={`form-field ${errors.email ? 'error' : 'success'}`}>
          <FaEnvelope />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email ? <FaTimesCircle className="icon error-icon" /> : formData.email && <FaCheckCircle className="icon success-icon" />}
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className={`form-field ${errors.password ? 'error' : 'success'}`}>
          <FaLock />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password ? <FaTimesCircle className="icon error-icon" /> : formData.password && <FaCheckCircle className="icon success-icon" />}
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        <div className={`form-field ${errors.confirmPassword ? 'error' : 'success'}`}>
          <FaLock />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword ? <FaTimesCircle className="icon error-icon" /> : formData.confirmPassword && <FaCheckCircle className="icon success-icon" />}
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <div className="terms">
          <input
            type="checkbox"
            name="acceptedTerms"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          <label>I accept terms of privacy policy</label>
          {errors.acceptedTerms && <p className="error-message">{errors.acceptedTerms}</p>}
        </div>

        <button type="submit" className="submit-button">Create Account</button>
      </form>
      <p className="signin">Already have an account? <a href="#signin">Sign In</a></p>
    </div>
  );
}

export default RegistrationForm;


