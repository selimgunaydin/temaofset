import React from "react";

export default function Showcase() {
  return (
    <>
      <div className="showcase pt-4 pb-5">
        <div className="container">
          <div className="title mb-5">
            <h3 className="text-center display-6">
              Sizin İçin Seçtiklerimiz
            </h3>
          </div>
          <div className="row">
            <div className="products row justify-content-center">
              <div className="product col-2 mx-3 rounded-3">
                <img
                  src="https://www.ceptematbaa.com/Product/images/fcf72706-1edd-4feb-adc7-2fb1c44bf0d4.jpeg"
                  alt="product"
                  width="200px"
                  className="rounded-3"
                />
              </div>
              <div className="product col-2 mx- rounded-3">
                <img
                  src="https://www.ceptematbaa.com/Product/images/bad06b16-fc60-4956-bfe8-e2dc31e2aa5d.jpeg"
                  alt="product"
                  width="200px"
                  className="rounded-3"
                />
              </div>
              <div className="product col-2 mx-3 rounded-3">
                <img
                  src="https://www.ceptematbaa.com/Product/images/fcf72706-1edd-4feb-adc7-2fb1c44bf0d4.jpeg"
                  alt="product"
                  width="200px"
                  className="rounded-3"
                />
              </div>
              <div className="product col-2 mx-3 rounded-3">
                <img
                  src="https://www.ceptematbaa.com/Product/images/c81b1236-d0f2-44b7-9dce-8eeeb63facf7.jpg"
                  alt="product"
                  width="200px"
                  className="rounded-3"
                />
              </div>
              <div className="product col-2 mx-3 rounded-3">
                <img
                  src="https://www.ceptematbaa.com/Product/images/bad06b16-fc60-4956-bfe8-e2dc31e2aa5d.jpeg"
                  alt="product"
                  width="200px"
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
