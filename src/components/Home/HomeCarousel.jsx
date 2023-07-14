import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shapeMask from "../../assets/img/shape-mask.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HomeCarousel() {
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
      <Carousel fade interval={2000} controls={false}>
        <Carousel.Item>
          <div className="shape">
            <img src={shapeMask} alt="mask" />
          </div>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-y5Nxz_RnGYrV4B__pKshmU0d6yejTWRXLmbxI7S7S3bosqZ80W0dV7prlR2zCUo18hfCq7cfU08EMmWjEQ5RzTo6LR=s1600"
            alt="Slider Image"
          />
          <Carousel.Caption>
            <h3 className="mb-4">Lorem ipsum</h3>
            <p className="mb-4 w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="shape">
            <img src={shapeMask} alt="mask" />
          </div>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yrZ4xNHEK541ntRptXpT2d3Ebupe_a4V-tIhV2ZFXbApRVsP4N2qH9muKxNt6dzhq_z7ecrZjUWsITbuan1Vja_0LAvw=s1600"
            alt="Slider Image"
          />
          <Carousel.Caption>
            <h3 className="mb-4">Dolor sit amet</h3>
            <p className="mb-4 w-100">
              In fugiat impedit facere modi sequi aut quaerat.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="shape">
            <img src={shapeMask} alt="mask" />
          </div>
          <img
            className="d-block w-100"
            src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yMNYuaMCTjnQV5GA9rjm-Mew-fDRoMlGyK20uZ6UdIdiTjk_iwSESHansSnu_6ryZxgw89-teHxv0YycmR4ZXda2HZ6Q=s1600"
            alt="Slider Image"
          />
          <Carousel.Caption>
            <h3 className="mb-4">Consectetur adipisicing elit</h3>
            <p className="mb-4 w-100">
              Doloribus esse in nemo a aut vero quaerat facilis dicta veritatis
              ea, vitae suscipit corporis excepturi.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
