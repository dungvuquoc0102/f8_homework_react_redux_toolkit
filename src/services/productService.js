import instance from ".";

export const getAllProducts = async () => {
  const res = await instance.get("/products");
  return res.data;
};
export const addProduct = async (product) => {
  const res = await instance.post("/products", product);
  return res.data;
};
export const updateProduct = async (id, product) => {
  const res = await instance.put(`/products/${id}`, product);
  return res.data;
};
export const deleteProduct = async (id) => {
  const res = await instance.delete(`/products/${id}`);
  return res.data;
};
export const getProductById = async (id) => {
  const res = await instance.get(`/products/${id}`);
  return res.data;
};
