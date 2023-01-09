import React, { useState } from "react";
import { VT323 } from "@next/font/google";
import { useForm } from "react-hook-form";

const robo = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE;

  const onSubmit = (data) => {
    if (data) {
      const form = document.forms["google-sheet"];
      fetch(scriptUrl, { method: "POST", body: new FormData(form) })
        .then((response) => setSuccess(true))
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-form-wrapper">
        {success && (
          <h3 className={robo.className} style={{ textAlign: "center" }}>
            Thank you for your submission!
          </h3>
        )}
        {!success && (
          <>
            <h3 className={robo.className}>Contact</h3>
            <form onSubmit={handleSubmit(onSubmit)} name="google-sheet">
              <div className="flex-form">
                <div className="contact-info">
                  <div className="input-label">
                    <label htmlFor="email">Email address*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      name="Email"
                      required
                    />
                  </div>
                  <div className="input-label">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      required
                      name="Name"
                    />
                  </div>
                </div>
                <div className="contact-info message-margin">
                  <div className="input-label">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      name="Message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="contact-button">
                <button>Submit message</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
