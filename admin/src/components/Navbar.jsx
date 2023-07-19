import React from "react";
import { generalStore } from "../store/generalStore";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faGear,
  faImage,
  faBox,
  faLock,
  faUser,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const { options, getOptions } = generalStore();
  useEffect(() => {
    getOptions();
  }, []);

  function handleLogout(){
    localStorage.removeItem("user_token")
    localStorage.removeItem("refresh_token")
    navigate("/")
    window.location.reload();
  }

  return (
    <>
      <nav>
        <div className="header d-flex flex-column p-4">
          <div className="logo mb-3 w-100 ps-3" onClick={() => navigate("/")}>
            <img
              src={
                options &&
                `http://api.temaofset.online/api/Files/${options.logoImage}`
              }
              alt="logo"
              width="175px"
            />
          </div>
          <div className="links">
            <ul className="list-unstyled">
              <li
                className={`my-3 p-3 ${
                  pathname == "/gallery" ? "active" : null
                }`}
                onClick={() => navigate("/gallery")}
              >
                <FontAwesomeIcon icon={faImage} />
                <span className="ms-3">İçerik Yönetimi</span>
              </li>
              <li
                className={`my-3 p-3 ${
                  pathname == "/products" ? "active" : null
                }`}
                onClick={() => navigate("/products")}
              >
                <FontAwesomeIcon icon={faBox} />
                <span className="ms-3">Kategori ve Ürünler</span>
              </li>
              <li
                className={`my-3 p-3 ${
                  pathname == "/references" ? "active" : null
                }`}
                onClick={() => navigate("/references")}
              >
                <FontAwesomeIcon icon={faUser} />
                <span className="ms-3">Referanslar</span>
              </li>
              <li
                className={`my-3 p-3 ${
                  pathname == "/about" ? "active" : null
                }`}
                onClick={() => navigate("/about")}
              >
                <FontAwesomeIcon icon={faInfo} />
                <span className="ms-3">Hakkımızda</span>
              </li>
              <li
                className={`my-3 p-3 ${
                  pathname == "/settings" ? "active" : null
                }`}
                onClick={() => navigate("/settings")}
              >
                <FontAwesomeIcon icon={faGear} />
                <span className="ms-3">Genel Ayarlar</span>
              </li>
              <li className="my-3 p-3 logout w-75" onClick={handleLogout}>
                {" "}
                <FontAwesomeIcon icon={faLock} />
                <span className="ms-3">Çıkış Yap</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
