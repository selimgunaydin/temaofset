import { useEffect } from "react";

export default function Loaer(props) {
  const yourScrollEventHandler = () => {
    // Scroll event handler kodları burada
  };

  useEffect(() => {
    window.addEventListener('scroll', yourScrollEventHandler);
    return () => {
      window.removeEventListener('scroll', yourScrollEventHandler);
    };
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
