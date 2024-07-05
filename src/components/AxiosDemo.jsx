import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../api";

export default function AxiosDemo() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);

  const loadData = () => {
    BASE_URL.get("products")
      .then((response) => setProducts(response.data.content))
      .catch((error) => console.log(error));
  };

  const getProductById = () => {
    const id = 4;

    BASE_URL.get(`products/${id}`)
      .then((response) => setProductDetail(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
    getProductById();
  }, []);

  const handleDelete = () => {
    const id = 4;
    BASE_URL.delete(`products/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleUpdate = () => {
    const id = 5;
    BASE_URL.put(`products/${id}`, {
      name: "Táo lê",
      price: 25000,
      status: true,
      stock: 10,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleAdd = () => {
    BASE_URL.post(`products`, {
      name: "",
      price: 30000,
      status: true,
      stock: 15,
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Thêm mới thành công");
        }
      })
      .catch((error) => {
        alert(error.response.data.name);
      });
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleAdd}>Add product</button>
    </div>
  );
}
