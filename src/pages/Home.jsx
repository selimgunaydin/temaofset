import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import HomeCarousel from "../components/Home/HomeCarousel";
import About from "../components/Home/About";
import Categories from "../components/Home/Categories";
import References from "../components/Home/References";
import Location from "../components/Home/Location";
import Showcase from "../components/Home/Showcase";

export default function Home() {
  return (
    <>
      <HomeCarousel />
      <Categories/>
      <About/>
      {/* <Showcase/> */}
      <References/>
      <Location/>
    </>
  );
}
