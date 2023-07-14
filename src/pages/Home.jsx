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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HomeCarousel />
      <Categories />
      <About />
      {/* <Showcase/> */}
      <References />
      <Location />
    </motion.div>
  );
}
