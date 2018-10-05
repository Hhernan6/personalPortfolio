import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../footer/footer";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <main>
        <Hero />

        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
