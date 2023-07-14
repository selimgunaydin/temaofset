import React from "react";
import { motion } from "framer-motion";
import { generalStore } from "../../store/generalStore";
import { Link } from "react-router-dom";

export default function Categories() {
  const { categories } = generalStore();
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
            {categories &&
              categories.map((item, index) => {
                return (
                  <Link
                  to={`/${item.defination}`}
                    className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center text-black"
                    key={index}
                  >
                    <img
                      src={`http://api.temaofset.online/api/Files/${item.image}`}
                      alt="karton"
                      width="100px"
                      className="mb-4"
                    />
                    <h2 className="fs-6 text-center">{item.defination}</h2>
                  </Link>
                );
              })}
          </div>
        </div>
      </motion.div>
    </>
  );
}
