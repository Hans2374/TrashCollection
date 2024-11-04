// src/routes.js
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import NewsDetailPage from './pages/newsDetail';
import HomePage from './pages/homePage';
import AdminOrderPage from './pages/Admin/AdminOrderPage';
import AdminProductPage from './pages/Admin/AdminProductPage';
import AdminUserPage from './pages/Admin/AdminUserPage';
import AdminStatisticPage from './pages/Admin/AdminStatisticPage';



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
];

export default routes;