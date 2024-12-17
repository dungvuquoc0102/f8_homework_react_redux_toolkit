import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../../schemas/productSchema";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  editProduct,
} from "../../features/products/productActions";
import { getProductById } from "../../services/productService";
const AdminProductForm = () => {
  //init
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
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
  const handleProductForm = async (data) => {
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
    <div className="mx-auto w-[500px] border rounded-md p-3 m-3">
      <h1 className="text-center text-2xl mt-3">
        {id ? "Update" : "Add"} product
      </h1>
      <form onSubmit={handleSubmit(handleProductForm)}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="border rounded-md p-1"
            {...register("title")}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">price</label>
          <input
            type="number"
            className="border rounded-md p-1"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="border rounded-md p-1"
            {...register("description")}
          />
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </div>
        <div>
          <button className="p-2 bg-blue-500 rounded-md mt-3">
            {id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductForm;
