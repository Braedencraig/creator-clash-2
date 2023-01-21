/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Accordion from "./accordion";

export default function Matchups() {
  const [active, isActive] = useState("all");

  const categories = [
    "all",
    "comedy",
    "gaming",
    "wrestling",
    "music",
    "podcasting",
  ];

  const matchups = [
    {
      fighter1: {
        name: "idubbbz",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'1",
        weight: "168 LB",
        zodiac: "Libra",
        img: "/assets/goodguyfitz.png",
        class: "light heavyweight",
        socials: {
          insta: "https://www.instagram.com/idubbbz/",
          youtube: "https://www.youtube.com/c/idubbbztv",
          twitter: "https://twitter.com/Idubbbz",
        },
      },
      fighter2: {
        name: "Alex Wasabi",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'11",
        weight: "168 LB",
        zodiac: "Aries",
        img: "/assets/ididathing.png",
        class: "light heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@alexwassabi?lang=en",
          insta: "https://www.instagram.com/alexwassabi/?hl=en",
          youtube: "https://www.youtube.com/@Wassabi",
          twitter: "https://twitter.com/AlexWassabi",
        },
      },
      class: ["comedy"],
    },
    {
      fighter1: {
        name: "John Hennigan",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'0",
        weight: "200 LB+",
        zodiac: "Libra",
        img: "/assets/goodguyfitz.png",
        class: "super heavyweight",
        socials: {
          insta: "http://instagram.com/johnhennigan",
          twitter:
            "https://twitter.com/TheRealMorrison?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Harley Morenstein",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'7",
        weight: "200 LB+",
        zodiac: "Virgo",
        img: "/assets/ididathing.png",
        class: "super heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@harleyplays",
          insta: "http://instagram.com/harleyplays",
          youtube: "https://www.youtube.com/c/HarleyMorenstein",
          twitter: "https://twitter.com/HarleyPlays",
        },
      },
      class: ["wrestling", "comedy"],
    },
    {
      fighter1: {
        name: "Ididathing",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'3",
        weight: "200 LB+",
        zodiac: "Leo",
        img: "/assets/goodguyfitz.png",
        class: "heavyweight",
        socials: {
          youtube: "https://www.youtube.com/c/Ididathing",
          twitter: "https://twitter.com/ididathing1",
        },
      },
      fighter2: {
        name: "Fitz",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'3",
        weight: "200 LB+",
        zodiac: "Virgo",
        img: "/assets/ididathing.png",
        class: "heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@fitz?lang=en",
          insta: "https://www.instagram.com/goodguyfitz/",
          youtube: "https://www.youtube.com/c/Fitz",
          twitter: "https://twitter.com/GoodGuyFitz",
        },
      },
      class: ["comedy", "gaming"],
    },
    {
      fighter1: {
        name: "Froggy Fresh",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'2",
        weight: "130 LB",
        zodiac: "Capricorn",
        img: "/assets/goodguyfitz.png",
        class: "featherweight",
        socials: {
          insta: "https://www.instagram.com/iamfroggyfresh/?hl=en",
          youtube: "https://www.youtube.com/channel/UC77bLHly_nVZJzL-nXSO2XQ",
          twitter: "https://twitter.com/iAmFroggyFresh",
        },
      },
      fighter2: {
        name: "Chris Ray Gun",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'4",
        weight: "130 LB",
        zodiac: "Sagittarius",
        img: "/assets/ididathing.png",
        class: "featherweight",
        socials: {
          tiktok: "https://www.tiktok.com/@chrisraygun?lang=en",
          twitch: "https://www.twitch.tv/chrisraygun",
          youtube: "https://www.twitch.tv/chrisraygun",
          twitter: "https://twitter.com/ChrisRGun",
        },
      },
      class: ["music", "gaming"],
    },
    {
      fighter1: {
        name: "YodelingHaley",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'8",
        weight: "140 LB",
        zodiac: "Libra",
        img: "/assets/goodguyfitz.png",
        class: "lightweight",
        socials: {
          tiktok: "https://www.tiktok.com/@yodelinghaley?lang=en",
          insta: "https://www.instagram.com/yodelinghaley/?hl=en",
          youtube: "https://www.youtube.com/channel/UCsNOMACOZuOMd3snYwjlX9w",
        },
      },
      fighter2: {
        name: "Marisha Ray Huber",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'6",
        weight: "140 LB",
        zodiac: "Taurus",
        img: "/assets/ididathing.png",
        class: "lightweight",
        socials: {
          insta: "https://www.instagram.com/marisha_ray/?hl=en",
          twitter:
            "https://twitter.com/Marisha_Ray?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      class: ["comedy", "gaming"],
    },
    {
      fighter1: {
        name: "Myth",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'11",
        weight: "185 LB",
        zodiac: "Gemini",
        img: "/assets/goodguyfitz.png",
        class: "light heavyweight",
        socials: {
          insta: "https://www.instagram.com/mythig_/?hl=en",
          twitch: "https://www.twitch.tv/myth",
          youtube: "https://www.youtube.com/channel/UCvQczq3aHiHRBGEx-BKdrcg",
          twitter: "https://twitter.com/myth_",
        },
      },
      fighter2: {
        name: "Hundar",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'11",
        weight: "185 LB",
        zodiac: "Cancer",
        img: "/assets/ididathing.png",
        class: "light heavyweight",
        socials: {
          insta: "https://www.instagram.com/breadhungry/?hl=en",
          twitch: "https://www.twitch.tv/muscleparty",
          youtube: "https://www.youtube.com/channel/UCfxiHyr_Aie9Cl2qQvnAaBg",
          twitter: "https://twitter.com/Hundar",
        },
      },
      class: ["comedy", "gaming"],
    },
    {
      fighter1: {
        name: "Arin Hanson",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'2",
        weight: "195 LB",
        zodiac: "Capricorn",
        img: "/assets/goodguyfitz.png",
        class: "heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@gamegrumps",
          insta: "https://www.instagram.com/gamegrumps/",
          youtube: "https://www.youtube.com/user/GameGrumps/videos?app=desktop",
          twitter:
            "https://twitter.com/egoraptor?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Jarvis Johnson",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'1",
        weight: "195 LB",
        zodiac: "Taurus",
        img: "/assets/ididathing.png",
        class: "heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@jarv.s",
          insta: "https://www.instagram.com/jarvis/",
          youtube: "https://www.youtube.com/c/jarvis",
          twitter: "https://twitter.com/jarvis",
        },
      },
      class: ["gaming", "comedy"],
    },
    {
      fighter1: {
        name: "Alanah Pearce",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'9",
        weight: "165 LB",
        zodiac: "Virgo",
        img: "/assets/goodguyfitz.png",
        class: "middleweight",
        socials: {
          tiktok: "https://www.tiktok.com/@charalanahzard?lang=en",
          insta: "https://www.instagram.com/charalanahzard/",
          youtube: "https://www.youtube.com/channel/UCKpBmnEfSy20al-Fk_2YzVA",
          twitter: "https://twitter.com/charalanahzard",
        },
      },
      fighter2: {
        name: "RIPMika",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'9",
        weight: "165 LB",
        zodiac: "Virgo",
        img: "/assets/ididathing.png",
        class: "middleweight",
        socials: {
          tiktok: "https://www.tiktok.com/@ripmika?lang=en",
          insta: "https://www.instagram.com/ripmika/",
          twitch: "https://www.twitch.tv/ripmika",
          twitter:
            "https://twitter.com/RIPmika?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      class: ["gaming"],
    },
    {
      fighter1: {
        name: "CrankGamePlays",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'8",
        weight: "155 LB",
        zodiac: "Scorpio",
        img: "/assets/goodguyfitz.png",
        class: "middleweight",
        socials: {
          tiktok: "https://www.tiktok.com/@crankgameplays?lang=en",
          insta: "https://www.instagram.com/crankgameplays/?hl=en",
          youtube: "https://www.youtube.com/c/crankgame",
          twitter: "https://twitter.com/CrankGameplays",
        },
      },
      fighter2: {
        name: "Leonhart",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'10",
        weight: "155 LB",
        zodiac: "Aquarius",
        img: "/assets/ididathing.png",
        class: "middleweight",
        socials: {
          insta: "https://www.instagram.com/leonhart/",
          twitch: "https://www.twitch.tv/leonhartplays",
          youtube: "https://www.youtube.com/channel/UCBHD6Yg8R1yS9akfGm4mecQ",
          twitter: "https://twitter.com/LeonhartYT",
        },
      },
      class: ["gaming"],
    },
    {
      fighter1: {
        name: "Dad",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'0",
        weight: "170 LB",
        zodiac: "Aquarius",
        img: "/assets/goodguyfitz.png",
        class: "middleweight",
        socials: {
          tiktok: "https://www.tiktok.com/@nathanbarnatt",
          insta: "https://www.instagram.com/NathanBarnatt/",
          youtube: "https://www.youtube.com/@barnatt",
          twitter:
            "https://twitter.com/NathanBarnatt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "AB",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'0",
        weight: "170 LB",
        zodiac: "Pisces",
        img: "/assets/ididathing.png",
        class: "middleweight",
        socials: {
          tiktok: "https://www.tiktok.com/@_starkilla",
          insta: "https://www.instagram.com/_starkilla/?hl=en",
          youtube: "https://www.youtube.com/c/Starkilla",
          twitter: "https://twitter.com/_Starkilla",
        },
      },
      class: ["comedy", "podcasting"],
    },
    {
      fighter1: {
        name: "Jaelalaray",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'2",
        weight: "115 LB",
        zodiac: "Aquarius",
        img: "/assets/goodguyfitz.png",
        class: "flyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@jaelaray",
          insta: "https://www.instagram.com/jaelaray/?hl=en",
          twitch: "https://www.twitch.tv/jaelaray",
          twitter: "https://mobile.twitter.com/jaelalaray?lang=en",
        },
      },
      fighter2: {
        name: "Abelina Sabrina",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'2",
        weight: "115 LB",
        zodiac: "Pisces",
        img: "/assets/ididathing.png",
        class: "flyweight",
        socials: {
          tiktok: "https://www.tiktok.com/@abelinasabrina",
          insta: "https://www.instagram.com/abelinasabrina/",
          youtube: "https://www.youtube.com/@abelinasabrina",
          twitter: "https://twitter.com/abelinasabrina",
        },
      },
      class: ["comedy", "gaming"],
    },
    {
      fighter1: {
        name: "Dakota Olave",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'7",
        weight: "135 LB",
        zodiac: "Scorpio",
        img: "/assets/goodguyfitz.png",
        class: "featherweight",
        socials: {
          tiktok: "https://www.tiktok.com/@dakotaolave?lang=en",
          insta: "https://www.instagram.com/dakotaolave/?hl=en",
          youtube: "https://www.youtube.com/dakotaolave",
        },
      },
      fighter2: {
        name: "Jack Manifold",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'9",
        weight: "130 LB",
        zodiac: "Leo",
        img: "/assets/ididathing.png",
        class: "featherweight",
        socials: {
          tiktok: "https://www.tiktok.com/@jackmanifoldtv?lang=en",
          insta: "https://www.instagram.com/JackManifoldTV/",
          twitch: "https://www.twitch.tv/JackManifoldTV",
          twitter: "https://twitter.com/JackManifoldTV",
        },
      },
      class: ["comedy", "gaming"],
    },
  ];

  return (
    <div className="matchups">
      <h2>Player Matchups</h2>
      <p className="matchups-info">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure. */}
      </p>
      <div className="filter-mobile">
        <img src="/assets/filter.png" alt="Filter icon" />
        <p>Filter By</p>
      </div>

      <div className="tags">
        <div className="filter">
          <img src="/assets/filter.png" alt="Filter icon" />
          <p>Filter By</p>
        </div>
        {categories.map((category) => {
          return (
            <div
              key={category}
              onClick={() => isActive(category)}
              className={`tag ${active === category ? "active" : ""}`}
            >
              {active === category ? <span></span> : null}
              <p> {category}</p>
            </div>
          );
        })}
      </div>
      <div className="fight-cards mobile">
        {matchups.map((matchup, i) => {
          if (matchup.class.includes(active)) {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-mobile-images fight-card-matchup-fighter-info">
                  <div className="not-reverse">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <h3>{matchup.fighter1.name}</h3>
                    {/* <p>{matchup.fighter1.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="blue">
                          Record: {matchup.fighter1.record}
                        </p> */}
                        <p className="blue">
                          Height: {matchup.fighter1.height}
                        </p>
                        <p className="blue">
                          Goal Weight: {matchup.fighter1.weight}
                        </p>
                        <p className="blue">
                          Zodiac: {matchup.fighter1.zodiac}
                        </p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    {/* <p>{matchup.fighter2.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="red">Record: {matchup.fighter2.record}</p> */}
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Goal Weight: {matchup.fighter2.weight}
                        </p>
                        <p className="red">Zodiac: {matchup.fighter2.zodiac}</p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (active === "all") {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-mobile-images fight-card-matchup-fighter-info">
                  <div className="not-reverse">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <h3>{matchup.fighter1.name}</h3>
                    {/* <p>{matchup.fighter1.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="blue">
                          Record: {matchup.fighter1.record}
                        </p> */}
                        <p className="blue">
                          Height: {matchup.fighter1.height}
                        </p>
                        <p className="blue">
                          Goal Weight: {matchup.fighter1.weight}
                        </p>
                        <p className="blue">
                          Zodiac: {matchup.fighter1.zodiac}
                        </p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    {/* <p>{matchup.fighter2.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="red">Record: {matchup.fighter2.record}</p> */}
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Goal Weight: {matchup.fighter2.weight}
                        </p>
                        <p className="red">Zodiac: {matchup.fighter2.zodiac}</p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="fight-cards">
        {matchups.map((matchup, i) => {
          if (matchup.class.includes(active)) {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-matchup-fighter">
                  <div className="fight-card-matchup-fight-image">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="fight-card-matchup-fighter-info">
                    <h3>{matchup.fighter1.name}</h3>
                    <span>VS</span>
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                  </div>
                  {/* <div className="fight-card-matchup-fighter-bio">
                    <p>{matchup.fighter1.bio}</p>
                    <p className={`reverse-p`}>{matchup.fighter2.bio}</p>
                  </div> */}
                  <div className="table">
                    {/* <div className="table-row">
                      <p className="red">{matchup.fighter1.record}</p>
                      <p>Record</p>
                      <p className="blue">{matchup.fighter2.record}</p>
                    </div> */}
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.height}</p>
                      <p>Height</p>
                      <p className="blue">{matchup.fighter2.height}</p>
                    </div>
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.weight}</p>
                      <p>Goal Weight</p>
                      <p className="blue">{matchup.fighter2.weight}</p>
                    </div>
                    <div className="table-row no-border">
                      <p className="red">{matchup.fighter1.zodiac}</p>
                      <p>Zodiac</p>
                      <p className="blue">{matchup.fighter2.zodiac}</p>
                    </div>
                  </div>
                </div>
                <div className="fight-card-matchup-fighter reverse">
                  <div className="fight-card-matchup-fight-image">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          } else if (active === "all") {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-matchup-fighter">
                  <div className="fight-card-matchup-fight-image">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="fight-card-matchup-fighter-info">
                    <h3>{matchup.fighter1.name}</h3>
                    <span>VS</span>
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                  </div>
                  {/* <div className="fight-card-matchup-fighter-bio">
                    <p>{matchup.fighter1.bio}</p>
                    <p className={`reverse-p`}>{matchup.fighter2.bio}</p>
                  </div> */}
                  <div className="table">
                    {/* <div className="table-row">
                      <p className="red">{matchup.fighter1.record}</p>
                      <p>Record</p>
                      <p className="blue">{matchup.fighter2.record}</p>
                    </div> */}
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.height}</p>
                      <p>Height</p>
                      <p className="blue">{matchup.fighter2.height}</p>
                    </div>
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.weight}</p>
                      <p>Goal Weight</p>
                      <p className="blue">{matchup.fighter2.weight}</p>
                    </div>
                    <div className="table-row no-border">
                      <p className="red">{matchup.fighter1.zodiac}</p>
                      <p>Zodiac</p>
                      <p className="blue">{matchup.fighter2.zodiac}</p>
                    </div>
                  </div>
                </div>
                <div className="fight-card-matchup-fighter reverse">
                  <div className="fight-card-matchup-fight-image">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/tiktok.png" alt="TikTok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/insta.png" alt="Instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitter.png" alt="Twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/youtube.png" alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src="/assets/twitch.png" alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
