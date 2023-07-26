import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { generalStore } from "../store/generalStore";

export default function Products() {
  const {baseUrl}=generalStore();
  const [categories, setCategories] = useState();
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [categoryImage, setCategoryImage] = useState("");
  const [categoryDefination, setCategoryDefination] = useState("");

  const [showProductModal, setShowProductModal] = useState();
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [productTitle, setProductTitle] = useState("");
  const [productImages, setProductImages] = useState([]);

  const [imageSource, setImageSource] = useState("");
  const [imageSource2, setImageSource2] = useState("");

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/Categories`)
      .then((response) => {
        setCategories(response.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function getCategories() {
    axios
      .get(`${baseUrl}/api/Categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("Image", categoryImage[0]);
    formData.append("Defination", categoryDefination);
    axios
      .post(`${baseUrl}/api/Categories`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Kategori başarıyla eklendi");
        setVariant("success");
        setShow(true);
        setShowModal(false);
        getCategories();
        setCategoryImage("");
        setCategoryDefination("");
        setImageSource2("");
      })
      .catch((error) => {
        setInfo(error.response.data.Errors[0]);
        setVariant("danger");
        setShow(true);
        setShowModal(false)
      });
  }

  function handleCategoryDelete(event) {
    if (window.confirm("Silmek istediğine emin misin?")) {
      axios
        .delete(
          `${baseUrl}/api/Categories/${event.target.value}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            },
          }
        )
        .then((response) => {
          setInfo("Kategori başarıyla silindi");
          setVariant("success");
          setShow(true);
          getCategories();
        })
        .catch((error) => {
          console.log(error);
          setInfo(error.response.data.Errors[0]);
          setVariant("danger");
          setShow(true);
        });
    }
  }

  function handleCategoryImage(event) {
    const file = event.target.files[0];
    setCategoryImage(event.target.files);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource2(reader.result);
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

  //ÜRÜN İŞLEMLERİ

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    axios
      .get(
        `${baseUrl}/api/Products/categories/${event.target.value}`
      )
      .then((response) => {
        setProducts(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      }, []);
  }

  function getProducts() {
    if (selectedCategory) {
      axios
        .get(
          `${baseUrl}/api/Products/categories/${selectedCategory}`
        )
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        }, []);
    }
  }

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  function handleProductSubmit(event) {
    event.preventDefault();
    if(productImages[0]==undefined){
      setInfo("'Image' must not be empty."); // DÖNEN ERROR EKLENECEK
      setVariant("danger");
      setShow(true);
      setShowProductModal(false)
    }else{
      const formData = new FormData();
    formData.append("Images", productImages[0]);
    formData.append("ProductName", productTitle);
    formData.append("CategoryId", selectedCategory);
    axios
      .post(`${baseUrl}/api/Products`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        },
      })
      .then((response) => {
        setInfo("Ürün başarıyla eklendi");
        setVariant("success");
        setShow(true);
        setShowProductModal(false);
        setProductImages("");
        setProductTitle("");
        setSelectedCategory("");
        setImageSource("");
        getProducts();
      })
      .catch((error) => {
        setInfo(error.response.data.Errors[0]); 
        setVariant("danger");
        setShow(true);
        setShowProductModal(false)
      });
    }
  }
  function handleProductDelete(event) {
    if (window.confirm("Silmek istediğinize emin misiniz?")) {
      axios
        .delete(
          `${baseUrl}/api/Products/${event.target.value}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user_token")}`,
            },
          }
        )
        .then((response) => {
          setInfo("Ürün başarıyla silindi");
          setVariant("success");
          setShow(true);
          getProducts();
        })
        .catch((error) => {
          console.log(error);
          setInfo(error);
          setVariant("danger");
          setShow(true);
        });
    }
  }

  function handleProductImage(event) {
    setProductImages(event.target.files);
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    categories && setSelectedCategory(categories[0].id);
  }, [categories]);

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Referans Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <p className="mb-3">Kategori başlığı girin.</p>
          <input
            className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            value={categoryDefination}
            onChange={(e) => setCategoryDefination(e.target.value)}
          />
          <p className="mb-3">
            Eklemek istediğiniz kategorinin görselini seçin.
          </p>
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleCategoryImage}
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          {imageSource2 ? (
            <div className="d-flex flex-column align-items-center">
              <p className="text-center mb-2">Önizleme</p>
              <img
                src={imageSource2}
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
      <Modal show={showProductModal} onHide={() => setShowProductModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <p className="mb-3">Ürün başlığı girin.</p>
          <input
            className="mb-3 py-2 px-3 text-muted  bg-light rounded-3 shadow-sm border-0 w-100"
            type="text"
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <p className="mb-3">Eklemek istediğiniz ürün görselini seçin.</p>
          <div className="file-input mb-3">
            <input
              className="product-image-button btn ps-0 w-100 border rounded-3"
              type="file"
              name=""
              id=""
              onChange={handleProductImage}
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
            onClick={() => setShowProductModal(false)}
            className="rounded-3"
          >
            Vazgeç
          </Button>
          <Button
            variant="primary"
            onClick={handleProductSubmit}
            className="rounded-3"
          >
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="p-4">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="fs-3 header-title fw-semibold">Kategori ve Ürünler</h2>
          <button
            className="btn btn-outline-dark rounded-3 px-4"
            onClick={handleModalShow}
          >
            Kategori Ekle
          </button>
        </div>
        <div className="row categories d-flex mb-4">
          <Alert show={show} variant={variant} className="mt-4">
            <Alert.Heading>{info}</Alert.Heading>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant={variant}>
                Kapat
              </Button>
            </div>
          </Alert>
          {categories &&
            categories.map((item, index) => {
              return (
                <div
                  className="category-box col-6 col-lg-2 d-flex flex-column justify-content-center align-items-center text-black border rounded-3 mb-3 mx-3"
                  key={index}
                >
                  <img
                    src={`${baseUrl}/api/Files/${item.image}`}
                    alt="karton"
                    width="75px"
                    height="75px"
                    className="mb-4"
                    style={{ objectFit: "contain" }}
                  />
                  <h2 className="fs-6 text-center">{item.defination}</h2>
                  <button
                    className="btn image-delete-button"
                    value={item.id}
                    onClick={(e) => handleCategoryDelete(e)}
                  ></button>
                </div>
              );
            })}
        </div>
        <div className="row products">
          <div className="mb-4 d-flex justify-content-between">
            <select
              onChange={(e) => handleCategoryChange(e)}
              className="rounded-3 p-2"
            >
              {categories &&
                categories.map((item, index) => {
                  return (
                    <option value={item.id} key={index}>
                      {item.defination}
                    </option>
                  );
                })}
            </select>
            <button
              className="btn btn-outline-dark rounded-3 px-4"
              onClick={() => setShowProductModal(true)}
            >
              Ürün Ekle
            </button>
          </div>
          <div className="row">
            {products &&
              products.map((item, index) => {
                return (
                  <div
                    className="product-box col-5 col-lg-2 d-flex flex-column justify-content-center align-items-center text-black border rounded-3 mb-3 mx-3"
                    key={index}
                  >
                    <img
                      src={`${baseUrl}/api/Files/${item.productImages[0]}`}
                      alt="karton"
                      width="75px"
                      height="75px"
                      className="mb-4"
                      style={{ objectFit: "contain" }}
                    />
                    <h2 className="fs-6 text-center">{item.productName}</h2>
                    <button
                      className="btn image-delete-button"
                      value={item.id}
                      onClick={(e) => handleProductDelete(e)}
                    ></button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
