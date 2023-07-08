import React from "react";
import logoWhite from "../../assets/img/logo_white.svg";
import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState("");

  function handleMobileMenu() {
    if (mobileMenuIsOpen == "") {
      setMobileMenuIsOpen("active");
    } else {
      setMobileMenuIsOpen("");
    }
  }
  return (
    <>
      <div className="header shadow-sm d-none d-lg-block">
        <div className="container">
          <div className="d-flex align-items-center py-3">
            <div className="header-left col-4">
              <div className="logo">
                <Link to="#" href="#">
                  <img src={logo} alt="logo" height="60px" />
                </Link>
              </div>
            </div>
            <div className="header-middle col-4">
              <ul className="d-flex list-unstyled justify-content-center align-items-center mb-0">
                <li className="ms-4">
                  <Link to="#" className="text-decoration-none fw-semibold">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="#" className="text-decoration-none fw-semibold">
                    Ürünler
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="#" className="text-decoration-none fw-semibold">
                    Hakkımızda
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="#" className="text-decoration-none fw-semibold">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-4 header-right">
              <div className="d-flex ms-5 align-items-center justify-content-end">
                <Link to="#" className="text-decoration-none fw-semibold">
                  <button className="btn btn-dark rounded-3 px-4">
                    Teklif Alın
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none bg-white">
        <div className="navbar-mobile container-fluid ">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <div className="logo">
                <a href="#" className="text-decoration-none">
                  <img src={logo} alt="logo" width="200px" />
                </a>
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
            <a href="#" className="text-decoration-none display-6 ">
              <img src={logoWhite} alt="logo" width="200px" />
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
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                Ana Sayfa
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#"
                className="d-flex justify-content-between w-100 align-items-center text-decoration-none text-white fw-semibold text-uppercase"
              >
                Ürünler
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#"
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                Hakkımızda
              </a>
            </li>
            <li className="mb-3 pb-3 d-flex align-items-center">
              <a
                onClick={handleMobileMenu}
                href="#"
                className="text-decoration-none text-white fw-semibold text-uppercase"
              >
                İLETİŞİM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
