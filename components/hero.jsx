/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <h1>Influencers will pay.</h1>
      <div className="info">
        <h2>Saturday, April 15th 2023</h2>
        <h2>AMALIE ARENA // Tampa, FL</h2>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
          }}
        >
          <span>
            <img src="/assets/cartblack.png" alt="shopping cart" />
          </span>
          Event Tickets
        </button>
        <button
          onClick={() => {
            window.open("https://www.moment.co/creatorclash");
          }}
          className="inverted"
        >
          <span>
            <img src="/assets/cartyellow.png" alt="shopping cart" />
          </span>
          PPV Tickets
        </button>
      </div>
    </div>
  );
}
