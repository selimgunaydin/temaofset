import React from "react";
import logoWhite from "../../assets/img/logo_white.svg";
import logo from "../../assets/img/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container pt-5 pb-4">
          <div className="row">
            <div className="col-12 col-lg-6 my-2">
              <div className="logo d-flex">
                <img src={logoWhite} alt="logo" height="100px" className="mb-3" />
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
                  <a href="#" className="text-decoration-none text-secondary">
                    Ana Sayfa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Hakkımızda
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 my-4">
              <h3 className="text-white fs-5 fw-semibold mb-3">Kategoriler</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Karton Ambalaj
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Taslamalı Ambalaj
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Mikro Ondüle Sıvamalı Ambalaj
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Karton Çantalar
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-decoration-none text-secondary">
                    Broşür ve Kataloglar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright py-2">
        <div className="container text-center">
          <p className="text-secondary mb-0">
            Copyright © 2023{" "}
            <a
              href="http://mssdev.online/"
              target="blank"
              className="ms-1 text-decoration-none text-white"
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
