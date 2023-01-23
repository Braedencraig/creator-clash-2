import Image from "next/image";
import charity1 from "../public/assets/charity1.png";
import charity2 from "../public/assets/charity2.png";
import charity3 from "../public/assets/charity3.png";
import charity4 from "../public/assets/charity4.png";
import charity5 from "../public/assets/charity5.png";
import charity6 from "../public/assets/charity6.png";
import charity7 from "../public/assets/charity7.png";
import charity8 from "../public/assets/charity8.png";
import charity9 from "../public/assets/charity9.png";

export default function Charity() {
  const charities = [
    {
      link: "https://donate.nami.org/give/197406/#!/donation/checkout?utm_source=globalNav&utm_medium=website&utm_campaign=DonationTracking&c_src=P2PRGT23",
      img: charity1,
    },
    { link: "http://ablegamers.org/", img: charity2 },
    { link: "http://kidneyfund.org/", img: charity3 },
    { link: "http://nicklauschildrens.org/", img: charity4 },
    { link: "http://kidscancersf.org/", img: charity5 },
    { link: "http://curesarcoma.org/", img: charity6 },
    { link: "http://heart.org/", img: charity7 },
    { link: "http://critrole.com/", img: charity8 },
    { link: "http://longestday.org/", img: charity9 },
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
              <Image src={charity.img} alt={charity.link} />
              <p>Donate Here</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
