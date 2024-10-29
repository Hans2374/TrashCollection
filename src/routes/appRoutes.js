import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Homepage from "../pages/homePage";
import Login from "../pages/login";
import News from "../pages/news";
import NewsDetail from "../pages/newsDetail";
import Classify from "../pages/classify";

export default function AppRoute() {

  return (
    <>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.homePage} element={<Homepage />} />
        <Route path={routes.news} element={<News />} />
        <Route path={routes.newsDetail} element={<NewsDetail />} />
        <Route path={routes.classify} element={<Classify />} />
      </Routes>
    </>
  );
}

// Cách gắn Link: 

// B1: import { routes } from "../routes";
//     import { Link as RouterLink } from 'react-router-dom';

// B2: 
{/* <RouterLink to={routes.loginPage} style={{  }}>
        <Button>
          Đăng nhập
        </Button>
    </RouterLink> */}


// Nếu dùng sx:
{/* <Link
      component={RouterLink}
      to={routes.loginPage}
      sx={{ textDecoration: 'none', color: 'black' }}
    >
      <Button
        sx={{ }}
      >
        Đăng nhập
      </Button>
    </Link> */}




// nếu thêm id: <Route path={`${routes.customerProfile}}/:id`} element={<CustomerProfile />} />
