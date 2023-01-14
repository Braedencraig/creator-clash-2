/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Announcers() {
  const announcers = [
    {
      fullName: "MoistCr1tikal",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "JACKSEPTICEYE",
      bio: "Pre/Post-fight Show Host",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "MARKIPLIER",
      bio: "Pre Fight Interviews",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "ESFAND",
      bio: "Dressing Room Interviews",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "Tony Jefferies",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "Wade Plemons",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "Amouranth",
      bio: "Pre Fight Interviews",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
      },
    },
    {
      fullName: "Matt Watson",
      bio: "National Anthem Performer",
      img: "/assets/announcer.png",
      socials: {
        tiktok: "https://www.tiktok.com",
        insta: "https://www.instagram.com",
        twitter: "https://twitter.com",
        twitch: "https://twitch.com",
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
                <a href={announcer.socials.twitch}>
                  <img src="/assets/twitch.png" alt="Twitch" />
                </a>
              </div>
            </div>
          );
        })}
        <div className="announcer opacity-none">
          <img src={announcers[0].img} alt="Announcer" />
          <h3>{announcers[0].fullName}</h3>
          <p>{announcers[0].bio}</p>
          <div className="announcer-socials">
            <a href={announcers[0].socials.tiktok}>
              <img src="/assets/tiktok.png" alt="TikTok" />
            </a>
            <a href={announcers[0].socials.insta}>
              <img src="/assets/insta.png" alt="Instagram" />
            </a>
            <a href={announcers[0].socials.twitter}>
              <img src="/assets/twitter.png" alt="Twitter" />
            </a>
            <a href={announcers[0].socials.twitch}>
              <img src="/assets/twitch.png" alt="Twitch" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
