import React, { useEffect } from "react";
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  // const nav = useNavigate();
  // const user = localStorage.getItem("user") || {};
  // useEffect(() => {
  //   (async () => {
  //     if (!user.id) nav("/login");
  //   })();
  // }, []);
  return (
    <div className="">
      <header className="py-3 mx-auto container flex items-center justify-between border-b">
        <Link to="/admin">react-redux + redux</Link>
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/admin">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product-add">Add Product</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-5">
          <div>
            hello, <span>Dung</span>
          </div>
          <div>
            <button>Logout</button>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
