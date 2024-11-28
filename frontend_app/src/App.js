import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import PythonC from './components/PythonC';
import Aboutus from './components/Aboutus';
import Courses from './components/Courses';
import Tsignin from './components/Tsignin';
import Tsignup from './components/Tsignup';





function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Home" element={<Home />} />
        <Route path= "/SignIn" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path='/PythonC'element={<PythonC/>}/>
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Tsignin" element={<Tsignin />} />
        <Route path="/Tsignup" element={<Tsignup />} />
      
      </Routes>

    </Router>
  );
}

export default App;
