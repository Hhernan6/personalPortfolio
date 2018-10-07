import React from 'react'

const  Contact = () => {
return (
    <div className="contact-container">
    
      
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
       
        <p> <span className="contact-container__email-icon"></span>horacio.hhh1@gmail.com</p>
       
       <p><span className="contact-container__phone-icon"></span>704-309-4517</p>
        </div>
     
</div>
)
}

export default Contact