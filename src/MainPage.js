import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStartedLight.js";
import Footer from "components/footers/MiniCenteredFooter";

const HighlightedText = tw.span`text-primary-500`

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <FeatureStats/>
      <Features 
        heading={<>Why Choose  <HighlightedText>Us</HighlightedText></>}
      />
      <MainFeature
        heading={<>Our Professionals for Our <HighlightedText>Clients</HighlightedText></>}
      />
      <Testimonial 
        heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
      />
      <FAQ
        heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
      />
      <GetStarted/>
      <Footer />
    </AnimationRevealPage>
  );
}
