import React from 'react'

const  Contact = () => {
return (
    <div className="contact-container">
    
      
        <div className="contact-container__form">
        <h2>Get in Touch with Me</h2>
        <p>Ask me Anything or leave any comments!</p>
        <form>
            <div >
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label htmlFor="firstName">email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" />
            </div>
        </form>
        </div>
        <div className="contact-container__side">
        <p>dnkjdsnfkdjsn</p>
        </div>
     
</div>
)
}

export default Contact