import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  removeProduct
} from "../../features/products/productActions";

const AdminProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //ex
  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchProducts());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const handleDeleteProduct = async (id) => {
    if (!confirm("Delete?")) return;
    try {
      dispatch(removeProduct(id));
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) return <div className="container mx-auto">Loading....</div>;
  if (error) return <div className="container mx-auto">{error}</div>;
  //ren
  return (
    <div className="container mx-auto">
      <Link to="/admin/product-add">Add</Link>
      <table>
        <thead>
          <tr>
            <th className="p-2">Id</th>
            <th className="p-2">Title</th>
            <th className="p-2">Price</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td className="p-2">{item.id}</td>
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">
                <Link to={`/admin/product-update/${item.id}`}>Update</Link>
                <button onClick={() => handleDeleteProduct(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductList;
