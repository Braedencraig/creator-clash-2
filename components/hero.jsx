/* eslint-disable @next/next/no-img-element */
import React from "react";
import { VT323 } from "@next/font/google";

const robo = VT323({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div className="hero">
      <h1 className={robo.className}>Lorem ipsum event headline goes here</h1>
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
