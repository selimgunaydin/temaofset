import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function About() {
  const [customerCount, setCustomerCount] = useState(200);
  const [projectCount, setProjectCount] = useState(200);

  useEffect(() => {
    setTimeout(() => {
      setCustomerCount(customerCount + 1);
    }, 30);
    setTimeout(() => {
      setProjectCount(projectCount + 1);
    }, 60);
  }, [customerCount]);

  return (
    <>
      <div className="about py-5">
        <div className="container px-5">
          <div className="row">
            <div className="about-left col-12 col-lg-6 order-lg-1 order-2">
              <h1 className="mb-4 display-6">Hakkımızda</h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, assumenda saepe quasi nihil dolore accusantium
                eveniet consectetur, sint laudantium sed, nesciunt quaerat minus
                fuga velit repellendus eius autem deserunt quis!
              </p>
              <div className="happy-customers d-none d-lg-flex">
                <div className="fs-5 d-flex flex-column align-items-start w-100">
                  <p className="fw-semibold fs-3">+{projectCount}</p>
                  <p className="text-secondary">Tamamlanmış Proje</p>
                </div>
                <div className="fs-5 d-flex flex-column align-items-start border-start w-100 ps-5">
                  <p className="fw-semibold fs-3">+{customerCount}</p>
                  <p className="text-secondary">Mutlu Müşteri</p>
                </div>
              </div>
            </div>
            <div className="about-right col-12 col-lg-6 d-flex justify-content-end order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="about-image rounded-3">
                <img
                  src="https://lh3.googleusercontent.com/drive-viewer/AITFw-xnB2poENSgDzoMWA2zU0VM4HUE6FY7VDl9MgrzfIFVEBMa4R0ieDx8VRZIZAxHwXtkFup-5tjJPLWwCCUOD6lk3u3peg=s1600"
                  alt="about-image"
                  className="rounded-3 w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
