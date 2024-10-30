import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FilterListIcon from "@mui/icons-material/FilterList";
import SortIcon from "@mui/icons-material/Sort";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import colors from '../colors';

const products = [
  {
    id: 1,
    name: "Tên sản phẩm",
    price: "60.000₫",
    img: "/images/sec2.png",
    points: "120",
    isEcoFriendly: true,
  },
  {
    id: 2,
    name: "Tên sản phẩm",
    price: "120.000₫",
    img: "/images/sec1.png",
    points: "180",
    isEcoFriendly: true,
  },
  {
    id: 3,
    name: "Tên sản phẩm",
    points: "60",
    img: "/images/sec3.png",
  },
  {
    id: 4,
    name: "Tên sản phẩm",
    price: "20,000₫",
    img: "/images/Product4.png",
  },
  {
    id: 5,
    name: "Tên sản phẩm",
    price: "50,000₫",
    img: "/images/product1.png",
  },
  {
    id: 6,
    name: "Tên sản phẩm",
    price: "34,000₫",
    img: "/images/sec3.png",
  },
  {
    id: 7,
    name: "Tên sản phẩm",
    price: "9,000₫",
    img: "/images/sec1.png",
  },
  {
    id: 8,
    name: "Tên sản phẩm",
    price: "10,000₫",
    img: "/images/Product4.png",
  },
  {
    id: 9,
    name: "Tên sản phẩm",
    price: "15,000₫",
    img: "/images/product2.png",
  },
  {
    id: 10,
    name: "Tên sản phẩm",
    price: "18,000₫",
    img: "/images/product3.png",
  },
  {
    id: 11,
    name: "Tên sản phẩm",
    price: "24,000₫",
    img: "/images/sec3.png",
  },
  {
    id: 12,
    name: "Tên sản phẩm",
    price: "65,000₫",
    img: "/images/Product4.png",
  },
  {
    id: 13,
    name: "Tên sản phẩm",
    price: "28,000₫",
    img: "/images/sec1.png",
  },
  {
    id: 13,
    name: "Tên sản phẩm",
    price: "60,000₫",
    img: "/images/product1.png",
  },
  {
    id: 14,
    name: "Tên sản phẩm",
    price: "30,000₫",
    img: "/images/product2.png",
  },
  {
    id: 15,
    name: "Tên sản phẩm",
    price: "18,000₫",
    img: "/images/product3.png",
  },
  {
    id: 16,
    name: "Tên sản phẩm",
    price: "15,000₫",
    img: "/images/Product4.png",
  },
  {
    id: 18,
    name: "Tên sản phẩm",
    price: "17,000₫",
    img: "/images/sec3.png",
  },
  {
    id: 19,
    name: "Tên sản phẩm",
    price: "60,000₫",
    img: "/images/product1.png",
  },
  {
    id: 20,
    name: "Tên sản phẩm",
    price: "120,000₫",
    img: "/images/product2.png",
    isEcoFriendly: true,
  },
  {
    id: 21,
    name: "Tên sản phẩm",
    price: "60,000₫",
    img: "/images/product3.png",
  },
];

const Product = () => {
  const [materialAnchorEl, setMaterialAnchorEl] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleMaterialClick = (event) =>
    setMaterialAnchorEl(event.currentTarget);
  const handleCategoryClick = (event) =>
    setCategoryAnchorEl(event.currentTarget);
  const handleClose = () => {
    setMaterialAnchorEl(null);
    setCategoryAnchorEl(null);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <ScrollToTop />
      <Header1 />
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/ProHeader.png)`,
          height: "421px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "278px", sm: "360px" },
            height: { xs: "169px", sm: "190px" },
            backgroundColor: 'rgba(252, 249, 243, 0.6)',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              padding: "10px 20px 5px 20px",
              fontFamily: "KoHo",
              fontSize: { xs: "24px", sm: "36px" },
              fontWeight: 700,
              color: "#214738",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            SẢN PHẨM XANH
          </Typography>
          <Typography
            sx={{
              padding: "10px 20px 5px 20px",
              fontFamily: "KoHo",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 400,
              color: "#214738",
              textAlign: "center",
            }}
          >
            Mỗi sản phẩm là một cách để bạn góp phần bảo vệ hành tinh, giảm
            thiểu rác thải và khuyến khích tái sử dụng tài nguyên.
          </Typography>
        </Box>
      </Box>

      <Header2 />
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: colors.color1,
          paddingBottom: '50px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "35px 85px 30px 70px",
            alignItems: "center",
            margin: "auto",
            gap: "8px",
            overflow: "visible",
          }}
        >
          <TextField
            placeholder="Bạn đang tìm gì?"
            variant="outlined"
            size="small"
            color="#214738"
            borderColor="#214738"
            sx={{
              flex: 8,
              marginRight: "10px",
            }}
          />
          <Button
            variant="outlined"
            startIcon={<SortIcon />}
            sx={{
              flex: 1,
              width: "100px",
              height: "40px",
              color: "#214738",
              borderColor: "#214738",
            }}
          >
            Giá
          </Button>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              width: "100px",
              height: "40px",
              color: "#214738",
              borderColor: "#214738",
            }}
          >
            A - Z
          </Button>
          <Button
            variant="outlined"
            onClick={handleMaterialClick}
            sx={{
              flex: 1.2,
              minWidth: "50px",
              height: "40px",
              color: "#214738",
              borderColor: "#214738",
            }}
          >
            Chất liệu
          </Button>
          <Button
            variant="outlined"
            onClick={handleCategoryClick}
            sx={{
              flex: 1,
              minWidth: "100px",
              height: "40px",
              color: "#214738",
              borderColor: "#214738",
            }}
          >
            Phân loại
          </Button>
          <Menu
            anchorEl={materialAnchorEl}
            open={Boolean(materialAnchorEl)}
            onClose={handleClose}
            disableScrollLock={true}
            PaperProps={{
              style: {
                maxWidth: "150px",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Giấy</MenuItem>
            <MenuItem onClick={handleClose}>Nhựa</MenuItem>
            <MenuItem onClick={handleClose}>Tổng hợp</MenuItem>
          </Menu>
          <Menu
            anchorEl={categoryAnchorEl}
            open={Boolean(categoryAnchorEl)}
            onClose={handleClose}
            disableScrollLock={true} // Thêm thuộc tính này để menu Phân loại không khóa thanh cuộn
            PaperProps={{
              style: {
                maxWidth: "150px",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Đồ gia dụng</MenuItem>
            <MenuItem onClick={handleClose}>Thời trang</MenuItem>
            <MenuItem onClick={handleClose}>Khác</MenuItem>
          </Menu>
        </Box>

        <Box sx={{ padding: "35px 85px 30px 70px" }}>
          <Grid container spacing={6}>
            {currentProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={`${product.id}-${index}`}>
                <Card
                  sx={{
                    position: "relative",
                    border: `2px solid ${colors.color2}`,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                    "&:hover .hoverActions": { opacity: 1 },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    sx={{ height: 180 }}
                  />
                  <CardContent sx={{ padding: "18px", textAlign: "center", backgroundColor:  `${colors.color1}` }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* Kiểm tra các trường hợp */}
                      {product.price && product.points ? (
                        // Trường hợp hiển thị cả giá và điểm
                        <>
                          Giá: {product.price} | Đổi bằng: {product.points} điểm
                        </>
                      ) : product.points ? (
                        // Trường hợp chỉ hiển thị điểm
                        <span>Đổi bằng: {product.points} điểm</span>
                      ) : product.price ? (
                        // Trường hợp chỉ hiển thị giá
                        <span>Giá: {product.price}</span>
                      ) : null}

                      {product.isEcoFriendly && (
                        <span
                          style={{
                            color: "green",
                            fontWeight: "bold",
                            marginLeft: 4,
                          }}
                        >
                          🌱
                        </span>
                      )}
                    </Typography>
                  </CardContent>

                  <Box
                    className="hoverActions"
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      backgroundColor: "#ffffff",
                      borderRadius: "10%", // Hình chữ nhật với cạnh sắc nét
                      width: "40px", // Điều chỉnh kích thước theo nhu cầu
                      height: "40px", // Điều chỉnh kích thước theo nhu cầu
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <IconButton color="primary" sx={{ color: "#214738" }}>
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <IconButton
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <ArrowBackIosIcon />
          </IconButton>

          {[...Array(totalPages).keys()].map((page) => (
            <Button
              key={page + 1}
              variant="outlined"
              onClick={() => handlePageChange(page + 1)}
              sx={{
                borderRadius: "50%", // Đổi thành hình tròn
                width: "40px", // Kích thước chiều rộng
                height: "40px", // Kích thước chiều cao
                margin: "0 5px", // Khoảng cách giữa các nút
                display: "flex", // Căn giữa nội dung
                justifyContent: "center", // Căn giữa nội dung
                alignItems: "center", // Căn giữa nội dung
                color: "#214738",
                borderColor: "#214738",
                transition: "background-color 0.3s, color 0.3s", // Hiệu ứng chuyển tiếp
                "&:hover": {
                  background: "#214738",
                  color: "white", // Màu chữ khi hover
                },
              }}
            >
              {page + 1}
            </Button>
          ))}

          <IconButton
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Product;
