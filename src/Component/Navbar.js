import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const style={
    color: 'black',
    backgroundColor: 'blue',}
  
  


  return (
    <nav className="navbar fixed-top navbar-expand-lg  " style={style}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-3 text-light" to="/">
          News App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Business" type="submit" >Business</Link></li>

            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Entertainment"  type="submit" >Entertainment</Link></li>
            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Health" type="submit" >Health</Link></li>
            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Science" type="submit" >Science</Link></li>
            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Sports" type="submit" >Sports</Link></li>
            <li className="nav-item">
              <Link className="nav-link active text-light mx-3" to="/Technology" type="submit" >Technology</Link></li>
          </ul>



        </div>
      </div>
    </nav>
  );
}
