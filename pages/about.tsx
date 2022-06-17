import React from "react";
import HeroHome from "@components/HeroHome";
import FeaturesHome from "@components/Features";
import FeaturesBlocks from "@components/FeaturesBlocks";
import Testimonials from "@components/Testimonials";
import Newsletter from "@components/Newsletter";

const AboutPage: React.FC = () => {
  return (
    <div className="flex-grow">
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default AboutPage;
