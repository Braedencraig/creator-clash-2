/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Announcers() {
  const announcers = [
    {
      fullName: "I Did A Thing",
      bio: "YouTuber, Handyman, Communist",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      fullName: "I Did A Thing",
      bio: "YouTuber, Handyman, Communist",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
      },
    },
    {
      fullName: "I Did A Thing",
      bio: "YouTuber, Handyman, Communist",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
      },
    },
  ];
  return (
    <div className="matchups annoucers-wrapper">
      <h2>Announcers</h2>
      <div className="announcers">
        {announcers.map((announcer) => {
          return (
            <div className="announcer" key={announcer.fullname}>
              <img src={announcer.img} alt="Announcer" />
              <h3>{announcer.fullName}</h3>
              <p>{announcer.bio}</p>
              <div className="announcer-socials">
                <a href={announcer.socials.tiktok}>
                  <img src="/assets/tiktok.png" alt="TikTok" />
                </a>
                <a href={announcer.socials.insta}>
                  <img src="/assets/insta.png" alt="Instagram" />
                </a>
                <a href={announcer.socials.twitter}>
                  <img src="/assets/twitter.png" alt="Twitter" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
