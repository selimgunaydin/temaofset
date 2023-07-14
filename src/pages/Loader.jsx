import { useEffect } from "react";
import { generalStore } from "../store/generalStore";

export default function Loaer(props) {
  const { getOptions } = generalStore();
  useEffect(() => {
    getOptions();
  }, []);
  return (
    <div className="loader-main vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="cube-wrapper">
        <div class="cube-folding">
          <span class="leaf1"></span>
          <span class="leaf2"></span>
          <span class="leaf3"></span>
          <span class="leaf4"></span>
        </div>
        <span class="loading" data-name="Loading">
           Yükleniyor
        </span>
      </div>
    </div>
  );
}
