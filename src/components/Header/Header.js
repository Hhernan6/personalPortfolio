import React from "react";
import { NavLink, withRouter } from "react-router-dom";
const Header = () => {
  const stickyNavBar = () => {
    const navbar = document.getElementById("main-nav");
    const sticky = navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };
  window.onscroll = () => stickyNavBar();

  const toggleMenu = () => {
    const modal = document.getElementById("mobile-nav");
    
    if ( modal.style.marginLeft === '-500px' || modal.style.marginLeft === '') 
    modal.style.marginLeft = '0';
    else {
      modal.style.marginLeft = "-500px";
    }
  };

  return (
    <header>
      <nav className="mobile-nav" id="mobile-nav">
        <div
          className=" mobile-nav__menu-icon--mobile"
          id="menu-icon"
          onClick={toggleMenu}
        />
        <ul>
          <li onClick={toggleMenu} className="main-nav__listItem ">
            <NavLink to="/About">About</NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="main-nav__listItem main-nav__listItem--margin-top"
          >
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li
            onClick={toggleMenu}
            className="main-nav__listItem main-nav__listItem--margin-top"
          >
            <NavLink to="/Projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="main-nav" id="main-nav">
        <ul className="main-nav__links">
          <li className="main-nav__listItem--logo">
            <NavLink to="/">HHH</NavLink>
          </li>
          <li className="main-nav__listItem">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="main-nav__listItem">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li className="main-nav__listItem">
            <NavLink to="/Projects">Projects</NavLink>
          </li>
        </ul>
        <div
          className="main-nav__menu-icon"
          id="menu-icon"
          onClick={toggleMenu}
        />
      </nav>
    </header>
  );
};

export default withRouter(Header);
