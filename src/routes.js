// src/routes.js
import LoginPage from "./pages/login";
import NewsPage from "./pages/news";
import NewsDetailPage from "./pages/newsDetail";
import HomePage from "./pages/homePage";
import AdminPage from "./pages/Admin/adminPage";
import ProductPage from "./components/Product";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/news-detail", element: <NewsDetailPage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "/product", element: <ProductPage /> },
];

export default routes;
