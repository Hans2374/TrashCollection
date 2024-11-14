// src/routes.js
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import NewsDetailPage from './pages/newsDetail';
import HomePage from './pages/homePage';
import RegulationPage from "./pages/regulation";
import AdminOrderPage from './pages/Admin/AdminOrderPage';
import AdminStatisticPage from './pages/Admin/AdminStatisticPage';
import AdminUserPage from './pages/Admin/AdminUserPage';
import AdminProductPage from './pages/Admin/AdminProductPage';
import Profilepage from './components/Profilepage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news-detail', element: <NewsDetailPage /> },
  { path: '/admin-product', element: <AdminProductPage /> },
  { path: '/admin-order', element: <AdminOrderPage /> },
  { path: '/admin-statistic', element: <AdminStatisticPage /> },
  { path: '/admin-user', element: <AdminUserPage /> },
  { path: "/regulation", element: <RegulationPage /> },
  { path: '/profile', element: <Profilepage /> },
];

export default routes;
