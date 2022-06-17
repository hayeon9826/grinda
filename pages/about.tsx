import React from "react";
import HeroHome from "@components/HeroHome";
import FeaturesHome from "@components/Features";
import FeaturesBlocks from "@components/FeaturesBlocks";
import Testimonials from "@components/Testimonials";
import Newsletter from "@components/Newsletter";
import PricingSection from "@components/PricingSection";

const AboutPage: React.FC = () => {
  return (
    <div className="flex-grow">
      <HeroHome />
      <FeaturesHome />
      <FeaturesBlocks />
      <Testimonials />
      <PricingSection />
      <Newsletter />
    </div>
  );
};

export default AboutPage;
