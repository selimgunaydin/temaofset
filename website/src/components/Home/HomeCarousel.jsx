import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shapeMask from "../../assets/img/shape-mask.svg";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import preview from "../../assets/img/preview.png";
import { generalStore } from "../../store/generalStore";

export default function HomeCarousel() {
  const { sliders } = generalStore();
  const [isVideo, setIsVideo] = useState();

  useEffect(() => {
    sliders &&
      sliders.forEach((item) => {
        if (item.image.includes("mp4")) {
          setIsVideo(true);
          return;
        }
      });
  }, [sliders]);

  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
        }}
        className="scroll-down d-none d-lg-block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
        ></svg>
      </button>
      {isVideo ? (
        <Carousel fade interval={null} controls prevIcon={null}>
          {sliders &&
            sliders.map((item, index) => {
              if (item.image.includes("mp4")) {
                return (
                  <Carousel.Item key={index}>
                    <div className="shape">
                      <img src={shapeMask} alt="mask" />
                    </div>
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={preview}
                      preload="auto"
                    >
                      <source
                        src={`http://api.temaofset.online/api/Files/${item.image}`}
                        type="video/mp4"
                      />
                    </video>
                    <Carousel.Caption>
                      <h3 className="mb-4">{item.title}</h3>
                      <p className="mb-4 w-100">{item.subTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              } else {
                return (
                  <Carousel.Item key={index}>
                    <div className="shape">
                      <img src={shapeMask} alt="mask" />
                    </div>
                    <img
                      className="d-block w-100"
                      src={`http://api.temaofset.online/api/Files/${item.image}`}
                      alt="Slider Image"
                    />
                    <Carousel.Caption>
                      <h3 className="mb-4">{item.title}</h3>
                      <p className="mb-4 w-100">{item.subTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
      ) : (
        <Carousel fade interval={2500} controls={false}>
          {sliders &&
            sliders.map((item, index) => {
              if (item.image.includes("mp4")) {
                return (
                  <Carousel.Item key={index}>
                    <div className="shape">
                      <img src={shapeMask} alt="mask" />
                    </div>
                    <video autoPlay loop muted playsInline preload="auto">
                      <source
                        src={`http://api.temaofset.online/api/Files/${item.image}`}
                        type="video/mp4"
                      />
                    </video>
                    <Carousel.Caption>
                      <h3 className="mb-4">{item.title}</h3>
                      <p className="mb-4 w-100">{item.subTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              } else {
                return (
                  <Carousel.Item key={index}>
                    <div className="shape">
                      <img src={shapeMask} alt="mask" />
                    </div>
                    <img
                      className="d-block w-100"
                      src={`http://api.temaofset.online/api/Files/${item.image}`}
                      alt="Slider Image"
                    />
                    <Carousel.Caption>
                      <h3 className="mb-4">{item.title}</h3>
                      <p className="mb-4 w-100">{item.subTitle}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              }
            })}
        </Carousel>
      )}
    </>
  );
}
