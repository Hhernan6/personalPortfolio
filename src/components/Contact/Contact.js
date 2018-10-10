import React from "react";
import Elevator from "elevator.js";
const Contact = () => {
  const elevatorFunction = () => {
    let elevator = new Elevator({
      element: document.querySelector(".elevator-btn"),
      duration: 2000 // milliseconds
    });

    elevator.elevate();
  };

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="contact-container" id="contact-container">
      <div className="contact-container__form">
        <h2>Get in Touch with Me</h2>
        <p>Ask me Anything or leave any comments!</p>
        <form>
          <div className="form__inputs">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" required />
          </div>
          <div className="form__inputs">
            <label htmlFor="lasttName">Last Name</label>
            <input type="text" name="lastName" required />
          </div>
          <div className="form__inputs">
            <label htmlFor="firstName">email</label>
            <input type="email" name="email" required />
          </div>

          <div className="form__inputs">
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" required />
          </div>
          <input className="submitBtn" type="submit" value="send" />
        </form>
      </div>
      <div className="contact-container__side">
        <div className="contact-container__side__info">
          <div className="contact-container__email-icon" />
          <a href="mailto:horacio.hhh1@gmail.com">horacio.hhh1@gmail.com</a>
        </div>

        <div className="contact-container__side__info">
          <div className="contact-container__phone-icon" />
          <a href="tel:7043094517">704-309-4517</a>
        </div>
        <div onClick={() => elevatorFunction()} className="elevator-btn" />
      </div>
    </div>
  );
};

export default Contact;
