/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="signup">
        <div className="cheeky-mobile">
          <div className="revision-footer">
            <ul>
              <li>
                <Link href="/#charity">Charity</Link>
              </li>
              <li>
                <Link href="/faq">FAQ&apos;s</Link>
              </li>
              <li>
                <Link href="/sponsorships">Sponsorships</Link>
              </li>
            </ul>
            <ul>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Merch
                </a>
              </li>
              <li>
                <a href="mailto:creatorclash@realgoodtouring.com">Contact</a>
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
          </div>
        </div>
        <div className="desktop-bottom">
          <div className="desktop-images">
            <img src="/assets/footer-rgt.png" alt="Real Good Touring" />
            <img src="/assets/footer-logo.png" alt="Creator Clash 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
