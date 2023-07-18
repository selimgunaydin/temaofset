import React from "react";
import { generalStore } from "../store/generalStore";

export default function MobileError() {
  const { options } = generalStore();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <div
        className="logo mb-3 w-100 d-flex justify-content-center mt-3"
        onClick={() => navigate("/")}
      >
        <img
          src={
            options &&
            `http://api.temaofset.online/api/Files/${options.logoImage}`
          }
          alt="logo"
          width="250px"
        />
      </div>
      <div className="d-flex flex-column align-items-center my-5">
        <h1 className="display-1 fw-bold mb-4 text-danger">Uyarı!</h1>
        <p className="fs-3 mb-2 w-75 text-center">
          Daha iyi bir deneyim için tablet ya da masaüstü cihazdan giriş yapınız.
        </p>
      </div>
    </div>
  );
}
