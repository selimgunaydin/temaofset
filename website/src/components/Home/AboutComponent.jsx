import axios from "axios";
import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function About(props) {
  const [customerCount, setCustomerCount] = useState(200);
  const [projectCount, setProjectCount] = useState(200);
  const [aboutInfo, setAboutInfo] = useState();
  useEffect(() => {
    setTimeout(() => {
      setCustomerCount(customerCount + 1);
    }, 30);
    setTimeout(() => {
      setProjectCount(projectCount + 1);
    }, 60);
  }, [customerCount]);

  useEffect(() => {
    axios
      .get(`http://api.temaofset.online/api/About`)
      .then((response) => {
        setAboutInfo(response.data);
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
        className="about py-5"
      >
        <div className="container px-5">
          <div className="row">
            <div className="about-left col-12 col-lg-6 order-lg-1 order-2">
              <h1 className="mb-4 fs-2 border-start border-5 border-danger ps-3">Hakkımızda</h1>
              <p className="fw-semibold fs-5 mb-2">
                {aboutInfo && aboutInfo.title}
              </p>
              <p className="mb-4">{aboutInfo && aboutInfo.defination}</p>
              <div
                className={`happy-customers ${
                  props.happyCustomers ? "d-lg-flex d-none" : "d-none"
                }`}
              >
                <div className="fs-5 d-flex flex-column align-items-start w-100">
                  <p className="fw-semibold fs-3">+{projectCount}</p>
                  <p className="text-secondary">Tamamlanmış Proje</p>
                </div>
                <div className="fs-5 d-flex flex-column align-items-start border-start w-100 ps-5">
                  <p className="fw-semibold fs-3">+{customerCount}</p>
                  <p className="text-secondary">Mutlu Müşteri</p>
                </div>
              </div>
            </div>
            <div className="about-right col-12 col-lg-6 d-flex justify-content-end order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="about-image rounded-3">
                <img
                  src={
                    aboutInfo &&
                    `http://api.temaofset.online/api/Files/${aboutInfo.image}`
                  }
                  alt="about-image"
                  className="rounded-3 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
