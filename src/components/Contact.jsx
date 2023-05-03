import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-content'>
      <section className='contact'>
        <div className='contact-info'>
          <h2>Contact Information</h2>
          <h3>Address:</h3>
          <p>
            6626b Hastings St <br />
            Unit B Kensington Square Plaza <br />
            Burnaby, BC V58 1R7
          </p>
          <h3>Phone:</h3>
          <p>604-299-0449</p>
          <iframe title='6626b Hastings St, Burnaby, BC V5B 1S2' width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6626b%20Hastings%20St%20Unit%20B%20Kensington%20Square%20Plaza+(We%20Cater%20Subs)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure area map
            </a>
          </iframe>
        </div>
        <div className='contact-form'>
          <h2>Get in touch!</h2>
          <h4>We're happy to hear from you. Please send us your contact details below.</h4>
          <form action="/contact-us-subway" method='POST'>
            <div>
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input type="text" name='fullName' required />
            </div>
            <div>
              <label htmlFor="email">Email <span>*</span></label>
              <input type="text" name='email' required />
            </div>
            <div>
              <label htmlFor="phone">Phone Number <span>*</span></label>
              <input type="tel" name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
            </div>
            <div>
              <label htmlFor="subject">Subject (Choose One) <span>*</span></label>
              <select name='subject' required>
                <option value="online order">Online Order</option>
                <option value="school lunch order">School Lunch Order</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
            <label htmlFor="message">Message <span>*</span></label>
            <textarea name="message" required></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
};

export default Contact;