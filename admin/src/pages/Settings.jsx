import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Settings() {
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  const [settings, setSettings] = useState();
  const [logo, setLogo] = useState();
  const [alternativeLogo, setAlternativeLogo] = useState();
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [imageSource2, setImageSource2] = useState("");
  useEffect(() => {
    axios
      .get(`http://api.temaofset.online/api/SiteOption`)
      .then((response) => {
        setSettings(response.data);
        setLogo(response.data.logoImage);
        setAlternativeLogo(response.data.logoWhite);
        setPhone(response.data.phoneNumber);
        setEmail(response.data.email);
        setAdress(response.data.adress);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("logoWhite", alternativeLogo[0]);
    formData.append("logoImage", logo[0]);
    formData.append("Email", email);
    formData.append("PhoneNumber", phoneNumber);
    formData.append("Adress", adress);
    formData.append("SocialMediaLink", "aa");

    // var object = {};
    // formData.forEach((value, key) => (object[key] = value));
    // var json = JSON.stringify(object);

    axios
      .put("http://api.temaofset.online/api/SiteOption", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Ayarlar başarıyla güncellendi");
        setVariant("success");
        setShow(true);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        setInfo(error.message);
        setVariant("danger");
        setShow(true);
        console.log(error);
      });
  }

  function handleLogo(event) {
    event.preventDefault();
    setLogo(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  function handleAlternativeLogo(event) {
    event.preventDefault();
    setAlternativeLogo(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <>
      <div className="p-4">
        <h2 className="fs-3 header-title fw-semibold mb-4">Genel Ayarlar</h2>
        <Alert show={show} variant={variant}>
          <Alert.Heading>{info}</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant={variant}>
              Kapat
            </Button>
          </div>
        </Alert>
        <div className="row">
          <form className="d-flex row">
            <div className="col-12 pe-4">
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <div className="w-100">
                    <label className="mb-3 fw-semibold">
                      İletişim Numarası
                    </label>
                    <input
                      className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="w-100 ms-4">
                    <label className="mb-3 fw-semibold">E-Mail</label>
                    <input
                      className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <label className="mb-3 fw-semibold">Adres</label>
                <input
                  className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0"
                  type="text"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                />
                <div className="d-flex justify-content-around mb-3">
                  <div className="d-flex flex-column align-items-center">
                    <label className="mb-3 fw-semibold text-center">Logo</label>

                    {imageSource ? (
                      <div>
                        <p className="text-center">Önizleme</p>
                        <img
                          src={imageSource}
                          alt="logo"
                          width="100px"
                          className="border p-3 mb-3"
                        />
                      </div>
                    ) : (
                      <img
                        src={
                          settings &&
                          `http://api.temaofset.online/api/Files/${settings.logoImage}`
                        }
                        alt="logo"
                        width="100px"
                        className="border p-3 mb-3"
                      />
                    )}
                    <div className="file-input mb-3">
                      <input
                        className="product-image-button btn ps-0 w-100 border rounded-3"
                        type="file"
                        name=""
                        id=""
                        onChange={handleLogo}
                        accept="image/png"
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-column align-items-center mx-3">
                    <label className="mb-3 fw-semibold text-center">
                      Alternatif Logo
                    </label>

                    {imageSource2 ? (
                      <div>
                        <p className="text-center">Önizleme</p>
                        <img
                          src={imageSource2}
                          alt="logo"
                          width="100px"
                          className="border p-3 mb-3"
                        />
                      </div>
                    ) : (
                      <img
                        src={
                          settings &&
                          `http://api.temaofset.online/api/Files/${settings.logoWhite}`
                        }
                        alt="logo"
                        width="100px"
                        className="border p-3 mb-3 bg-black"
                      />
                    )}
                    <div className="file-input mb-3">
                      <input
                        className="product-image-button btn ps-0 w-100 border rounded-3"
                        type="file"
                        name=""
                        id=""
                        onChange={handleAlternativeLogo}
                        accept="image/png"
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-outline-dark rounded-3"
                  onClick={handleSubmit}
                >
                  Güncelle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </>
  );
}
