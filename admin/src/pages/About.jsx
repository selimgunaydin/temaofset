import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function About() {
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [aboutInfo, setAboutInfo] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutContent, setAboutContent] = useState("");
  const [aboutImage, setAboutImage] = useState("");
  const [aboutImageSource, setAboutImageSource] = useState("");

  const [visionData, setVisionData] = useState("");
  const [visionId, setVisionId] = useState("");
  const [visionTitle, setVisionTitle] = useState("");
  const [missionTitle, setMissionTitle] = useState("");
  const [visionImage, setVisionImage] = useState("");
  const [visionImageSource, setVisionImageSource] = useState("");

  const [certifications, setCertifications] = useState();
  const [certificationId, setCertificationId] = useState("");
  const [certificationTitle, setCertificationTitle] = useState("");
  const [certificationImage, setCertificationImage] = useState();
  const [certificationImageSource, setCertificationImageSource] = useState();

  useEffect(() => {
    axios
      .get(`http://api.temaofset.online/api/About`)
      .then((response) => {
        setAboutInfo(response.data);
        setAboutTitle(response.data.title);
        setAboutContent(response.data.defination);
        setAboutImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAboutSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("AboutImage", aboutImage[0]);
    formData.append("Title", aboutTitle);
    formData.append("Defination", aboutContent);

    // var object = {};
    // formData.forEach((value, key) => (object[key] = value));
    // var json = JSON.stringify(object);

    axios
      .put("http://api.temaofset.online/api/About", formData, {
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
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }

  function handleAboutImage(event) {
    event.preventDefault();
    setAboutImage(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAboutImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  //VİZYON & MİSYON İŞLEMLERİ

  useEffect(() => {
    axios
      .get("http://api.temaofset.online/api/SiteOption/Vision")
      .then((response) => {
        setVisionData(response.data);
        setVisionId(response.data.id);
        setVisionTitle(response.data.title);
        setMissionTitle(response.data.defination);
        setVisionImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleVisionSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("Id", visionId);
    formData.append("Image", visionImage[0]);
    formData.append("Title", visionTitle);
    formData.append("Defination", missionTitle);

    // var object = {};
    // formData.forEach((value, key) => (object[key] = value));
    // var json = JSON.stringify(object);

    axios
      .put("http://api.temaofset.online/api/SiteOption/Vision", formData, {
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
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }

  function handleVisionImage(event) {
    event.preventDefault();
    setVisionImage(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setVisionImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  //SERTİFİKA İŞLEMLERİ

  useEffect(() => {
    axios
      .get("http://api.temaofset.online/api/Achivements")
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getCertifications() {
    axios
      .get("http://api.temaofset.online/api/Achivements")
      .then((response) => {
        setCertifications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCertificationSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("Image", certificationImage[0]);
    formData.append("Title", certificationTitle);

    // var object = {};
    // formData.forEach((value, key) => (object[key] = value));
    // var json = JSON.stringify(object);

    axios
      .post("http://api.temaofset.online/api/Achivements", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Sertifika başarıyla eklendi");
        setVariant("success");
        setShow(true);
        setShowModal(false);
        setCertificationImage("");
        setCertificationImageSource("");
        getCertifications();
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
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  }
  function handleCertificationImage(event) {
    event.preventDefault();
    setCertificationImage(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificationImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleModalShow() {
    setShowModal(true);
  }

  function handleCertificationDelete(event) {
    event.preventDefault();
    setCertificationId(event.target.value);
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      axios
        .delete(
          `http://api.temaofset.online/api/Achivements/${event.target.value}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            },
          }
        )
        .then((response) => {
          setInfo("Sertifika başarıyla silindi");
          setVariant("success");
          setShow(true);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          getCertifications();
        })
        .catch((error) => {
          setInfo(error.message);
          setVariant("danger");
          setShow(true);
          console.log(error);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
    }
  }

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sertifika Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-3">Sertifika başlığını girin.</p>
          <input
            className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            onChange={(e) => setCertificationTitle(e.target.value)}
          />
          <p className="mb-3">
            Eklemek istediğiniz sertifikanın görselini seçin.
          </p>
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleCertificationImage}
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          {certificationImageSource ? (
            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-2">Önizleme</p>
              <img
                src={certificationImageSource}
                alt="logo"
                width="100px"
                className="border p-3 mb-3"
              />
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleModalClose}
            className="rounded-3"
          >
            Vazgeç
          </Button>
          <Button
            variant="primary"
            onClick={handleCertificationSubmit}
            className="rounded-3"
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4">
        <div className="mb-3">
          <div className="d-flex justify-content-between  mb-4">
            <h2 className="fs-3 header-title fw-semibold">Hakkımızda</h2>
            <button
              className="btn btn-outline-dark rounded-3 px-4"
              onClick={handleAboutSubmit}
            >
              Kaydet
            </button>
          </div>
          <Alert show={show} variant={variant}>
            <Alert.Heading>{info}</Alert.Heading>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant={variant}>
                Kapat
              </Button>
            </div>
          </Alert>
          <div className="row"></div>
          <div className="col-12">
            <div className="row">
              <div className="col-6">
                <div className="col-12">
                  <label className="mb-3 fw-semibold">Başlık</label>
                  <input
                    className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                    type="text"
                    value={aboutTitle}
                    onChange={(e) => setAboutTitle(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="mb-3 fw-semibold">İçerik</label>
                  <textarea
                    className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                    type="text"
                    rows="4"
                    value={aboutContent}
                    onChange={(e) => setAboutContent(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-column align-items-center col-6">
                <label className="mb-3 fw-semibold text-center">Görsel</label>

                {aboutImageSource ? (
                  <div>
                    <p className="text-center">Önizleme</p>
                    <img
                      src={aboutImageSource}
                      alt="logo"
                      width="175px"
                      className="border p-3 mb-3"
                    />
                  </div>
                ) : (
                  <img
                    src={
                      aboutImage &&
                      `http://api.temaofset.online/api/Files/${aboutImage}`
                    }
                    alt="logo"
                    width="175px"
                    className="border p-3 mb-3"
                  />
                )}
                <div className="file-input mb-3">
                  <input
                    className="product-image-button btn ps-0 w-100 border rounded-3"
                    type="file"
                    name=""
                    id=""
                    onChange={handleAboutImage}
                    accept="image/png, image/jpg, image/jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="d-flex justify-content-between  mb-4">
            <h2 className="fs-3 header-title fw-semibold">Vizyon & Misyon</h2>
            <button
              className="btn btn-outline-dark rounded-3 px-4"
              onClick={handleVisionSubmit}
            >
              Kaydet
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <div className="col-12">
                    <label className="mb-3 fw-semibold">Vizyon</label>
                    <textarea
                      className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                      type="text"
                      rows="4"
                      value={visionTitle}
                      onChange={(e) => setVisionTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="mb-3 fw-semibold">Misyon</label>
                    <textarea
                      className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
                      type="text"
                      rows="4"
                      value={missionTitle}
                      onChange={(e) => setMissionTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center col-6">
                  <label className="mb-3 fw-semibold text-center">Görsel</label>
                  {visionImageSource ? (
                    <div>
                      <p className="text-center">Önizleme</p>
                      <img
                        src={visionImageSource}
                        alt="logo"
                        width="175px"
                        className="border p-3 mb-3"
                      />
                    </div>
                  ) : (
                    <img
                      src={
                        visionImage &&
                        `http://api.temaofset.online/api/Files/${visionImage}`
                      }
                      alt="logo"
                      width="175px"
                      className="border p-3 mb-3"
                    />
                  )}
                  <div className="file-input mb-3">
                    <input
                      className="product-image-button btn ps-0 w-100 border rounded-3"
                      type="file"
                      name=""
                      id=""
                      onChange={handleVisionImage}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between  mb-4">
            <h2 className="fs-3 header-title fw-semibold">Sertifikalar</h2>
            <button
              className="btn btn-outline-dark rounded-3 px-4"
              onClick={handleModalShow}
            >
              Sertifika Ekle
            </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <ul className="row d-flex certifications">
                  {certifications &&
                    certifications.map((item, index) => (
                      <li
                        className="certification-item my-3 mx-3 col-2 d-flex rounded-3 border justify-content-center align-items-center py-3"
                        key={index}
                      >
                        <img
                          src={`http://api.temaofset.online/api/Files/${item.image}`}
                          alt=""
                          style={{ objectFit: "contain" }}
                          className="col-12"
                        />
                        <button
                          className="btn image-delete-button"
                          value={item.id}
                          onClick={(e) => handleCertificationDelete(e)}
                        ></button>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
