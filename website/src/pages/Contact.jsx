import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMailBulk,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Location from "../components/Home/Location";
import axios from "axios";
import { generalStore } from "../store/generalStore";
import { motion } from "framer-motion";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderMail, setSenderMail] = useState("");
  const [mailDefination, setMailDefination] = useState("");
  const [mailModal, setMailModal] = useState(false);
  const [formAlert, setFormAlert] = useState([]);
  const { options } = generalStore();

  function handleSubmit(event) {
    event.preventDefault();

    let mail = {
      senderName: senderName,
      senderMail: senderMail,
      defination: mailDefination,
    };

    
    if (
      senderName.length > 3 &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(senderMail) &&
      mailDefination.length >= 1
    ) {
      axios
        .post(`http://api.temaofset.online/api/SiteOption/sendmail`, mail)
        .then((response) => {
          console.log(response);
          setMailModal(true);
        })
        .catch((error) => {
          console.log(error);

          console.log(formAlert);
        })
        .finally(() => {
          setTimeout(() => {
            setMailModal(false);
          }, 2000);
        });
    } else {
      setFormAlert("");
      if (senderName.length < 3) {
        setFormAlert((current) => [
          ...current,
          "*İsminiz 3 karakterden kısa olamaz.",
        ]);
      }

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(senderMail)) {
        setFormAlert((current) => [
          ...current,
          "*Lütfen geçerli bir mail adresi girin.",
        ]);
      }

      if (mailDefination.length <= 1) {
        setFormAlert((current) => [
          ...current,
          "*Lütfen geçerli bir mesaj girin.",
        ]);
      }
    }
  }
  function SendMailModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Body className="overflow-hidden position-relative rounded-3">
          <div className="modal-left-color bg-success"></div>
          <div className=" text-center d-flex align-items-center justify-content-center">
            <div className="modal-modal-icon">
              <FontAwesomeIcon icon={faCheck} size="xl" />
            </div>
            <div className="modal-modal-text ps-2">
              <p>Mesajınız başarıyla gönderildi!</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
  return (
    <>
      <SendMailModal show={mailModal} onHide={() => setMailModal(false)} />
      <motion.div       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} className="container contact">
        <div className="d-flex flex-column my-4 text-center">
          <p className="fs-1 fw-bold">İletişim</p>
        </div>
        <div className="row d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
          <div className="col-12 col-lg-4 d-flex flex-column mb-5 mb-lg-0">
            <p className="text-muted fw-light mb-4">BİZE ULAŞIN</p>
            <p className="fs-2 fw-semibold mb-4">İletişim</p>
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faHome} size="xl" />
              <p className="px-3 text-muted fw-light mb-0">{options && options.adress}</p>
            </div>
            <div className="d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMailBulk} size="xl" />
              <a
                  href={`mailto: ${options && options.email}`}
                className="px-3 text-muted fw-light text-decoration-none"
              >
                {options && options.email}
              </a>
            </div>
            <div className="d-flex align-items-center mb-3">
              {" "}
              <FontAwesomeIcon icon={faPhone} size="xl" />
              <a
                  href={`tel:${options && options.phoneNumber}`}
                className="px-3 text-muted fw-light text-decoration-none"
              >
                {options && options.phoneNumber}
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <p className="text-muted fw-light mb-4">MESAJ BIRAKIN</p>
            <form className="contact-form">
              <label className="mb-4 fw-semibold fs-2">
                Sizi dinlemeyi seviyoruz
              </label>
              <div>
                {formAlert &&
                  formAlert.map((element, index) => {
                    return (
                      <p key={index} className="mb-1">
                        {element}
                      </p>
                    );
                  })}
              </div>
              <div className="d-flex flex-column flex-lg-row mb-3">
                <div className="input-container d-flex flex-column w-100">
                  <label className="mb-3">
                    İsim <span className="text-primary">*</span>
                  </label>
                  <input
                    placeholder="İsim"
                    type="text"
                    name="uname"
                    required
                    className="mb-3 p-3 text-muted bg-light rounded rounded-3 shadow-sm border-0"
                    onChange={(e) => setSenderName(e.target.value)}
                  />
                </div>
                <div className="input-container d-flex flex-column w-100 ms-0 ms-lg-3">
                  <label className="mb-3">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    placeholder="E-Mail"
                    type="text"
                    name="email"
                    required
                    className="mb-3 p-3 text-muted bg-light rounded rounded-3 shadow-sm border-0"
                    onChange={(e) => setSenderMail(e.target.value)}
                  />
                </div>
              </div>

              <div className="input-container d-flex flex-column mb-3">
                <label className="mb-3">
                  Mesaj <span className="text-primary">*</span>
                </label>
                <textarea
                  placeholder="Mesaj"
                  type="text"
                  name="mesaj"
                  required
                  className="mb-3 p-3 text-muted bg-light rounded rounded-3 shadow-sm border-0"
                  onChange={(e) => setMailDefination(e.target.value)}
                />
              </div>
              <div className="button-container d-flex flex-column mb-5">
                <button
                  type="submit"
                  className="btn btn-outline-dark py-2 rounded-3"
                  onClick={handleSubmit}
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
      <Location />
    </>
  );
}
