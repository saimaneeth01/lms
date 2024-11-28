// MainContent.js
import React from 'react';
// import './MainContent.css';

function MainContent() {
    return (
        <div className="main-content">
            <h1>Welcome to the Dashboard</h1>
            <p>This is your main content area.</p> 
            Add more content here as needed
             {/* import React from 'react' */}

              {/* function One() { */}
              {/* return ( */}
              {/* <div>
              <div class="dashboard">
              <aside class="sidebar">
                <ul>
                <h6> <li><a href="tmy">DashBoard</a></li></h6>
                    <li><a href="one">My Courses</a></li>
                    <li><a href="twoo">Favorite Courses</a></li>
                    <li><a href="three">Recommended Courses</a></li>
                    <li><a href="four">Profile Setting</a></li>
                    <li><a href="five">Change Password</a></li>
                    <li><a href="#" class="logout">Logout</a></li>
                </ul>
              </aside> */}
            <main class="content">
                <h2>My Courses</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created By</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Web Development</td>
                            <td><a href="#">Shaik Siddik</a></td>
                            <td><button class="delete-btn">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        
         </div>
        //  </div>
        //  </div>
    )
}


export default MainContent;
