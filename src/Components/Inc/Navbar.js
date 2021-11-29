import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">My Own Project</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link active">About Us</Link>
        </li>
        <li class="nav-item">
        <Link to="/Contact" class="nav-link active">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;