import React, { useEffect, useState } from "react";
import { findAll, remove } from "./services/productService";
import { STATUS_CODE } from "./constants";

export default function ManagerProduct() {
  const [products, setProducts] = useState([]);
  const loadData = async () => {
    try {
      const response = await findAll();

      setProducts(response.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await remove(id);

      if (response.status === STATUS_CODE.SUCCESS) {
        // Hiển thị thông báo xóa thành công
        // Render lại danh sách
        loadData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h3>List Product</h3>
      <button>Add product</button>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button>Sửa</button>
                <button onClick={() => handleDelete(product.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
