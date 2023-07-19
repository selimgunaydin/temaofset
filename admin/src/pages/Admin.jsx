import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <div className="p-4">
        <h2 className="fs-3 header-title fw-semibold mb-4">
          Yönetim paneline hoş geldiniz...
        </h2>
        <div>
          <div className="navigator row">
              <div className="col-6">
              <Link className="btn py-5 px-4 mb-4 rounded-3 w-100" to="/gallery">
              İçerik Yönetimi
            </Link>
              </div>
              <div className="col-6">
            <Link className="btn py-5 px-4 mb-4 rounded-3 w-100" to="/products">
              Kategori ve Ürünler
            </Link>
            </div>
            <div className="col-6">
            <Link className="btn py-5 px-4 mb-4 rounded-3 w-100" to="/references">
              Referanslar
            </Link>
            </div>
            <div className="col-6">
            <Link className="btn py-5 px-4 mb-4 rounded-3 w-100" to="/about">
              Hakkımızda
            </Link>
            </div>
            <div className="col-12">
            <Link className="btn py-5 px-4 mb-4 rounded-3 w-100" to="/settings">
              Genel Ayarlar
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
