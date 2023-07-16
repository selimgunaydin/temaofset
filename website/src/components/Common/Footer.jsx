import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { generalStore } from "../../store/generalStore";

export default function Footer() {
  const { options, categories } = generalStore();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="footer"
      >
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-12 col-lg-6 my-2">
              <div className="logo d-flex">
                <img
                  src={
                    options &&
                    `http://api.temaofset.online/api/Files/${options.logoWhite}`
                  }
                  alt="logo"
                  height="60px"
                  className="mb-3"
                />
              </div>
              <p className="text-secondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-6 col-lg-3 my-4">
              <h3 className="text-white fs-5 fw-semibold mb-3">
                Tema Ofset Hakkında
              </h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-secondary">
                    Ana Sayfa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-secondary">
                    Hakkımızda
                  </a>
                </li>
                <li className="mb-2">
                  <Link to="/contact" className="text-secondary">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 my-4">
              <h3 className="text-white fs-5 fw-semibold mb-3">Kategoriler</h3>
              <ul className="list-unstyled">
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <li className="mb-2" key={index}>
                        <Link to={`/${item.defination}`} className="text-secondary">
                          {item.defination}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="copyright py-2">
        <div className="container text-center">
          <p className="text-secondary mb-0">
            Copyright © 2023{" "}
            <a
              href="http://mssdev.online/"
              target="blank"
              className="ms-1 text-white"
            >
              MSS
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
