/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { VT323 } from "@next/font/google";
const robo = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="footer">
      <div className="signup">
        <div className="cheeky-mobile">
          <div>
            <ul>
              <li>
                <Link href="/#charity">Charity</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/sponsorships">Sponsorships</Link>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Merch
                </a>
              </li>
            </ul>
          </div>
          <div className="cheeky-socials">
            <div className="fight-card-matchup-socials">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/tiktok.png" alt="TikTok" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/insta.png" alt="Instagram" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" />
              </a>
            </div>
            <a className="contact" href="mailto:">
              Contact
            </a>
          </div>
        </div>
        <div className="border">
          <div className="signup-info">
            <h3 className={robo.className}>Real Good Touring Email Signup?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="signup-form">
            <div className="form">
              <div className="input-wrapper">
                <input type="text" placeholder="Email Address" />
                <p>
                  By clicking “Sign up” you agree to recieve communication from
                  Real Good Touring.
                </p>
              </div>
              <button>Sign Up</button>
            </div>
            <div className="mobile-images">
              <img src="/assets/footer-rgt.png" alt="Real Good Touring" />
              <img src="/assets/footer-logo.png" alt="Creator Clash 2" />
            </div>
          </div>
        </div>
        <div className="desktop-bottom">
          <div className="desktop-images">
            <img src="/assets/footer-rgt.png" alt="Real Good Touring" />
            <img src="/assets/footer-logo.png" alt="Creator Clash 2" />
          </div>
          <div className="desktop-footer-socials">
            <a href="mailto:">Contact</a>
            <div className="fight-card-matchup-socials">
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/tiktok.png" alt="TikTok" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/insta.png" alt="Instagram" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <img src="/assets/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
