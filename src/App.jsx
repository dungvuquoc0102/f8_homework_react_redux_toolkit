import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminProductList from "./pages/admin/AdminProductList";
import AdminProductForm from "./pages/admin/AdminProductForm";
import RegisterLayout from "./layouts/RegisterLayout";
import LoginLayout from "./layouts/LoginLayout";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./pages/HomePage";

function App() {
  //init
  //execute
  //render
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminProductList />} />
        <Route path="product-add" element={<AdminProductForm />} />
        <Route path="product-update/:id" element={<AdminProductForm />} />
      </Route>
      <Route path="/register" element={<RegisterLayout />} />
      <Route path="/login" element={<LoginLayout />} />
    </Routes>
  );
}

export default App;
