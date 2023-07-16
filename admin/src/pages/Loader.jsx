import { useEffect } from "react";
import { generalStore } from "../store/generalStore";

export default function Loaer(props) {
  const { getOptions } = generalStore();
  useEffect(() => {
    getOptions();
  }, []);
  return (
    <div className="loader-main vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="cube-wrapper">
        <div className="cube-folding">
          <span className="leaf1"></span>
          <span className="leaf2"></span>
          <span className="leaf3"></span>
          <span className="leaf4"></span>
        </div>
        <span className="loading" data-name="Loading">
           Yükleniyor
        </span>
      </div>
    </div>
  );
}
