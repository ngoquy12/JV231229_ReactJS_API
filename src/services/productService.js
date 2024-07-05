import BASE_URL from "../api";
import { HTTP_METHOD } from "../constants";

/**
 * Hàm lấy thông tin tất cả sản phẩm
 * @returns Phản hồi từ server
 */
export const findAll = async () => {
  const response = await BASE_URL[HTTP_METHOD.GET]("products");
  return response;
};

/**
 * Hàm xóa thông tin một sản phẩm theo id
 * @param {*} id Id cần xóa
 * @returns Phản hồi từ server
 */
export const remove = async (id) => {
  const response = await BASE_URL[HTTP_METHOD.DELETE](`products/${id}`);
  return response;
};
