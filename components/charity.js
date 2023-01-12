/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Charity() {
  const charities = [
    { link: "https://www.google.ca", img: "charity1" },
    { link: "https://www.google.ca", img: "charity2" },
    { link: "https://www.google.ca", img: "charity3" },
    { link: "https://www.google.ca", img: "charity4" },
    { link: "https://www.google.ca", img: "charity5" },
    { link: "https://www.google.ca", img: "charity6" },
    { link: "https://www.google.ca", img: "charity7" },
    { link: "https://www.google.ca", img: "charity8" },
    { link: "https://www.google.ca", img: "charity9" },
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
