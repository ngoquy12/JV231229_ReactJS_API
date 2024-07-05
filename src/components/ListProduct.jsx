import React, { useEffect, useState } from "react";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const id = 4;

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.content))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = () => {
    fetch(`http://localhost:8080/api/v1/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    fetch(`http://localhost:8080/api/v1/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Táo lê",
        price: 25000,
        status: true,
        stock: 10,
      }),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const handleAdd = () => {
    fetch(`http://localhost:8080/api/v1/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Cam ngọt",
        price: 30000,
        status: true,
        stock: 15,
      }),
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleAdd}>Add product</button>
    </div>
  );
}
