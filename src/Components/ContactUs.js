import React from "react";

function ContactUs() {
  return (
    <section className="contact-area" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-heading text-black h2">
            <h2>CONTACT US</h2>
          </div>
          <div className="contact-flex-container">
            <div className="contact-address">
              <h4 className="contact-title">Address</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et{" "}
              </p>
              <ul>
                <li className="h-addres">
                  <i className="fa fa-home"></i>300 Kutubkhallpoint <br />
                  Telengana, India
                </li>
                <li>
                  <i className="fa fa-phone"></i>+91-7680922977
                </li>
                <li>
                  <i className="fa fa-envelope"></i>care@haarogya.com
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <h4 className="contact-title">Get In Touch</h4>
              <form action="#">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Name *"
                />
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Your Email address*"
                />
                <input
                  type="text"
                  className="input"
                  name="subject"
                  placeholder="Your Subject*"
                />

                <textarea
                  name="msg"
                  className="input"
                  id="msg"
                  placeholder="Your Message*"
                ></textarea>
                <input type="submit" id="send" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
