import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning  ">
          
  <div class="container-fluid">
    <a class="navbar-brand" href="">online </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Courses">Course</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Aboutus
          ">aboutus</a>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teacher
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/Tsignin">Signin</a></li>
            <li><a class="dropdown-item" href="/Tsignup">Signup</a></li>

            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Dashboard</a></li>

            <li><a class="dropdown-item" href="#">logout</a></li>
          </ul>
        </li>  






        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/SignIn">Signin</a></li>
            <li><a class="dropdown-item" href="/RegistrationForm">Signup</a></li>

            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/Dashboard">Dashboard</a></li>

            <li><a class="dropdown-item" href="#">logout</a></li>
          </ul>
        </li>                                                             
      </ul>
    </div>
  </div>
</nav>
    </div>

    
  )
}

export default Menu ;