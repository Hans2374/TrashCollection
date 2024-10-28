// src/routes.js
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import NewsDetailPage from './pages/newsDetail';
import HomePage from './pages/homePage';

const routes = [
  { path: '/', element: <HomePage /> }, 
  { path: '/login', element: <LoginPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news-detail', element: <NewsDetailPage /> },
];

export default routes;