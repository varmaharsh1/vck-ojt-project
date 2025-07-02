// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <div>
//     <div className="navbar">
//       <div className="logo">Vivekanand College</div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/courses">Courses</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link className="apply-btn" to="/admission">Apply Now!</Link></li>
//       </ul>
//     </div>
//         
//         </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">Vivekanand College</Link>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        {/* <Link to="/admission">Admission</Link> */}
        <Link to="/contact">Contact</Link>
        <Link className="apply-btn" to="/admission">Apply Now!</Link>
        
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>
    </header>
  );
};

export default Header;


