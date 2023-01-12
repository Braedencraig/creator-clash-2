/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Accordion from "./accordion";

export default function Matchups() {
  const [active, isActive] = useState("all");

  const categories = [
    "all",
    "super featherweight",
    "heavyweight",
    "welterweight",
  ];

  const matchups = [
    {
      fighter1: {
        name: "GoodGuyFitz",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'7",
        weight: "212 LB",
        zodiac: "Virgo",
        img: "/assets/goodguyfitz.png",
        class: "welterweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      fighter2: {
        name: "I Did A Thing",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'4",
        weight: "210 LB",
        zodiac: "Leo",
        img: "/assets/ididathing.png",
        class: "welterweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      class: "welterweight",
    },
    {
      fighter1: {
        name: "GoodGuyFitz",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'7",
        weight: "212 LB",
        zodiac: "Virgo",
        img: "/assets/goodguyfitz.png",
        class: "super featherweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      fighter2: {
        name: "I Did A Thing",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'4",
        weight: "210 LB",
        zodiac: "Leo",
        img: "/assets/ididathing.png",
        class: "super featherweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      class: "super featherweight",
    },
    {
      fighter1: {
        name: "GoodGuyFitz",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'7",
        weight: "212 LB",
        zodiac: "Virgo",
        img: "/assets/goodguyfitz.png",
        class: "heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      fighter2: {
        name: "I Did A Thing",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'4",
        weight: "210 LB",
        zodiac: "Leo",
        img: "/assets/ididathing.png",
        class: "heavyweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      class: "heavyweight",
    },
    {
      fighter1: {
        name: "GoodGuyFitz",
        bio: "YouTuber, Member of Misfits, Gamer",
        record: "1 - 0",
        height: "6'7",
        weight: "212 LB",
        zodiac: "Virgo",
        img: "/assets/goodguyfitz.png",
        class: "welterweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      fighter2: {
        name: "I Did A Thing",
        bio: "YouTuber, Handyman, Communist",
        record: "1 - 0",
        height: "6'4",
        weight: "210 LB",
        zodiac: "Leo",
        img: "/assets/ididathing.png",
        class: "welterweight",
        socials: {
          tiktok: "https://www.tiktok.com",
          insta: "https://www.instagram.com",
          twitter: "https://twitter.com",
        },
      },
      class: "welterweight",
    },
  ];

  return (
    <div className="matchups">
      <h2>Player Matchups</h2>
      <p className="matchups-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure.
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
          if (active === matchup.class) {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-mobile-images fight-card-matchup-fighter-info">
                  <div className="not-reverse">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <h3>{matchup.fighter1.name}</h3>
                    <p>{matchup.fighter1.bio}</p>
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        <p className="blue">
                          Record: {matchup.fighter1.record}
                        </p>
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
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    <p>{matchup.fighter2.bio}</p>
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        <p className="red">Record: {matchup.fighter2.record}</p>
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Goal Weight: {matchup.fighter2.weight}
                        </p>
                        <p className="red">Zodiac: {matchup.fighter2.zodiac}</p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
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
                    <p>{matchup.fighter1.bio}</p>
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        <p className="blue">
                          Record: {matchup.fighter1.record}
                        </p>
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
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                  <div className="mobile-vs">
                    <span>VS</span>
                  </div>
                  <div className="reverse">
                    <img src={matchup.fighter2.img} alt="Fighter" />
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                    <p>{matchup.fighter2.bio}</p>
                    <Accordion isFaq={false} title="View Stats">
                      <div className="stat">
                        <p className="red">Record: {matchup.fighter2.record}</p>
                        <p className="red">Height: {matchup.fighter2.height}</p>
                        <p className="red">
                          Goal Weight: {matchup.fighter2.weight}
                        </p>
                        <p className="red">Zodiac: {matchup.fighter2.zodiac}</p>
                      </div>
                    </Accordion>
                    <div className="fight-card-matchup-socials">
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
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
          if (active === matchup.class) {
            return (
              <div key={i} className="fight-card-matchup">
                <div className="fight-card-matchup-fighter">
                  <div className="fight-card-matchup-fight-image">
                    <img src={matchup.fighter1.img} alt="Fighter" />
                    <div className="fight-card-matchup-socials">
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="fight-card-matchup-fighter-info">
                    <h3>{matchup.fighter1.name}</h3>
                    <span>VS</span>
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                  </div>
                  <div className="fight-card-matchup-fighter-bio">
                    <p>{matchup.fighter1.bio}</p>
                    <p className={`reverse-p`}>{matchup.fighter2.bio}</p>
                  </div>
                  <div className="table">
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.record}</p>
                      <p>Record</p>
                      <p className="blue">{matchup.fighter2.record}</p>
                    </div>
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
                      <a
                        href={matchup.fighter2.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter2.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter2.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
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
                      <a
                        href={matchup.fighter1.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter1.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="middle">
                  <div className="fight-card-matchup-fighter-info">
                    <h3>{matchup.fighter1.name}</h3>
                    <span>VS</span>
                    <h3 className={`reverse-h3`}>{matchup.fighter2.name}</h3>
                  </div>
                  <div className="fight-card-matchup-fighter-bio">
                    <p>{matchup.fighter1.bio}</p>
                    <p className={`reverse-p`}>{matchup.fighter2.bio}</p>
                  </div>
                  <div className="table">
                    <div className="table-row">
                      <p className="red">{matchup.fighter1.record}</p>
                      <p>Record</p>
                      <p className="blue">{matchup.fighter2.record}</p>
                    </div>
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
                      <a
                        href={matchup.fighter2.socials.tiktok}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/tiktok.png" alt="TikTok" />
                      </a>
                      <a
                        href={matchup.fighter2.socials.insta}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/insta.png" alt="Instagram" />
                      </a>
                      <a
                        href={matchup.fighter2.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src="/assets/twitter.png" alt="Twitter" />
                      </a>
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
