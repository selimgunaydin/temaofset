import React from "react";
import User from "../assets/img/user.png";
import MiniLogo from "../assets/img/mini_logo.svg";

export default function NavbarInfo() {
  return (
    <div className="navbar-info px-4 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img src={MiniLogo} alt="mini-logo" width="50px" />
          <div className="d-flex align-items-center ms-3">
            <p className="fs-3 title">Tema Ofset Yönetim Paneli</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center rounded-circle user-info">
          <div className="avatar">
            <img
              src={User}
              alt="avatar"
              width="40px"
              className="rounded-circle"
            />
          </div>
          <div className="info d-flex flex-column ms-3 text-secondary fw-semibold">
            <p>Yönetici</p>
          </div>
        </div>
      </div>
    </div>
  );
}
