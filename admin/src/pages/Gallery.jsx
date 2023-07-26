import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { generalStore } from "../store/generalStore";


export default function Gallery() {
  const {baseUrl}=generalStore();
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  const [sliders, setSliders] = useState("");
  const [showModal, setShowModal] = useState("");
  const [sliderTitle, setSliderTitle] = useState("");
  const [sliderContent, setSliderContent] = useState("");
  const [sliderImage, setSliderImage] = useState("");
  const [sliderImageSource, setSliderImageSource] = useState("");

  const [editSliderModalShow, setEditSliderModalShow] = useState(false);
  const [editSliderId, setEditSliderId] = useState("");
  const [editSliderTitle, setEditSliderTitle] = useState("");
  const [editSliderContent, setEditSliderContent] = useState("");
  const [editSliderImage, setEditSliderImage] = useState("");
  const [editSliderImageSource, setEditSliderImageSource] = useState("");

  const [selectedItemId, setSelectedItemId] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/SiteOption/Slider`)
      .then((response) => {
        setSliders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getSliders() {
    axios
      .get(`${baseUrl}/api/SiteOption/Slider`)
      .then((response) => {
        setSliders(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", sliderTitle);
    formData.append("subTitle", sliderContent);
    formData.append("image", sliderImage[0]);

    axios
      .post(`${baseUrl}/api/SiteOption/Slider`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Slider başarıyla eklendi");
        setVariant("success");
        setShow(true);
        setShowModal(false);
        setSliderImageSource("");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        getSliders();
      })
      .catch((error) => {
        setInfo(error.message);
        setVariant("danger");
        setShow(true);
        setShowModal(false);
        console.log(error);
      });
  }

  function handleSliderImage(event) {
    setSliderImage(event.target.files);
    if (event.target.files[0].size > 10485760) {
      alert("Yüklemek istediğiniz dosya boyutu çok büyük!");
      setShowModal(false);
    } else {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSliderImageSource(reader.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleModalShow() {
    setShowModal(true);
  }
  function handleEditModalClose() {
    setEditSliderModalShow(false);
  }

  function handleEditModalShow(event) {
    setEditSliderModalShow(true);
    setEditSliderId(event.target.value);
    axios
      .get(
        `${baseUrl}/api/SiteOption/Slider/items/${event.target.value}`
      )
      .then((response) => {
        console.log(response);
        setEditSliderTitle(response.data.title);
        setEditSliderContent(response.data.subTitle);
        setEditSliderImage(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleEditSliderImage(event) {
    setEditSliderImage(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditSliderImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleEditSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append("id", editSliderId);
    formData.append("title", editSliderTitle);
    formData.append("subTitle", editSliderContent);
    formData.append("image", editSliderImage[0]);

    axios
      .put(
        `${baseUrl}/api/SiteOption/Slider/items`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
          },
        }
      )
      .then((response) => {
        setInfo("Slider başarıyla güncellendi");
        setVariant("success");
        setShow(true);
        setEditSliderModalShow(false);
        setEditSliderId("");
        setEditSliderImage("");
        setEditSliderTitle("");
        setEditSliderContent("");
        getSliders();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        setInfo(error.message);
        setVariant("danger");
        setShow(true);
        setEditSliderModalShow(false);
        setEditSliderId("");
        setEditSliderImage("");
        setEditSliderTitle("");
        setEditSliderContent("");
        console.log(error);
      });
  }

  function handleDelete() {
    axios
      .delete(
        `${baseUrl}/api/SiteOption/Slider/${editSliderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user_token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setInfo("Slider başarıyla silindi");
        setVariant("success");
        setShow(true);
        setEditSliderModalShow(false);
        setEditSliderId("");
        setEditSliderImage("");
        setEditSliderTitle("");
        setEditSliderContent("");
        getSliders();
      })
      .catch((error) => {
        setInfo(error.message);
        setVariant("danger");
        setShow(true);
        setEditSliderModalShow(false);
        setEditSliderId("");
        setEditSliderImage("");
        setEditSliderTitle("");
        setEditSliderContent("");
        console.log(error);
      });
  }

  function handleSliderListOrder(event) {
    axios
      .put(
        `${baseUrl}/api/SiteOption/Slider/${selectedItemId}/orderid/${event.target.value}`
      )
      .then((response) => {
        console.log(response);
        getSliders();
        setInfo("Sıra başarıyla güncellendi");
        setVariant("success");
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setInfo(error.message);
        setVariant("danger");
        setShow(true);
      });
  }

  useEffect(() => {
    setSelectedItemId(null);
  }, [sliders]);

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Slider Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-3">Başlık</p>
          <input
            className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            onChange={(e) => setSliderTitle(e.target.value)}
          />
          <p className="mb-3">İçerik</p>
          <input
            className="mb-5 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            onChange={(e) => setSliderContent(e.target.value)}
          />
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleSliderImage}
              accept="image/png, image/jpg, image/jpeg, video/mp4"
            />
          </div>
          {sliderImageSource ? (
            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-2">Önizleme</p>
              <img
                src={sliderImageSource}
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
      <Modal show={editSliderModalShow} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Slider Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-3">Başlık</p>
          <input
            className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            value={editSliderTitle}
            onChange={(e) => setEditSliderTitle(e.target.value)}
          />
          <p className="mb-3">İçerik</p>
          <input
            className="mb-5 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            value={editSliderContent}
            onChange={(e) => setEditSliderContent(e.target.value)}
          />
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleEditSliderImage}
              accept="image/png, image/jpg, image/jpeg,video/mp4"
            />
          </div>
          {editSliderImageSource ? (
            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-2">Önizleme</p>
              <img
                src={editSliderImageSource}
                alt="logo"
                width="100px"
                className="border p-3 mb-3"
              />
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <img
                src={
                  editSliderImage &&
                  `${baseUrl}/api/Files/${editSliderImage}`
                }
                alt="logo"
                width="100px"
                className="border p-3 mb-3"
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleEditModalClose}
            className="rounded-3"
          >
            Vazgeç
          </Button>
          <Button variant="danger" onClick={handleDelete} className="rounded-3">
            Sil
          </Button>
          <Button
            variant="primary"
            onClick={handleEditSubmit}
            className="rounded-3"
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <h2 className="fs-3 header-title fw-semibold">İçerik Yönetimi</h2>
          <button
            className="btn btn-outline-dark rounded-3 px-4"
            onClick={handleModalShow}
          >
            Slider Ekle
          </button>
        </div>
        <Alert show={show} variant={variant} className="mt-4">
          <Alert.Heading>{info}</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant={variant}>
              Kapat
            </Button>
          </div>
        </Alert>
        <div className="row">
          <div>
            <div className="slider-box row border rounded-3 my-3 px-3 py-3 d-flex align-items-center">
              <div className="order col-3 fw-bold">Sıra Numarası</div>
              <div className="title col-3 fw-bold">Başlık</div>
              <div className="content col-3 fw-bold">İçerik</div>
              <div className="image col-3 fw-bold d-flex justify-content-end pe-5">
                Görsel
              </div>
            </div>
          </div>
          {sliders &&
            sliders.map((item, index) => {
              return (
                <div key={index} className="sliders">
                  <div className="slider-box row border rounded-3 mb-3 px-3 d-flex align-items-center">
                    <div className="order col-3 d-flex align-items-center">
                      <p className="">{item.order}</p>
                      <select
                        onChange={handleSliderListOrder}
                        onMouseDown={() => setSelectedItemId(item.id)}
                        className="rounded-3 py-2 px-2 ms-3"
                        value={
                          selectedItemId === item.id ? item.order : "Sırala"
                        }
                      >
                        <option disabled>Sırala</option>
                        {sliders.map((item, index) => {
                          return (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          );
                        })}
                      </select>
                      <button
                        className="btn btn-outline-dark rounded-3 ms-3 py-2"
                        onClick={(e) => handleEditModalShow(e)}
                        value={item.id}
                      >
                        Düzenle
                      </button>
                    </div>
                    <div className="title col-3">
                      <p>{item.title}</p>
                    </div>
                    <div className="content col-3">
                      <p>{item.subTitle}</p>
                    </div>
                    <div className="image col-3 d-flex justify-content-end">
                      <img
                        src={`${baseUrl}/api/Files/${item.image}`}
                        alt="video"
                        width="100px"
                        className="p-3 border-start"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
