import Image from "next/image";
import charity1 from "../public/assets/charity1.webp";
import charity2 from "../public/assets/charity2.png";
import charity3 from "../public/assets/charity3.png";
import charity4 from "../public/assets/charity4.png";
import charity5 from "../public/assets/charity5.png";
import charity6 from "../public/assets/charity6.png";
import charity7 from "../public/assets/charity7.png";
import charity8 from "../public/assets/charity8.png";
import charity9 from "../public/assets/longestday.svg";
import charity10 from "../public/assets/parasport.png";
import charity11 from "../public/assets/humane.png";
import charity12 from "../public/assets/merrimack.jpeg";
import charity13 from "../public/assets/ms.png";
import charity14 from "../public/assets/horse.png";

export default function Charity() {
  const charities = [
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-nami",
      img: charity1,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-ablegamers",
      img: charity2,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-american-kidney-fund",
      img: charity3,
    },
    { link: "https://nicklauschildrens.org/", img: charity4 },
    { link: "https://kidscancersf.org/", img: charity5 },
    { link: "https://curesarcoma.org/", img: charity6 },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-american-heart-association",
      img: charity7,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-critical-role-foundation",
      img: charity8,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-alzheimers-association",
      img: charity9,
    },
    {
      link: "https://www.parasportsab.com/",
      img: charity10,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-humane-society-international",
      img: charity11,
    },
    {
      link: "https://merrimackhall.com/",
      img: charity12,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-ms-society",
      img: charity13,
    },
    {
      link: "https://tiltify.com/@realgoodtouring/creator-clash-x-healing-horse-therapy-center",
      img: charity14,
    },
  ];
  return (
    <div className="charity">
      <div className="charity-info">
        <h3>Charity Partners</h3>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </p> */}
      </div>
      <div className="charity-logos">
        {charities.map((charity) => {
          return (
            <a
              key={charity.link}
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
