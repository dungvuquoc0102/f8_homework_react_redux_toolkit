import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  removeProduct,
} from "../../features/products/productActions";

const AdminProductList = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  //ex
  useEffect(() => {
    try {
      dispatch(fetchProducts());
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDelete = async (id) => {
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
    <>
      <div className="container mx-auto py-4">
        <div>
          <Link to="/admin/product-add" className="p-2 bg-blue-500 rounded-md">
            Add
          </Link>
        </div>
        <div className="border rounded-md mt-3">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="p-2">Id</th>
                <th className="p-2">Title</th>
                <th className="p-2">Price</th>
                <th className="p-2">Desc</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {products.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.price}</td>
                  <td className="p-2">{item.description}</td>
                  <td className="p-2 flex justify-center gap-4">
                    <Link
                      to={`/admin/product-update/${item.id}`}
                      className="p-2 block h-[40px] bg-yellow-500 rounded-md mr-2"
                    >
                      Update
                    </Link>
                    <button
                      className="p-2  bg-red-500 rounded-md"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProductList;
