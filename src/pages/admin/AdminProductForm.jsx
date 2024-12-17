import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../schemas/productSchema";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  editProduct
} from "../../features/products/productActions";
import { getProductById } from "../../services/productService";
const AdminProductForm = () => {
  //init
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(productSchema)
  });
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { id } = useParams();
  //ex
  useEffect(() => {
    (async () => {
      if (id) {
        try {
          const res = await getProductById(id);
          reset(res);
        } catch (error) {
          console.log(error);
        }
      }
    })();
  }, []);
  const handleForm = async (data) => {
    try {
      if (id) {
        dispatch(editProduct(id, data));
        nav("/admin");
      } else {
        dispatch(createProduct(data));
        confirm("Go to home?") && nav("/admin");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };
  //render
  return (
    <div className="container mx-auto">
      <h1>{id ? "Edit" : "Add"} product form</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="border"
            type="text"
            name="title"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            className="border"
            type="text"
            name="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div>
          <button>{id ? "Edit" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductForm;
