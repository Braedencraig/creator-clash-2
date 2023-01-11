import "../styles/globals.css";
import { Poppins } from "@next/font/google";
import { GoogleAnalytics } from "nextjs-google-analytics";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </div>
  );
}
