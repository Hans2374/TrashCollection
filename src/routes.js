// src/routes.js
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import NewsDetailPage from './pages/newsDetail';

const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/news-detail', element: <NewsDetailPage /> },
];

export default routes;