import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Features from "../Guest/Features/Features";
import FeaturedCategory from "../Guest/FeaturedCategory";
import HIW from "../Guest/HIW";
import Hero from "../Guest/Hero";
import CTA from "../Guest/CTA";
import Testimonials from "../Guest/Testimonials";
import Gallery from "../Guest/Gallery";

export default () => {
  return (
    <>
    <Hero/>
    <FeaturedCategory/>
    <HIW/>
    <Features/>
    <Testimonials/>
    <Gallery/>
    <CTA/>
    </>
  );
};
