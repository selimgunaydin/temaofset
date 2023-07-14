import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimesCircle,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { generalStore } from "../../store/generalStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const { getOptions, getCategories, categories, options } = generalStore();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState("");
  const { pathname } = useLocation();
  const [mobileMenuDropdown, setMobileMenuDropdown] = useState("d-none")


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    getOptions();
    getCategories();
  }, []);

  function handleMobileMenu() {
    setMobileMenuDropdown("d-none")
    if (mobileMenuIsOpen == "") {
      setMobileMenuIsOpen("active");
    } else {
      setMobileMenuIsOpen("");
    }
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header shadow-sm d-none d-lg-block"
      >
        <div className="container">
          <div className="d-flex align-items-center py-4">
            <div className="header-left col-3">
              <div className="logo">
                <Link to="/">
                  <img
                    src={
                      options &&
                      `http://api.temaofset.online/api/Files/${options.logo}`
                    }
                    alt="logo"
                    height="50px"
                  />
                </Link>
              </div>
            </div>
            <div className="header-middle col-9">
              <ul className="d-flex list-unstyled justify-content-end align-items-center mb-0">
                <li className="ms-4">
                  <Link to="#" className="fw-semibold">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="ms-4 products">
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
                <li className="ms-4">
                  <Link to="#" className="fw-semibold">
                    Hakkımızda
                  </Link>
                </li>
                <li className="ms-4">
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
                      `http://api.temaofset.online/api/Files/${options.logo}`
                    }
                    alt="logo"
                    width="200px"
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
                width="200px"
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
              <a
                onClick={handleMobileMenu}
                href="#"
                className="text-white fw-semibold text-uppercase"
              >
                Ana Sayfa
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={()=>mobileMenuDropdown=="d-none"?setMobileMenuDropdown("d-block"):setMobileMenuDropdown("d-none")}
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
                      <li key={index} className="py-2" onClick={handleMobileMenu}>
                        <Link to={`/${item.defination}`} className="text-white">
                          {item.defination}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#"
                className="text-white fw-semibold text-uppercase"
              >
                Hakkımızda
              </a>
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
