import React from "react";
import HeroSection from "./hero-section";
import { GlobeDemo } from "./globe-demo";
import { FeatureCards } from "../Skills/FeatureCards";
import Skillsters from "../Skills/Skillsters";
import CTA from "./cta";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FeatureCards />
      <Skillsters />
      <CTA />
    </>
  );
};

export default Homepage;
