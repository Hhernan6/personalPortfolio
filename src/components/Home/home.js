import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../footer/footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Project from "../Projects/Projects";

const Home = (props) => {
  return (
    <div>
      <main>
        <Hero />
        <Project project={props.projects}/>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
