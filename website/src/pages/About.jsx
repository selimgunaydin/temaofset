import React from "react";
import AboutComponent from "../components/Home/AboutComponent";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { generalStore } from "../store/generalStore";

export default function About() {
  const [visionData, setVisionData] = useState();
  const [certifications, setCertifications] = useState();
  const {baseUrl}=generalStore();
  
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/SiteOption/Vision`)
      .then((response) => {
        setVisionData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/Achivements`)
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="about-page mb-4">
        <AboutComponent happyCustomers={false} />
      </div>
      <div className="vision mb-5">
        <div className="container px-5">
          <div className="row">
            <div className="vision-right col-12 col-lg-6 d-flex justify-content-end order-lg-1 order-1 mb-4 mb-lg-0">
              <div className="about-image rounded-3">
                <img
                  src={
                    visionData &&
                    `${baseUrl}/api/Files/${visionData.image}`
                  }
                  alt="about-image"
                  className="rounded-3 w-100"
                />
              </div>
            </div>
            <div className="vision-left col-12 col-lg-6 order-lg-2 order-2">
              <h1 className="mb-3 fs-2 border-start border-5 border-danger ps-3">
                Vizyon
              </h1>
              <p className="mb-3">{visionData && visionData.title}</p>
              <h1 className="mb-3 fs-2 border-start border-5 border-danger ps-3">
                Misyon
              </h1>
              <p className="mb-4">{visionData && visionData.defination}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="certification mb-5">
        <div className="d-flex flex-column my-4 text-center">
          <p className="fs-2 fw-semibold mb-3">Sertifikalar</p>
        </div>
        <div className="certifications container">
          <div className="row d-flex justify-content-center">
            {certifications &&
              certifications.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cerification-box col-lg-2 col-5 d-flex flex-column justify-content-center align-items-center mx-3 mb-3"
                  >
                    <img
                      src={`${baseUrl}/api/Files/${item.image}`}
                      alt="sertifika"
                      className="mb-2"
                      width="175px"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
