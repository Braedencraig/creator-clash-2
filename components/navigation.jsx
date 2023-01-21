/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Hamburger from "hamburger-react";
import Dropdown from "./dropdown";
import { useEffect } from "react";

export default function Navigation({
  isOpen,
  setOpen,
  open,
  setOpenDropdown,
  launchModal,
  setLaunchModal,
}) {
  const handleMenuOne = () => {
    window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
  };

  const handleMenuTwo = () => {
    setLaunchModal(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setLaunchModal(false);
    }
  }, [isOpen]);

  return (
    <div className="navigation">
      <ul>
        <li>
          <Link href="/#charity">Charity</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/sponsorships">Sponsorships</Link>
        </li>
        <li>
          <a href="">Merch</a>
        </li>
      </ul>
      <div className="logo">
        <Link href="/">
          <img src="/assets/logo.png" alt="Creator Clash Two" />
        </Link>
      </div>
      <div className="navigation-tickets">
        <div className="cheeky-socials">
          <div className="fight-card-matchup-socials">
            <a
              href="https://www.tiktok.com/@creatorclashofficial?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/tiktok.png"
                alt="TikTok"
              />
            </a>
            <a
              href="https://www.instagram.com/thecreatorclash/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/insta.png"
                alt="Instagram"
              />
            </a>
            <a
              href="https://twitter.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <img
                fetchpriority="low"
                loading="lazy"
                decoding="async"
                src="/assets/twitter.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
        <Dropdown
          open={open}
          setOpenDropdown={setOpenDropdown}
          trigger={
            <button>
              Tickets{" "}
              <span>
                <img
                  fetchpriority="low"
                  loading="lazy"
                  decoding="async"
                  src="/assets/chevron.png"
                  alt="navigation chevron"
                />
              </span>
            </button>
          }
          menu={[
            <button onClick={handleMenuOne}>Event Tickets</button>,
            <button className="inverted" onClick={handleMenuTwo}>
              PPV Tickets
            </button>,
          ]}
        />
      </div>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}
