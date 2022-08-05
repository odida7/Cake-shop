import React from 'react'
import con from '../media/con.jpeg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact' style= {{ backgroundImage: `url(${con})`}} >
      <div className='tel'>
        <h1>CONTACT US </h1>
        <div className='for'>
        <form id='contact-form' method='post'>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>

        </form>
        </div>
        
      </div>
    </div>
  )
}

export default Contact;
