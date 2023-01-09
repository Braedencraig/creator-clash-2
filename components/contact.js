import React from "react";
import { VT323 } from "@next/font/google";
const robo = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="contact-form">
      <div className="contact-form-wrapper">
        <h3 className={robo.className}>Contact</h3>
        <form action="">
          <div className="contact-info">
            <div className="input-label">
              <label htmlFor="email">Email address*</label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="input-label">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Name" />
            </div>
          </div>
          <div className="contact-info message-margin">
            <div className="input-label">
              <label htmlFor="message">Message*</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <div className="contact-button">
        <button>Submit message</button>
      </div>
    </div>
  );
}
