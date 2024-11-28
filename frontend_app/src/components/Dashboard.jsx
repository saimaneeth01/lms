// import React from 'react';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Dashboard.css"

// const Dashboard = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light ">
//             <ul className="navbar-nav ">
//                 <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
//                 <li className="nav-item"><a className="nav-link" href="#">My Courses</a></li>
//                 <li className="nav-item"><a className="nav-link" href="#">Messages</a></li>
//                 <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
//                 <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default Dashboard;
    // DashboardLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default Dashboard;
