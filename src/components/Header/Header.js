import React from "react";

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
    if (modal.style.display === "block") modal.style.display = "none";
    else {
      modal.style.display = "block";
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
            <a href="#about-container">About</a>
          </li>
          <li
            onClick={toggleMenu}
            className="main-nav__listItem main-nav__listItem--margin-top"
          >
            <a href="#contact-container">Contact</a>
          </li>
          <li
            onClick={toggleMenu}
            className="main-nav__listItem main-nav__listItem--margin-top"
          >
            <a href="#project-container">Portfolio</a>
          </li>
        </ul>
      </nav>
      <nav className="main-nav" id="main-nav">
        <ul className="main-nav__links">
          <li className="main-nav__listItem--logo">
            <a href="/">HHH</a>
          </li>
          <li className="main-nav__listItem">
            <a href="#about-container">About</a>
          </li>
          <li className="main-nav__listItem">
            <a href="#contact-container"> Contact</a>
          </li>
          <li className="main-nav__listItem">
            <a href="#project-container">Projects</a>
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

export default Header;
