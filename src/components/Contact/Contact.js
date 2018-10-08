import React from "react";
import Elevator from 'elevator.js'
const Contact = () => {

    // window.onload = () => {
    //     let elevator = new Elevator({
    //       element: document.querySelector('.elevator-btn'),
    //       duration: 2000 // milliseconds
    //     });
    //     elevator.elevate();
    //   }
  return (
    <div className="contact-container" id="contact-container">
      <div className="contact-container__form">
        <h2>Get in Touch with Me</h2>
        <p>Ask me Anything or leave any comments!</p>
        <form>
          <div className="form__inputs">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" />
          </div>
          <div className="form__inputs">
            <label htmlFor="lasttName">Last Name</label>
            <input type="text" name="lastName" />
          </div>
          <div className="form__inputs">
            <label htmlFor="firstName">email</label>
            <input type="email" name="email" />
          </div>

          <div className="form__inputs">
            <label htmlFor="message">Message</label>
            <textarea type="text" name="message" />
          </div>
          <input className="submitBtn" type="submit" value="send" />
        </form>
      </div>
      <div className="contact-container__side">
        <p>
          {" "}
          <span className="contact-container__email-icon" />
          horacio.hhh1@gmail.com
        </p>

        <p>
          <span className="contact-container__phone-icon" />
          704-309-4517
        </p>
      </div>
        <button className="elevator-btn">go up</button>
    </div>
 
  );
};

export default Contact;
