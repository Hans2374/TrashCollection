import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Homepage from "../pages/homePage";
import Login from "../pages/login";
import News from "../pages/news";
import NewsDetail from "../pages/newsDetail";
import Classify from "../pages/classify";
import Regulation from "../pages/regulation";
import Product from "../components/Product";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../components/Profilepage";
import Sell from "../pages/sell";
import Cart from "../pages/cart";
import ClassifyDetail from "../pages/classifyDetail";
import AdminOrderPage from "../pages/Admin/AdminOrderPage";
import AdminProductPage from "../pages/Admin/AdminProductPage";
import AdminStatisticPage from "../pages/Admin/AdminStatisticPage";
import AdminUserPage from "../pages/Admin/AdminUserPage";

export default function AppRoute() {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.homePage} element={<Homepage />} />
        <Route path={routes.news} element={<News />} />
        <Route path={routes.newsDetail} element={<NewsDetail />} />
        <Route path={routes.classify} element={<Classify />} />
        <Route path={routes.regulation} element={<Regulation />} />
        <Route path={routes.product} element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path={routes.profile} element={<Profile />} />
        <Route path={routes.sell} element={<Sell />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.classifyDetail} element={<ClassifyDetail />} />
        <Route path={routes.adminproduct} element={<AdminProductPage />} />
        <Route path={routes.adminorder} element={<AdminOrderPage />} />
        <Route path={routes.adminstatistic} element={<AdminStatisticPage />} />
        <Route path={routes.adminuser} element={<AdminUserPage />} />
      </Routes>
    </>
  );
}
