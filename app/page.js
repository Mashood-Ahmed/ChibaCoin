import Image from "next/image";
import Banner from "./components/Banner";
import Marquee from "./components/Marquee";
import Exchanges from "./components/Exchanges";
import Utilities from "./components/Utilities";
import HowToBuy from "./components/HowToBuy";
import PutOnAHelmet from "./components/PutOnAHelmet";
import Tokenomics from "./components/Tokenomics";
import TradingPov from "./components/TradingPov";
import Socials from "./components/Socials";
import Nav from "./partials/Nav";

export default function Home() {
  return (
    <main className="bg-p-yellow">
      <Nav />
      <Banner />
      <Exchanges />
      <Tokenomics />
      <HowToBuy />
      <Socials />
    </main>
  );
}
