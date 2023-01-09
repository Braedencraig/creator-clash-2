/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Hamburger from "hamburger-react";
import Dropdown from "./dropdown";

export default function Navigation({ isOpen, setOpen, open, setOpenDropdown }) {
  const handleMenuOne = () => {
    console.log("Go To Ticket Link 1");
  };

  const handleMenuTwo = () => {
    console.log("Go To Ticket Link 2");
  };

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
      </ul>
      <div className="logo">
        <Link href="/">
          <img src="/assets/logo.png" alt="Creator Clash Two" />
        </Link>
      </div>
      <div className="navigation-tickets">
        <a href="">Merch</a>
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
