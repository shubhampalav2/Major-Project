import React from 'react'
import './Contact.css'
import {FaPhone,FaAddressBook} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
const App = () => {
  return (
   <>
  <section className="contact">
  <div className="content">
  <h2>Contact Us</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus nostrum inventore
     aperiam doloremque voluptatum aliquam! Tempore at assumenda iste culpa adipisci
      beatae nisi, incidunt eius! Voluptate laudantium placeat obcaecati?</p>
  </div>
  <div className="container">
    <div className="contactInfo">
    <div className="box">
      <div className="icon">
        <FaAddressBook/>
      </div>
      <div className="text">
        <h3>Address</h3>
        <p>4671 Sugar Camp Road,<br></br>Owatonna,Minnesota,<br></br>55060</p>
      </div>
    </div>
    <div className="box">
      <div className="icon">
     <FaPhone/>
      </div>
      <div className="text">
        <h3>Phone</h3>
        <p>+91 974756094</p>
      </div>
    </div>

    <div className="box">
      <div className="icon">
      <FiMail></FiMail>
      </div>
      <div className="text">
        <h3>Email</h3>
        <p>supportfarming@gmail.com</p>
      </div>
    </div>
    <div className="contactForm">
    <form>
    <h2>Send Message</h2>
    <div className="inputBox">
    <span>Full Name</span>
    <input id="name" type="text" required/>
    </div>
    <div className="inputBox">
    <span>Email</span>
    <input id="name" type="email" required/>
    </div>
    <div className="inputBox">
    <span>Type your Message</span>
    <textarea id="name" required></textarea>
    </div>
    <div className="inputBox">
    <input type="submit" value="Send"/>
    </div>
    </form>
    </div>
    </div>

  </div>
  </section>
   </>
  )
}

export default App;
