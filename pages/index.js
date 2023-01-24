import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import { useState } from "react";
import Link from "next/link";
import Dropdown from "../components/dropdown";
import Matchups from "../components/matchups";
import Announcers from "../components/announcers";
import Charity from "../components/charity";
import Footer from "../components/footer";
import chevron from "../public/assets/chevron.png";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import twitter from "../public/assets/twitter.png";
import close from "../public/assets/close.png";
import cartBlack from "../public/assets/cartblack.png";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [open, setOpenDropdown] = useState(false);
  const [launchModal, setLaunchModal] = useState(false);

  const handleMenuOne = () => {
    window.open("https://www.ticketmaster.com/event/0D005E33DAC2E9EC");
  };

  const handleMenuTwo = () => {
    setLaunchModal(true);
  };

  return (
    <>
      <Head>
        <title>The Creator Clash</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Creator Clash" />
        <meta
          http-equiv="Cache-Control"
          content="max-age: 31536000, no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
        <meta name="description" content="Creator Clash" />
        <meta property="og:title" content="Creator Clash" />
        <meta property="og:description" content="Creator Clash" />
        <meta property="og:url" content="https://thecreatorclash.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://thecreatorclash.com/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:title" content="Creator Clash" />
        <meta name="twitter:description" content="Creator Clash" />
        <meta
          name="twitter:image"
          content="https://thecreatorclash.com/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <div
        onClick={() => {
          if (open) {
            setOpenDropdown(false);
          }
        }}
        className={`${styles.main} ${isOpen && styles.overlay}`}
      >
        <Navigation
          open={open}
          setOpenDropdown={setOpenDropdown}
          isOpen={isOpen}
          setOpen={setOpen}
          launchModal={launchModal}
          setLaunchModal={setLaunchModal}
        />
        {isOpen && (
          <div className={styles.overlay}>
            <div className={styles.overlayContent}>
              <div className={styles.center}>
                <ul className={styles.overlayList}>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/#charity">Charity</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <Link href="/sponsorships">Sponsorships</Link>
                  </li>
                  <li onClick={() => setOpen(false)}>
                    <a
                      href="https://store.thecreatorclash.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Merch
                    </a>
                  </li>
                </ul>
                <div className="navigation-tickets-mobile">
                  <Dropdown
                    open={open}
                    setOpenDropdown={setOpenDropdown}
                    trigger={
                      <button>
                        Tickets{" "}
                        <span>
                          <Image src={chevron} alt="navigation chevron" />
                        </span>
                      </button>
                    }
                    menu={[
                      <button key={1} onClick={handleMenuOne}>
                        Event Tickets
                      </button>,
                      <button
                        key={2}
                        className="inverted"
                        onClick={handleMenuTwo}
                      >
                        PPV Tickets
                      </button>,
                    ]}
                  />
                </div>
                <div className="mobile-socials">
                  <div className="mobile-socials-container">
                    <a
                      href="https://www.tiktok.com/@creatorclashofficial?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={tiktok} alt={"Tik tok"} />
                    </a>
                    <a
                      href="https://www.instagram.com/thecreatorclash/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={insta} alt={"Instagram"} />
                    </a>
                    <a
                      href="https://twitter.com/TheCreatorClash?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image src={twitter} alt={"Twitter"} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {launchModal && (
          <div className={styles.overlay}>
            <div className={`${styles.overlayContent} ${styles.modalOverlay}`}>
              <div className={styles.center}>
                <div className="warning">
                  <Image
                    onClick={() => {
                      setLaunchModal(false);
                      setOpen(false);
                    }}
                    className="close"
                    src={close}
                    alt="Close modal"
                  />
                  <div className="warning-info">
                    <h3>Heads Up!</h3>
                    <h3>This is not an event ticket</h3>
                    <div className="text">
                      <p className="bold">
                        A PPV ticket is for the livestream only.
                      </p>
                      <p>
                        It does not grant you access to the in-person event.
                      </p>
                      <span>
                        If you would like to attend the event, please purchase
                        an event ticket.
                      </span>
                    </div>
                    <div className="buttons">
                      <button
                        onClick={() => {
                          setLaunchModal(false);
                          window.open("https://www.moment.co/creatorclash");
                        }}
                      >
                        <span>
                          <Image src={cartBlack} alt="shopping cart" />
                        </span>
                        PPV Ticket
                      </button>
                      <a href="https://www.ticketmaster.com/event/0D005E33DAC2E9EC">
                        Actually, I want an event ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Hero setLaunchModal={setLaunchModal} />
      </div>
      <Matchups />
      <Announcers />
      <div id="charity">
        <Charity />
      </div>
      <Footer />
    </>
  );
}
