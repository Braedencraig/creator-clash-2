import React, { useState } from "react";
import Accordion from "./accordion";
import Image from "next/image";
import filter from "../public/assets/filter.png";
import alex from "../public/assets/alex-min.jpg";
import idubz from "../public/assets/idubz-min.jpg";
import john from "../public/assets/john-min.jpg";
import harley from "../public/assets/harley-min.jpg";
import andrea from "../public/assets/andrea.png";
import michelle from "../public/assets/michelle.png";
import william from "../public/assets/williamhaynes.png";
// import question from "../public/assets/question.png";
import chris from "../public/assets/chris-min.jpg";
import hayley from "../public/assets/hayley-min.jpg";
import marisha from "../public/assets/marisha-min.jpg";
import myth from "../public/assets/myth-min.jpg";
import hundar from "../public/assets/hundar-min.jpg";
import arin from "../public/assets/arin-min.jpg";
import jarvis from "../public/assets/jarvis-min.jpg";
import mika from "../public/assets/mika-min.jpg";
import alanah from "../public/assets/alanah-min.jpg";
import leonhart from "../public/assets/leonhart-min.jpg";
import crank from "../public/assets/crank-min.jpg";
import dad from "../public/assets/dad-min.jpg";
import ab from "../public/assets/ab-min.jpg";
import dakota from "../public/assets/dakota-min.jpg";
import jackman from "../public/assets/jackman-min.jpg";
import jaelaray from "../public/assets/jaelaray-min.jpg";
import sabrina from "../public/assets/sabrina-min.jpg";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import youtube from "../public/assets/youtube.png";
import twitter from "../public/assets/twitter.png";
import twitch from "../public/assets/twitch.png";

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
        name: "Alex Wassabi",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'11",
        weight: "168 LBS",
        zodiac: "Aries",
        img: alex,
        class: "light heavyweight",
        vote: "https://ooohtv.page.link/fT74",
        socials: {
          tiktok: "https://www.tiktok.com/@alexwassabi?lang=en",
          insta: "https://www.instagram.com/alexwassabi/?hl=en",
          youtube: "https://www.youtube.com/@Wassabi",
          twitter: "https://twitter.com/AlexWassabi",
        },
      },
      fighter2: {
        name: "IDUBBBZ",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'1",
        weight: "168 LBS",
        zodiac: "Libra",
        img: idubz,
        class: "light heavyweight",
        vote: "https://ooohtv.page.link/fT74",
        socials: {
          insta: "https://www.instagram.com/idubbbz/",
          youtube: "https://www.youtube.com/c/idubbbztv",
          twitter: "https://twitter.com/Idubbbz",
        },
      },
      class: ["comedy"],
    },
    {
      fighter1: {
        name: "John Randall Hennigan",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'0",
        weight: "200+ LBS",
        zodiac: "Libra",
        img: john,
        class: "super heavyweight",
        vote: "https://ooohtv.page.link/PZW8",
        socials: {
          insta: "https://instagram.com/johnhennigan",
          twitter:
            "https://twitter.com/TheRealMorrison?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Harley Morenstein",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'6",
        weight: "200+ LBS",
        zodiac: "Virgo",
        img: harley,
        class: "super heavyweight",
        vote: "https://ooohtv.page.link/PZW8",
        socials: {
          tiktok: "https://www.tiktok.com/@harleyplays",
          insta: "https://instagram.com/harleyplays",
          youtube: "https://www.youtube.com/c/HarleyMorenstein",
          twitter: "https://twitter.com/HarleyPlays",
        },
      },
      class: ["wrestling", "comedy"],
    },
    {
      fighter1: {
        name: "Michelle Khare",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'2",
        weight: "120 LBS",
        zodiac: "Leo",
        img: michelle,
        class: "flyweight",
        vote: "https://ooohtv.page.link/5nij",
        socials: {
          insta: "https://www.instagram.com/michellekhare/?hl=en",
          youtube: "https://www.youtube.com/@MichelleKhare",
          twitter:
            "https://twitter.com/MichelleKhare?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Andrea Botez",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'6",
        weight: "129 LBS",
        zodiac: "Aries",
        img: andrea,
        class: "flyweight",
        vote: "https://ooohtv.page.link/5nij",
        socials: {
          insta: "https://www.instagram.com/itsandreabotez/?hl=en",
          youtube: "https://www.youtube.com/channel/UCAn8NrZ-J4CRfwodajqFYoQ",
          twitter:
            "https://twitter.com/itsandreabotez?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      class: ["podcasting"],
    },

    {
      fighter1: {
        name: "William Haynes",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'10",
        weight: "145 LBS",
        zodiac: "Libra",
        img: william,
        class: "featherweight",
        vote: "https://ooohtv.page.link/DTwr",
        socials: {
          tiktok: "https://www.tiktok.com/@mrwilliamhaynes",
          insta: "https://www.instagram.com/williamhaynes/?hl=en",
          youtube: "https://www.youtube.com/user/williamhaynestv",
          twitter:
            "https://twitter.com/MrWilliamHaynes?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Chris Ray Gun",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'4",
        weight: "130 LBS",
        zodiac: "Sagittarius",
        img: chris,
        class: "featherweight",
        vote: "https://ooohtv.page.link/DTwr",
        socials: {
          tiktok: "https://www.tiktok.com/@chrisraygun?lang=en",
          twitch: "https://www.twitch.tv/chrisraygun",
          youtube: "https://www.youtube.com/channel/UCctjGdm2NlMNzIlxz02IsXA",
          twitter: "https://twitter.com/ChrisRGun",
        },
      },
      class: ["music", "gaming"],
    },
    {
      fighter1: {
        name: "Haley Sharpe",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'8",
        weight: "140 LBS",
        zodiac: "Libra",
        img: hayley,
        class: "lightweight",
        vote: "https://ooohtv.page.link/eeFf",
        socials: {
          tiktok: "https://www.tiktok.com/@yodelinghaley?lang=en",
          insta: "https://www.instagram.com/yodelinghaley/?hl=en",
          youtube: "https://www.youtube.com/channel/UCsNOMACOZuOMd3snYwjlX9w",
        },
      },
      fighter2: {
        name: "Marisha Ray",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'6",
        weight: "140 LBS",
        zodiac: "Taurus",
        img: marisha,
        class: "lightweight",
        vote: "https://ooohtv.page.link/eeFf",
        socials: {
          insta: "https://www.instagram.com/marisha_ray/?hl=en",
          youtube: "https://www.youtube.com/@criticalrole",
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
        weight: "185 LBS",
        zodiac: "Gemini",
        img: myth,
        class: "light heavyweight",
        vote: "https://ooohtv.page.link/aXK4",
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
        weight: "185 LBS",
        zodiac: "Cancer",
        img: hundar,
        class: "light heavyweight",
        vote: "https://ooohtv.page.link/aXK4",
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
        weight: "200+ LBS",
        zodiac: "Capricorn",
        img: arin,
        class: "heavyweight",
        vote: "https://ooohtv.page.link/9gKD",
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
        weight: "200+ LBS",
        zodiac: "Taurus",
        img: jarvis,
        class: "heavyweight",
        vote: "https://ooohtv.page.link/9gKD",
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
        name: "Mika",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'9",
        weight: "165 LBS",
        zodiac: "Virgo",
        img: mika,
        class: "middleweight",
        vote: "https://ooohtv.page.link/MTmX",
        socials: {
          tiktok: "https://www.tiktok.com/@ripmika?lang=en",
          insta: "https://www.instagram.com/ripmika/",
          twitch: "https://www.twitch.tv/ripmika",
          twitter:
            "https://twitter.com/RIPmika?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "Alanah Pearce",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'9",
        weight: "165 LBS",
        zodiac: "Virgo",
        img: alanah,
        class: "middleweight",
        vote: "https://ooohtv.page.link/MTmX",
        socials: {
          tiktok: "https://www.tiktok.com/@charalanahzard?lang=en",
          insta: "https://www.instagram.com/charalanahzard/",
          youtube: "https://www.youtube.com/channel/UCKpBmnEfSy20al-Fk_2YzVA",
          twitter: "https://twitter.com/charalanahzard",
        },
      },
      class: ["gaming"],
    },
    {
      fighter1: {
        name: "Leonhart",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'10",
        weight: "155 LBS",
        zodiac: "Aquarius",
        img: leonhart,
        class: "middleweight",
        vote: "https://ooohtv.page.link/iybK",
        socials: {
          insta: "https://www.instagram.com/leonhart/",
          twitch: "https://www.twitch.tv/leonhartplays",
          youtube: "https://www.youtube.com/channel/UCBHD6Yg8R1yS9akfGm4mecQ",
          twitter: "https://twitter.com/LeonhartYT",
        },
      },
      fighter2: {
        name: "CrankGamePlays",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'8",
        weight: "155 LBS",
        zodiac: "Scorpio",
        img: crank,
        class: "middleweight",
        vote: "https://ooohtv.page.link/iybK",
        socials: {
          tiktok: "https://www.tiktok.com/@crankgameplays?lang=en",
          insta: "https://www.instagram.com/crankgameplays/?hl=en",
          youtube: "https://www.youtube.com/c/crankgame",
          twitter: "https://twitter.com/CrankGameplays",
        },
      },
      class: ["gaming"],
    },
    {
      fighter1: {
        name: "Dad (Nathan Barnatt)",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'0",
        weight: "170 LBS",
        zodiac: "Aquarius",
        img: dad,
        class: "middleweight",
        vote: "https://ooohtv.page.link/ZzL9",
        socials: {
          tiktok: "https://www.tiktok.com/@nathanbarnatt",
          insta: "https://www.instagram.com/NathanBarnatt/",
          youtube: "https://www.youtube.com/@barnatt",
          twitter:
            "https://twitter.com/NathanBarnatt?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        },
      },
      fighter2: {
        name: "AB (Ab Ayad)",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'0",
        weight: "170 LBS",
        zodiac: "Pisces",
        img: ab,
        class: "middleweight",
        vote: "https://ooohtv.page.link/ZzL9",
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
        name: "Jaelaray",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'2",
        weight: "115 LBS",
        zodiac: "Aquarius",
        img: jaelaray,
        class: "flyweight",
        vote: "https://ooohtv.page.link/Rrsa",
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
        weight: "115 LBS",
        zodiac: "Pisces",
        img: sabrina,
        class: "flyweight",
        vote: "https://ooohtv.page.link/Rrsa",
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
        name: "Jack Manifold",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "5'9",
        weight: "135 LBS",
        zodiac: "Leo",
        img: jackman,
        class: "featherweight",
        vote: "https://ooohtv.page.link/2HBn",
        socials: {
          tiktok: "https://www.tiktok.com/@jackmanifoldtv?lang=en",
          insta: "https://www.instagram.com/JackManifoldTV/",
          twitch: "https://www.twitch.tv/JackManifoldTV",
          twitter: "https://twitter.com/JackManifoldTV",
        },
      },
      fighter2: {
        name: "Dakota Olave",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "5'9",
        weight: "135 LBS",
        zodiac: "Scorpio",
        img: dakota,
        class: "featherweight",
        vote: "https://ooohtv.page.link/2HBn",
        socials: {
          tiktok: "https://www.tiktok.com/@dakotaolave?lang=en",
          insta: "https://www.instagram.com/dakotaolave/?hl=en",
          youtube: "https://www.youtube.com/dakotaolave",
        },
      },
      class: ["comedy", "gaming"],
    },
  ];

  return (
    <div className="matchups">
      <h2>Player Matchups</h2>
      {/* <p className="matchups-info"> */}
      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure. */}
      {/* </p> */}
      {/* <div className="filter-mobile">
        <Image src={filter} alt="Filter icon" />
        <p>Filter By</p>
      </div> */}
      {/* <div className="tags">
        <div className="filter">
          <Image src={filter} alt="Filter icon" />
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
      </div> */}
      <div className="fight-cards mobile">
        {matchups.map((matchup, i) => {
          if (matchup.class.includes(active)) {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-mobile-images fight-card-matchup-fighter-info">
                  <div className="not-reverse">
                    <Image
                      src={matchup.fighter1.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
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
                          Fight Weight: {matchup.fighter1.weight}
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
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <Image
                      src={matchup.fighter2.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    {/* <p>{matchup.fighter2.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="red">Record: {matchup.fighter2.record}</p> */}
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Fight Weight: {matchup.fighter2.weight}
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
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
                    <Image
                      src={matchup.fighter1.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
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
                          Fight Weight: {matchup.fighter1.weight}
                        </p>
                        <p className="blue">
                          Zodiac: {matchup.fighter1.zodiac}
                        </p>
                        <a
                          className="blue"
                          href={matchup.fighter1.vote}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Vote Now
                        </a>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <Image
                      src={matchup.fighter2.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    {/* <p>{matchup.fighter2.bio}</p> */}
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        {/* <p className="red">Record: {matchup.fighter2.record}</p> */}
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Fight Weight: {matchup.fighter2.weight}
                        </p>
                        <p className="red">Zodiac: {matchup.fighter2.zodiac}</p>
                        <a
                          className="red"
                          href={matchup.fighter1.vote}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Vote Now
                        </a>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
                    <Image
                      src={matchup.fighter1.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
                      <p className="blue">{matchup.fighter1.height}</p>
                      <p>Height</p>
                      <p className="red">{matchup.fighter2.height}</p>
                    </div>
                    <div className="table-row">
                      <p className="blue">{matchup.fighter1.weight}</p>
                      <p>Fight Weight</p>
                      <p className="red">{matchup.fighter2.weight}</p>
                    </div>
                    <div className="table-row no-border">
                      <p className="blue">{matchup.fighter1.zodiac}</p>
                      <p>Zodiac</p>
                      <p className="red">{matchup.fighter2.zodiac}</p>
                    </div>
                  </div>
                </div>
                <div className="fight-card-matchup-fighter reverse">
                  <div className="fight-card-matchup-fight-image">
                    <Image
                      src={matchup.fighter2.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
                    <Image
                      src={matchup.fighter1.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter1.socials.tiktok && (
                        <a
                          href={matchup.fighter1.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter1.socials.insta && (
                        <a
                          href={matchup.fighter1.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitter && (
                        <a
                          href={matchup.fighter1.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter1.socials.youtube && (
                        <a
                          href={matchup.fighter1.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter1.socials.twitch && (
                        <a
                          href={matchup.fighter1.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
                      <p className="blue">{matchup.fighter1.height}</p>
                      <p>Height</p>
                      <p className="red">{matchup.fighter2.height}</p>
                    </div>
                    <div className="table-row">
                      <p className="blue">{matchup.fighter1.weight}</p>
                      <p>Fight Weight</p>
                      <p className="red">{matchup.fighter2.weight}</p>
                    </div>
                    <div className="table-row no-border">
                      <p className="blue">{matchup.fighter1.zodiac}</p>
                      <p>Zodiac</p>
                      <p className="red">{matchup.fighter2.zodiac}</p>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      className="table-row no-border"
                    >
                      <a
                        className="blue"
                        href={matchup.fighter1.vote}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vote
                      </a>
                      <p>Vote Now</p>
                      <a
                        className="red"
                        href={matchup.fighter1.vote}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Vote
                      </a>
                    </div>
                  </div>
                </div>
                <div className="fight-card-matchup-fighter reverse">
                  <div className="fight-card-matchup-fight-image">
                    <Image
                      src={matchup.fighter2.img}
                      className="border-fighter"
                      alt="Fighter"
                    />
                    <div className="fight-card-matchup-socials">
                      {matchup.fighter2.socials.tiktok && (
                        <a
                          href={matchup.fighter2.socials.tiktok}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={tiktok} alt="tiktok" />
                        </a>
                      )}
                      {matchup.fighter2.socials.insta && (
                        <a
                          href={matchup.fighter2.socials.insta}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={insta} alt="instagram" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitter && (
                        <a
                          href={matchup.fighter2.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitter} alt="twitter" />
                        </a>
                      )}
                      {matchup.fighter2.socials.youtube && (
                        <a
                          href={matchup.fighter2.socials.youtube}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={youtube} alt="youtube" />
                        </a>
                      )}
                      {matchup.fighter2.socials.twitch && (
                        <a
                          href={matchup.fighter2.socials.twitch}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Image src={twitch} alt="twitch" />
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
