import React from "react"


const Header = () => {

    

// Get the navbar


// Get the offset position of the navbar


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyNavBar = ()  => {
    const navbar = document.getElementById("main-nav");
    const sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = () => stickyNavBar();


    return (
    <header>

        <nav className="main-nav" id="main-nav">
        <p>hhh</p>
            <ul>
                <li><a href='#'>About</a></li>
                <li><a href="#"> Contact</a></li>
                <li><a href="#">Portfolio</a></li>
            </ul>
        </nav>
    </header>
    )
}


export default Header