import { motion } from "framer-motion";
import React from "react";

export default function References() {
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
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/%C3%9Clker_logo.svg/2560px-%C3%9Clker_logo.svg.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/tr/7/70/S%C3%BCta%C5%9F_logo.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_vitra_black.svg/1280px-Logo_vitra_black.svg.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://www.mngavm.com/wp-content/uploads/2022/12/ss-logo-avva-min.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/%C3%9Clker_logo.svg/2560px-%C3%9Clker_logo.svg.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/tr/7/70/S%C3%BCta%C5%9F_logo.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Logo_vitra_black.svg/1280px-Logo_vitra_black.svg.png"
                  width="100px"
                  alt=""
                />
              </div>
              <div className="slide d-flex align-items-center">
                <img
                  src="https://www.mngavm.com/wp-content/uploads/2022/12/ss-logo-avva-min.png"
                  width="100px"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
