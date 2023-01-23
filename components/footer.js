import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import footerRgt from "../public/assets/footer-rgt.png";
import footerLogo from "../public/assets/footer-logo.png";
import moment from "../public/assets/moment.png";

export default function Footer() {
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
    <div className="footer">
      <div className="signup">
        {success && (
          <h3 style={{ textAlign: "center" }}>
            Thank you for your submission!
          </h3>
        )}
        {!success && (
          <>
            <h3>Get in touch.</h3>
            <form onSubmit={handleSubmit(onSubmit)} name="google-sheet">
              <div className="flex-form">
                <div className="contact-info">
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
        <div className="desktop-bottom">
          <div className="desktop-images">
            <Image src={footerRgt} alt={"Real Good Touring"} />
            <Image src={footerLogo} alt={"Creator Clash 2"} />
          </div>
          <div className="cheeky-socials">
            <div className="fight-card-matchup-socials">
              <a
                href="https://www.tiktok.com/@creatorclashofficial?lang=en"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={tiktok} alt={"Tik tok"} />
              </a>
              <a
                href="https://www.instagram.com/thecreatorclash/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={insta} alt={"Instagram"} />
              </a>
              <a
                href="https://twitter.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={twitter} alt={"Twitter"} />
              </a>
            </div>
          </div>
        </div>
        <div className="moment">
          <p>Broadcast live on</p>
          <Image src={moment} alt={"Moment"} />
        </div>
      </div>
    </div>
  );
}
