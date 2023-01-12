/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "../components/dropdown";
import Matchups from "../components/matchups";
import Announcers from "../components/announcers";
import Charity from "../components/charity";
import Footer from "../components/footer";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [open, setOpenDropdown] = useState(false);
  const [launchModal, setLaunchModal] = useState(false);

  const handleMenuOne = () => {
    console.log("Go To Ticket Link 1");
  };

  const handleMenuTwo = () => {
    console.log("Go To Ticket Link 2adsds");
    setLaunchModal(true);
  };

  return (
    <>
      <Head>
        <title>The Creator Clash</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
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
        <meta property="og:url" content="http://thecreatorclash.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://thecreatorclash.com/logo.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta name="twitter:title" content="Creator Clash" />
        <meta name="twitter:description" content="Creator Clash" />
        <meta
          name="twitter:image"
          content="http://thecreatorclash.com/logo.png"
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
                <div className="navigation-tickets-mobile">
                  <Dropdown
                    open={open}
                    setOpenDropdown={setOpenDropdown}
                    trigger={
                      <button>
                        Tickets{" "}
                        <span>
                          <img
                            src="/assets/chevron.png"
                            alt="navigation chevron"
                          />
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
              </div>
            </div>
          </div>
        )}
        {launchModal && (
          <div className={styles.overlay}>
            <div className={`${styles.overlayContent} ${styles.modalOverlay}`}>
              <div className={styles.center}>
                <div className="warning">
                  <img
                    onClick={() => {
                      setLaunchModal(false);
                      setOpen(false);
                    }}
                    className="close"
                    src="/assets/close.png"
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
                        onClick={() => setLaunchModal(false)}
                        className="inverted"
                      >
                        <span>
                          <img
                            src="/assets/cartblack.png"
                            alt="shopping cart"
                          />
                        </span>
                        PPV Tickets
                      </button>
                      <button onClick={() => setLaunchModal(false)}>
                        <span>
                          <img
                            src="/assets/cartblack.png"
                            alt="shopping cart"
                          />
                        </span>
                        Event Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <Hero />
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
