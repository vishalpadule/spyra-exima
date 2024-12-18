import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="content">
          <h2>Get In Touch With Us</h2>
          <p>
            For inquiries, feedback, or support, please fill out the form below,
            and we’ll get back to you as soon as possible.
          </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Trimurti Chowk, Ambegaon Pathar, Pune.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>1234567890</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>contact@spyraexim.in</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  type="text"
                  name="Fullname"
                  required="required"
                  placeholder="FullName"
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name="Email"
                  required="required"
                  placeholder="Email"
                />
              </div>
              <div className="inputBox">
                <textarea
                  type="textarea"
                  name="Type Your Message"
                  id="Message"
                  required="required"
                  placeholder="Type Your Message"
                ></textarea>
              </div>
              <div className="inputBox">
                <input type="Submit" name="Submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
