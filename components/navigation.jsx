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
    console.log("Go To Ticket Link 1");
  };

  const handleMenuTwo = () => {
    console.log("Go To Ticket Link 2");
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
            <a href="" target="_blank" rel="noreferrer">
              <img src="/assets/tiktok.png" alt="TikTok" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src="/assets/insta.png" alt="Instagram" />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img src="/assets/twitter.png" alt="Twitter" />
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
                <img src="/assets/chevron.png" alt="navigation chevron" />
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
