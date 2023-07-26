import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { generalStore } from "../store/generalStore";

export default function References() {
  const {baseUrl}=generalStore();
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [referenceImages, setReferenceImages] = useState([]);
  const [referenceLogo, setReferenceLogo] = useState(null);
  const [imageSource, setImageSource] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/Referances`)
      .then((response) => {
        setReferenceImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getReferences() {
    axios
      .get(`${baseUrl}/api/Referances`)
      .then((response) => {
        setReferenceImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Image", referenceLogo[0]);
    axios
      .post(`${baseUrl}/api/Referances`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Referans başarıyla eklendi");
        setVariant("success");
        setShow(true);
        getReferences();
        setImageSource("")
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error);
        setInfo(error);
        setVariant("danger");
        setShow(true);
      });
  }

  function handleReference(event) {
    setReferenceLogo(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource(reader.result);
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
  function handleDelete(event) {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      axios
        .delete(
          `${baseUrl}/api/Referances/${event.target.value}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            },
          }
        )
        .then((response) => {
          setInfo("Referans başarıyla silindi");
          setVariant("success");
          setShow(true);
          getReferences();
        })
        .catch((error) => {
          console.log(error);
          setInfo(error);
          setVariant("danger");
          setShow(true);
        });
    }
  }

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Referans Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-3">
            Eklemek istediğiniz referansın görselini seçin.
          </p>
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleReference}
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          {imageSource ? (
            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-2">Önizleme</p>
              <img
                src={imageSource}
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
            onClick={handleSubmit}
            className="rounded-3"
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="p-4">
        <div className="d-flex justify-content-between">
          <h2 className="fs-3 header-title fw-semibold">Referanslar</h2>
          <button
            className="btn btn-outline-dark rounded-3 px-4"
            onClick={handleModalShow}
          >
            Referans Ekle
          </button>
        </div>
        <div className="row">
          <Alert show={show} variant={variant} className="mt-4">
            <Alert.Heading>{info}</Alert.Heading>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant={variant}>
                Kapat
              </Button>
            </div>
          </Alert>
          <ul className="list-unstyled row references">
            {referenceImages &&
              referenceImages.map((item, index) => (
                <li
                  className="reference-item mx-3 my-3 col-2 border rounded-3 d-flex justify-content-center align-items-center p-3"
                  key={index}
                >
                  <img
                    src={`${baseUrl}/api/Files/${item.imageUrl}`}
                    width="100px"
                    height="50px"
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="col-12"
                  />
                  <button
                    className="btn image-delete-button"
                    value={item.id}
                    onClick={(e) => handleDelete(e)}
                  ></button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
