import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { generalStore } from "../store/generalStore";
import axios from "axios";
import { motion } from "framer-motion";

export default function Category() {
  const { defination } = useParams();
  const { categories,baseUrl } = generalStore();
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (categories != null) {
      categories.forEach((item) => {
        if (item.defination === defination) {
          setCategoryId(item.id);
        }
      });
    }
  }, [categories, defination]);

  useEffect(() => {
    if (categoryId) {
      axios
        .get(
          `${baseUrl}/api/Products/categories/${categoryId}`
        )
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [categoryId]);

  try {
    if (categories != null) {
      let definationList = categories.map((item) => item.defination);
      let isValid = definationList.includes(defination);
      if (isValid) {
        return (
          <>
            <div className="d-flex flex-column mb-1 text-center mb-4 category-page-title">
              <p className="fs-1 fw-bold">{defination}</p>
            </div>
            <ProductsMotion key={categoryId}>
              <div className="category-products">
                <div className="container">
                  <div className="row d-flex justify-content-lg-start justify-content-center">
                    {products &&
                      products.map((item, index) => (
                        <div className="product-image d-flex justify-content-center col-5 col-lg-2 mx-2 mx-lg-3 mb-4 p-3" key={index}>
                          <img
                            src={`${baseUrl}/api/Files/${item.productImages[0]}`}
                            alt="Ürün"
                            width="150px"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </ProductsMotion>
          </>
        );
      } else {
        return <Navigate to="/NotFound" />;
      }
    }
  } catch (error) {
    console.log(error);
    return null; // Handle the error appropriately
  }
}

// Wrapper component for applying motion effects
const ProductsMotion = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="mb-5"
  >
    {children}
  </motion.div>
);
