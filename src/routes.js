// src/routes.js
import LoginPage from './pages/login';
import NewsPage from './pages/news';

const routes = [
  { path: '/login', element: <LoginPage /> },
  { path: '/news', element: <NewsPage /> },
];

export default routes;