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
        <button>
          <span>
            <img src="/assets/cartblack.png" alt="shopping cart" />
          </span>
          Event Tickets
        </button>
        <button className="inverted">
          <span>
            <img src="/assets/cartyellow.png" alt="shopping cart" />
          </span>
          PPV Tickets
        </button>
      </div>
    </div>
  );
}
