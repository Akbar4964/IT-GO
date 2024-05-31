import React from "react";
import Hero from "../features/home/components/Hero";
import AnchorTechnology from "../features/home/components/AnchorTechnology";
import Innovate from "../features/home/components/Innovate";
import Technology from "../features/home/components/Technology";
import Payment from "../features/home/components/Payment";
import MagicCards from "../features/home/components/MagicCards";
import LastSection from "../features/home/components/LastSection";

function Home() {
  return (
    <>
      <Hero />
      <AnchorTechnology />
      <Technology />
      <Innovate />
      <Payment />
      <MagicCards />
      <LastSection />
    </>
  );
}

export default Home;
