import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="#My Courses">My Courses</a>
            <a href="#Favorite Courses">Favorite Courses</a>
            <a href="#Profile Settings">Profile Settings</a>
            <a href="#Password">Change Password</a>
            <a href="#Logout">Logout</a>
        </div>
    );
};

export default Sidebar;
