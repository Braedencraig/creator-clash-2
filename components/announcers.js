/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Announcers() {
  const announcers = [
    {
      fullName: "MoistCr1tikal",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/user/penguinz0",
        insta: "http://instagram.com/MoistCr1tikal",
        twitter: "https://twitter.com/MoistCr1TiKaL",
        twitch: "https://www.twitch.tv/moistcr1tikal",
      },
    },
    {
      fullName: "JACKSEPTICEYE",
      bio: "Pre/Post-fight Show Host",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g",
        insta: "http://instagram.com/jacksepticeye",
        twitter: "https://twitter.com/Jacksepticeye",
        twitch: "https://www.twitch.tv/jacksepticeye",
      },
    },
    {
      fullName: "MARKIPLIER",
      bio: "Pre Fight Interviews",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/channel/UC7_YxT-KID8kRbqZo7MyscQ",
        tiktok: "https://www.tiktok.com/@markiplier",
        insta: "https://www.instagram.com/markiplier/",
        twitter: "https://twitter.com/markiplier",
      },
    },
    {
      fullName: "ESFAND",
      bio: "Dressing Room Interviews",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/c/EsfandTV?app=desktop",
        insta: "https://www.instagram.com/esfandtv",
        twitter:
          "https://twitter.com/EsfandTV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        twitch: "https://www.twitch.tv/esfandtv",
      },
    },
    {
      fullName: "Tony Jefferies",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/c/TonyJeffries1/videos",
        insta: "http://instagram.com/Tony_Jeffries",
        twitter:
          "https://twitter.com/Tony_Jeffries?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    },
    {
      fullName: "Wade Plemons",
      bio: "Commentary",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/c/TheWADEConcept",
        insta: "https://www.instagram.com/wadeplem/",
        twitter: "https://twitter.com/WadePlem",
      },
    },
    {
      fullName: "Amouranth",
      bio: "Pre Fight Interviews",
      img: "/assets/announcer.png",
      socials: {
        insta: "https://www.instagram.com/kaitgonewild/",
        twitter:
          "https://twitter.com/Amouranth?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        twitch: "https://www.twitch.tv/amouranth",
      },
    },
    {
      fullName: "Matt Watson",
      bio: "National Anthem Performer",
      img: "/assets/announcer.png",
      socials: {
        youtube: "https://www.youtube.com/channel/UCobJseYd3Z4Kd9igg8PWXpQ",
        insta: "http://instagram.com/matthwatson",
        twitter: "https://twitter.com/matthwatson",
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
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src={announcer.img}
                alt="Announcer"
              />
              <h3>{announcer.fullName}</h3>
              <p>{announcer.bio}</p>
              <div className="announcer-socials">
                {announcer.socials.tiktok && (
                  <a href={announcer.socials.tiktok}>
                    <img
                      fetchpriority="low"
                      loading="lazy"
                      decoding="async"
                      src="/assets/tiktok.png"
                      alt="TikTok"
                    />
                  </a>
                )}
                {announcer.socials.youtube && (
                  <a href={announcer.socials.youtube}>
                    <img
                      fetchpriority="low"
                      loading="lazy"
                      decoding="async"
                      src="/assets/youtube.png"
                      alt="YouTube"
                    />
                  </a>
                )}
                {announcer.socials.insta && (
                  <a href={announcer.socials.insta}>
                    <img
                      fetchpriority="low"
                      loading="lazy"
                      decoding="async"
                      src="/assets/insta.png"
                      alt="Instagram"
                    />
                  </a>
                )}
                {announcer.socials.twitter && (
                  <a href={announcer.socials.twitter}>
                    <img
                      fetchpriority="low"
                      loading="lazy"
                      decoding="async"
                      src="/assets/twitter.png"
                      alt="Twitter"
                    />
                  </a>
                )}
                {announcer.socials.twitch && (
                  <a href={announcer.socials.twitch}>
                    <img
                      fetchpriority="low"
                      loading="lazy"
                      decoding="async"
                      src="/assets/twitch.png"
                      alt="Twitch"
                    />
                  </a>
                )}
              </div>
            </div>
          );
        })}
        <div className="announcer opacity-none">
          <img
            fetchpriority="low"
            loading="lazy"
            decoding="async"
            src={announcers[0].img}
            alt="Announcer"
          />
          <h3>{announcers[0].fullName}</h3>
          <p>{announcers[0].bio}</p>
          <div className="announcer-socials">
            <a href={announcers[0].socials.youtube}>
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/youtube.png"
                alt="YouTube"
              />
            </a>
            <a href={announcers[0].socials.insta}>
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
            <a href={announcers[0].socials.twitter}>
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/twitter.png"
                alt="Twitter"
              />
            </a>
            <a href={announcers[0].socials.twitch}>
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/twitch.png"
                alt="Twitch"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
