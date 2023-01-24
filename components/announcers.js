import Image from "next/image";
import announcer1 from "../public/assets/announcer.png";
import tiktok from "../public/assets/tiktok.png";
import insta from "../public/assets/insta.png";
import youtube from "../public/assets/youtube.png";
import twitter from "../public/assets/twitter.png";
import twitch from "../public/assets/twitch.png";

export default function Announcers() {
  const announcers = [
    {
      fullName: "MoistCr1tikal",
      bio: "Commentary",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/user/penguinz0",
        insta: "https://www.instagram.com/bigmoistcr1tikal/?hl=en",
        twitter: "https://twitter.com/MoistCr1TiKaL",
        twitch: "https://www.twitch.tv/moistcr1tikal",
      },
    },
    {
      fullName: "JACKSEPTICEYE",
      bio: "Pre & Post Show Host",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/channel/UCYzPXprvl5Y-Sf0g4vX-m6g",
        insta: "https://instagram.com/jacksepticeye",
        twitter: "https://twitter.com/Jacksepticeye",
        twitch: "https://www.twitch.tv/jacksepticeye",
      },
    },
    {
      fullName: "MARKIPLIER",
      bio: "Pre & Post Show Host",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/channel/UC7_YxT-KID8kRbqZo7MyscQ",
        tiktok: "https://www.tiktok.com/@markiplier",
        insta: "https://www.instagram.com/markiplier/",
        twitter: "https://twitter.com/markiplier",
      },
    },
    {
      fullName: "ESFAND",
      bio: "Pre-Fight Interviews",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/c/EsfandTV?app=desktop",
        insta: "https://www.instagram.com/esfandtv",
        twitter:
          "https://twitter.com/EsfandTV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        twitch: "https://www.twitch.tv/esfandtv",
      },
    },
    {
      fullName: "Tony Jefferies",
      bio: "Commentary",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/c/TonyJeffries1/videos",
        insta: "https://instagram.com/Tony_Jeffries",
        twitter:
          "https://twitter.com/Tony_Jeffries?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      },
    },
    {
      fullName: "Wade Plemons",
      bio: "Commentary",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/c/TheWADEConcept",
        insta: "https://www.instagram.com/wadeplem/",
        twitter: "https://twitter.com/WadePlem",
      },
    },
    {
      fullName: "Amouranth",
      bio: "Pre Fight Interviews",
      img: announcer1,
      socials: {
        insta: "https://www.instagram.com/kaitgonewild/",
        twitter:
          "https://twitter.com/Amouranth?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        twitch: "https://www.twitch.tv/amouranth",
      },
    },
    {
      fullName: "Matt Watson",
      bio: "National Anthem Performer",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/channel/UCobJseYd3Z4Kd9igg8PWXpQ",
        insta: "https://instagram.com/matthwatson",
        twitter: "https://twitter.com/matthwatson",
      },
    },
    {
      fullName: "Akinola Verissimo",
      bio: "In-Ring Announcer",
      img: announcer1,
      socials: {
        youtube: "https://www.youtube.com/c/AkinolaGG",
        twitter: "https://twitter.com/AkinolaGG",
        twitch: "https://www.twitch.tv/akinolagg/about",
      },
    },
  ];
  return (
    <div className="matchups annoucers-wrapper">
      <h2>Announcers</h2>
      <div className="announcers">
        {announcers.map((announcer) => {
          return (
            <div className="announcer" key={announcer.fullname}>
              <Image src={announcer.img} alt={announcer.fullName} />
              <h3>{announcer.fullName}</h3>
              <p>{announcer.bio}</p>
              <div className="announcer-socials">
                {announcer.socials.tiktok && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={announcer.socials.tiktok}
                  >
                    <Image src={tiktok} alt={"Tik tok"} />
                  </a>
                )}
                {announcer.socials.youtube && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={announcer.socials.youtube}
                  >
                    <Image src={youtube} alt={"youtube"} />
                  </a>
                )}
                {announcer.socials.insta && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={announcer.socials.insta}
                  >
                    <Image src={insta} alt={"instagram"} />
                  </a>
                )}
                {announcer.socials.twitter && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={announcer.socials.twitter}
                  >
                    <Image src={twitter} alt={"twitter"} />
                  </a>
                )}
                {announcer.socials.twitch && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={announcer.socials.twitch}
                  >
                    <Image src={twitch} alt={"twitch"} />
                  </a>
                )}
              </div>
            </div>
          );
        })}
        <div className="announcer opacity-none">
          <Image src={announcers[0].img} alt={announcers[0].fullName} />
          <h3>{announcers[0].fullName}</h3>
          <p>{announcers[0].bio}</p>
          <div className="announcer-socials">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={announcers[0].socials.youtube}
            >
              <Image src={youtube} alt={"Youtube"} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={announcers[0].socials.insta}
            >
              <Image src={insta} alt={"Instagram"} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={announcers[0].socials.twitter}
            >
              <Image src={twitter} alt={"Twitter"} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={announcers[0].socials.twitch}
            >
              <Image src={twitch} alt={"Twitch"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
