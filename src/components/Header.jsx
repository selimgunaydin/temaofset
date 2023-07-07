import React from "react";
import logoWhite from "../assets/img/logo_white.svg";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="d-flex align-items-center py-3">
            <div className="header-left col-4">
              <div className="logo">
                <Link to="#" href="#">
                  <img src={logo} alt="logo" height="60px" />
                </Link>
              </div>
            </div>
            <div className="header-right col-8">
              <ul className="d-flex list-unstyled justify-content-end align-items-center mb-0">
                <li className="ms-4">
                  <Link
                    to="#"
                    className="text-decoration-none fw-semibold"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li className="ms-4">
                  <Link
                    to="#"
                    className="text-decoration-none fw-semibold"
                  >
                    Ürünler
                  </Link>
                </li>
                <li className="ms-4">
                  <Link
                    to="#"
                    className="text-decoration-none fw-semibold"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li className="ms-4">
                  <Link to="#">
                    {" "}
                    <button
                      to="#"
                      className="text-decoration-none fw-semibold rounded-5 contact-button px-4 py-2"
                    >
                      İletişim
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
