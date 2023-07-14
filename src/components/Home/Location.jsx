import { motion } from "framer-motion";
import React from "react";

export default function Location() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="location"
      >
        <div className="google-map">
          <iframe src="https://www.google.com/maps/embed/v1/place?q=Tahtakale,+Çalıkuşu+Sokak,+Avcılar/İstanbul,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div>
      </motion.div>
    </>
  );
}