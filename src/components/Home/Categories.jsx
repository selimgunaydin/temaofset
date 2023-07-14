import React from "react";
import karton from "../../assets/img/karton.png";
import kartonCanta from "../../assets/img/karton-canta.png";
import taslamaliKutu from "../../assets/img/taslamalikutu.png";
import ondule from "../../assets/img/mastkutu.png";
import katalog from "../../assets/img/katalog.png";
import { motion } from "framer-motion";

export default function Categories() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="categories py-5"
      >
        <div className="container">
          <div className="title mb-5">
            <h2 className="text-center display-6 mb-4">Ürün Kategorilerimiz</h2>
          </div>
          <div className="row d-flex justify-content-between">
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img src={karton} alt="karton" width="100px" className="mb-4" />
              <h2 className="fs-6">Karton Ambalaj</h2>
            </div>
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img src={katalog} alt="karton" width="100px" className="mb-4" />
              <h2 className="fs-6">Katalog</h2>
            </div>
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img
                src={kartonCanta}
                alt="karton"
                width="100px"
                className="mb-4"
              />
              <h2 className="fs-6">Karton Çanta</h2>
            </div>
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img
                src={taslamaliKutu}
                alt="karton"
                width="100px"
                className="mb-4"
              />
              <h2 className="fs-6">Karton Ambalaj</h2>
            </div>
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img src={ondule} alt="karton" width="100px" className="mb-4" />
              <h2 className="fs-6">Karton Ambalaj</h2>
            </div>
            <div className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center">
              <img src={katalog} alt="karton" width="100px" className="mb-4" />
              <h2 className="fs-6">Broşür</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
