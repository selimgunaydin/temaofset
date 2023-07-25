import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimesCircle,
  faChevronDown,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { generalStore } from "../../store/generalStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export default function Header() {
  const { getCategories, categories, options } = generalStore();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState("");
  const { pathname } = useLocation();
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState("d-none");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  function handleMobileMenu() {
    setMobileMenuDropdown("d-none");
    if (mobileMenuIsOpen == "") {
      setMobileMenuIsOpen("active");
    } else {
      setMobileMenuIsOpen("");
    }
  }

  const [topBarOpen, setTopBarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (scrollY > 150) {
        setTopBarOpen(false);
      } else {
        setTopBarOpen(true);
      }
    };

    window.addEventListener("scroll", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header shadow-sm d-none d-lg-block"
      >
        <div className={`top-bar ${topBarOpen ? "active" : null}`}>
          <div className="container">
            <div className="row py-2">
              <div className="col-4 border-start border-1 border-white d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="15px"
                  height="15px"
                  viewBox="-4 0 32 32"
                  version="1.1"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    sketchtype="MSPage"
                  >
                    <g
                      id="Icon-Set"
                      sketchtype="MSLayerGroup"
                      transform="translate(-104.000000, -411.000000)"
                      fill="#fff"
                    >
                      <path
                        d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                        id="location"
                        sketchtype="MSShapeGroup"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p className="ms-2 text-white">{options && options.adress}</p>
              </div>
              <div className="col-4 border-start border-1 border-white  d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_15_529)">
                    <path
                      d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <a
                  href={`tel:${options && options.phoneNumber}`}
                  className="ms-2 text-white"
                >
                  {options && options.phoneNumber}
                </a>
              </div>
              <div className="col-4 border-start border-end border-1 border-white  d-flex align-items-center justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.0"
                  id="Layer_1"
                  width="15px"
                  height="15px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#fff"
                    d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z   M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808  l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842  C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228  c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"
                  />
                </svg>
                <a
                  href={`mailto: ${options && options.email}`}
                  className="ms-2 text-white"
                >
                  {options && options.email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex align-items-center py-4">
            <div className="header-left col-3">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      options &&
                      `http://api.temaofset.online/api/Files/${options.logoImage}`
                    }
                    alt="logo"
                    height="50px"
                  />
                </Link>
              </div>
            </div>
            <div className="header-middle col-9">
              <ul className="d-flex list-unstyled justify-content-end align-items-center mb-0">
                <li className={`ms-5 ${pathname == "/" ? "active" : null}`}>
                  <Link to="/" className="fw-semibold">
                    Ana Sayfa
                  </Link>
                </li>
                <li className={`ms-5 products`}>
                  <Link to="#" className="fw-semibold">
                    Ürünler
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ms-2 dropdown-arrow"
                    />
                  </Link>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown"
                  >
                    <ul className="list-unstyled">
                      {categories &&
                        categories.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link to={`/${item.defination}`}>
                                {item.defination}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </motion.div>
                </li>
                <li
                  className={`ms-5 ${pathname == "/about" ? "active" : null}`}
                >
                  <Link to="/about" className="fw-semibold">
                    Hakkımızda
                  </Link>
                </li>
                <li
                  className={`ms-5 ${pathname == "/contact" ? "active" : null}`}
                >
                  <Link to="/contact" className="fw-semibold">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className="col-3 header-right">
              <div className="d-flex ms-5 align-items-center justify-content-end">
                <Link to="/contact" className="fw-semibold">
                  <button className="btn btn-dark rounded-3 px-4">
                    Teklif Alın
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </motion.div>
      <div className="d-lg-none bg-white">
        <div className="navbar-mobile container-fluid ">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      options &&
                      `http://api.temaofset.online/api/Files/${options.logoImage}`
                    }
                    alt="logo"
                    width="125px"
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="menu d-flex justify-content-end">
                <button
                  className="mobile-menu-button btn"
                  onClick={handleMobileMenu}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu d-lg-none flex-column pt-4 ${mobileMenuIsOpen}`}
      >
        <div className="d-flex w-100 justify-content-between align-items-center mb-5">
          <div className="logo ms-4">
            <a href="#" className="display-6 ">
              <img
                src={
                  options &&
                  `http://api.temaofset.online/api/Files/${options.logoWhite}`
                }
                alt="logo"
                width="150px"
              />
            </a>
          </div>
          <div className="close-mobile-menu me-2">
            <button className="btn" onClick={handleMobileMenu}>
              <FontAwesomeIcon icon={faTimesCircle} size="xl" color="#fff" />
            </button>
          </div>
        </div>
        <div className="mobile-menu-links mb-4">
          <ul className="list-unstyled px-4">
            <li className="mb-3 pb-3 d-flex align-items-center">
              <Link
                onClick={handleMobileMenu}
                to="/"
                className="text-white fw-semibold text-uppercase"
              >
                Ana Sayfa
              </Link>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={() =>
                  mobileMenuDropdown == "d-none"
                    ? setMobileMenuDropdown("d-block")
                    : setMobileMenuDropdown("d-none")
                }
                href="#"
                className="d-flex justify-content-between w-100 align-items-center text-white fw-semibold text-uppercase"
              >
                Ürünler
                <span>
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </a>
            </li>
            <li className={`${mobileMenuDropdown}`}>
              <ul className="mb-3 pb-3">
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="py-2"
                        onClick={handleMobileMenu}
                      >
                        <Link to={`/${item.defination}`} className="text-white">
                          {item.defination}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <Link
                onClick={handleMobileMenu}
                to="/about"
                className="text-white fw-semibold text-uppercase"
              >
                Hakkımızda
              </Link>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <Link
                onClick={handleMobileMenu}
                to="/contact"
                className="text-white fw-semibold text-uppercase"
              >
                İLETİŞİM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
