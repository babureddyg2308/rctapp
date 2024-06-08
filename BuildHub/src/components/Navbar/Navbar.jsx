import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [location, setLocation] = useState("BANGLORE");

  const handleLocationChange = () => {
    const newLocation = prompt("Enter new location:", location.toUpperCase());
    if (newLocation) {
      setLocation(newLocation.toUpperCase());
    }
  };

  return (
    <section>
      <header className="Header flex" style={{color:'white'}}>
        <div className="image">
          <Link to="/"><img src="../contents/BuildHub_logo.jpeg" alt="" style={{width:'12vw',marginTop:'25px',borderRadius:'10px'}}/></Link>
        </div>
        <div className="navlist flex">
          <li className="navItem">
            <Link to="/fitnes" className="navLink">
              FITNESS
            </Link>
          </li>
          <li className="navItem">
            <Link to="/transform" className="navLink">
              TRANSFORM
            </Link>
          </li>
          <li className="navItem">
            <Link to="/care" className="navLink">
              CARE
            </Link>
          </li>
          <li className="navItem">
            <Link to="/mind" className="navLink">
              MIND
            </Link>
          </li>
          <li className="navItem">
            <Link to="/store" className="navLink">
              STORE
            </Link>
          </li>
        </div>
        <div className="nav-right">
          <li className="nav-link" onClick={handleLocationChange}>
            <FaMapMarkerAlt />
            {location}
          </li>
          <button className="btn">GET APP</button>
          <Link to="/signin"><FaUser className="login-icon" /></Link>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
