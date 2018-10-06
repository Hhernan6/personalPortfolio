import React from "react";

const Header = () => {
  // Get the navbar

  // Get the offset position of the navbar

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
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

  return (
    <header>
      <nav className="main-nav" id="main-nav">
        
        <ul className="main-nav__links">
        <li className="main-nav__listItem--logo"><a href="#">HHH</a></li>
          <li className="main-nav__listItem">
            <a href="#">About</a>
          </li>
          <li className="main-nav__listItem">
            <a href="#"> Contact</a>
          </li>
          <li className="main-nav__listItem">
            <a href="#">Portfolio</a>
          </li>
        </ul>
        <div className="main-nav__menu-icon"></div>
       
      </nav>
    </header>
  );
};

export default Header;
