import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function References() {
  const [referenceImages, setReferenceImages] = useState();
  useEffect(() => {
    axios
      .get("http://api.temaofset.online/api/Referances")
      .then((response) => {
        setReferenceImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="references py-5 overflow-hidden"
      >
        <div className="container">
          <div className="title mb-4">
            <h2 className="text-center display-6">Referanslarımız</h2>
          </div>
          <div className="slider overf">
            <div className="slide-track d-flex align-items-center justify-content-center">
              {referenceImages &&
                referenceImages.map((item, index) => {
                  return (
                    <div
                      className="slide d-flex align-items-center"
                      key={index}
                    >
                      <img
                        src={`http://api.temaofset.online/api/Files/${item.imageUrl}`}
                        width="100px"
                        alt=""
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
