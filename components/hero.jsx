import Image from "next/image";
import cartBlack from "../public/assets/cartblack.png";
import cartYellow from "../public/assets/cartyellow.png";

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
            <Image src={cartBlack} alt="shopping cart" />
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
            <Image src={cartYellow} alt="shopping cart" />
          </span>
          PPV Tickets
        </button>
      </div>
    </div>
  );
}
