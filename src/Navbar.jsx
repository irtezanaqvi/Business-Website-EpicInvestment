import React from "react";
import './App.css';
import epic from './epic.jpg';
import {NavLink} from "react-router-dom";


function Navbar(){
return(
<nav className="navbar navbar-expand-lg navbar-dark  myclass">
  <NavLink className="navbar-brand" to="/"><img src={epic}></img></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">Service</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/work">Work</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Case Studies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="#">Contacts</a>
      </li>
      
     
    </ul>
    <div className="Phone">+91 866008 8833</div>
    <button className="btn btn-light my-2 my-sm-0 customcontact" type="submit">Contact us</button>
    <div className="parentform">
    <form className="form-horizontal my-2 my-md-0 search-form" formGroup="searchForm" role="form">
          <div className="input-group">
            <input type="text" class="form-control" formControlName="searchText" size="50"/>
            <span className="input-group-btn fa fa-search form-control-feedback">
            </span>
        </div>
      </form>
      </div>
    

  </div>
</nav>

)


}

export default Navbar;