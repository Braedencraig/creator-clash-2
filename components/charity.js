/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Charity() {
  const charities = [
    {
      link: "https://donate.nami.org/give/197406/#!/donation/checkout?utm_source=globalNav&utm_medium=website&utm_campaign=DonationTracking&c_src=P2PRGT23",
      img: "charity1",
    },
    { link: "http://ablegamers.org/", img: "charity2" },
    { link: "http://kidneyfund.org/", img: "charity3" },
    { link: "http://nicklauschildrens.org/", img: "charity4" },
    { link: "http://kidscancersf.org/", img: "charity5" },
    { link: "http://curesarcoma.org/", img: "charity6" },
    { link: "http://heart.org/", img: "charity7" },
    { link: "http://critrole.com/", img: "charity8" },
    { link: "http://longestday.org/", img: "charity9" },
  ];
  return (
    <div className="charity">
      <div className="charity-info">
        <h3>Charity Partners</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p>
      </div>
      <div className="charity-logos">
        {charities.map((charity) => {
          return (
            <a
              key={charity.url}
              href={charity.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={`/assets/${charity.img}.png`} alt={charity.img} />
              <p>Donate Here</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
