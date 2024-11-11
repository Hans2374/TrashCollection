import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { useSelector } from "react-redux";
import { TextField, Rating, Avatar, Pagination } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { routes } from "../routes/routes";
import colors from "../colors";

const ProductDetail = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images] = useState([
    `${process.env.PUBLIC_URL}/images/ProDetail.png`,
    `${process.env.PUBLIC_URL}/images/ProDetail1.png`,
    `${process.env.PUBLIC_URL}/images/ProDetail2.png`,
  ]);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([
    {
      user: "User001",
      date: "06/11/2024",
      rating: 5,
      content: "Nhận xét của người mua",
    },
    {
      user: "User002",
      date: "07/11/2024",
      rating: 4,
      content:
        "Vẫn là nhận xét của người mua nhưng dài hơn Vẫn là nhận xét của người mua nhưng dài hơn",
    },
    {
      user: "User003",
      date: "08/11/2024",
      rating: 5,
      content:
        "Vẫn là nhận xét của người mua nhưng mà dài đến mức xuống được dòng Vẫn là nhận xét của người mua nhưng mà dài đến mức xuống được dòng",
    },
    {
      user: "User004",
      date: "09/11/2024",
      rating: 4,
      content: "Vẫn là nhận xét của người mua nhưng lần này có kèm ảnh",
      image: "/path/to/image1.jpg",
    },
    {
      user: "User005",
      date: "10/11/2024",
      rating: 5,
      content: "Vẫn là nhận xét của người mua nhưng lần này có kèm ảnh",
      image: "/path/to/image2.jpg",
    },
  ]);
  const handleAddReview = () => {
    if (review) {
      const newReview = {
        user: "User mới",
        date: new Date().toLocaleDateString(),
        rating,
        content: review,
      };
      setReviews([newReview, ...reviews]);
      setReview("");
      setRating(0);
    }
  };

  const relatedProducts = [
    {
      id: 1,
      name: "Sản phẩm A",
      img: images[0],
      price: "60.000đ",
      points: "120",
      isEcoFriendly: true,
    },
    {
      id: 2,
      name: "Sản phẩm B",
      img: images[1],
      price: "70.000đ",
      points: "130",
      isEcoFriendly: false,
    },
    {
      id: 3,
      name: "Sản phẩm C",
      img: images[2],
      price: "50.000đ",
      points: "110",
      isEcoFriendly: true,
    },
    {
      id: 4,
      name: "Sản phẩm D",
      img: images[0],
      price: "80.000đ",
      points: "140",
      isEcoFriendly: false,
    },
  ];

  const handleQuantityChange = (increment) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FCF9F3",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <ScrollToTop />
      <Box>
        <Header1 isLogin={isLogin} />
        <Header2 />
      </Box>
      <Box sx={{ maxWidth: 1200, mx: "auto", mt: 4, px: 2 }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ maxWidth: 500, position: "relative" }}
          >
            <Box sx={{ position: "relative", overflow: "hidden" }}>
              <CardMedia
                component="img"
                image={images[currentImageIndex]}
                alt="Sản phẩm chính"
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              />
              <Button
                onClick={handlePrevImage}
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  color: "#214738",
                  width: 30,
                  height: 30,
                  minWidth: 30,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffffa0",
                  "&:hover": { backgroundColor: "#ffffff" },
                }}
              >
                &lt;
              </Button>
              <Button
                onClick={handleNextImage}
                sx={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 10,
                  color: "#214738",
                  width: 30,
                  height: 30,
                  minWidth: 30,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffffa0",
                  "&:hover": { backgroundColor: "#ffffff" },
                }}
              >
                &gt;
              </Button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              {images.map((img, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={img}
                  alt={`Sản phẩm phụ ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    width: "96px",
                    height: "96px",
                    mx: 2,
                    cursor: "pointer",
                    borderRadius: "8px",
                    border:
                      currentImageIndex === index
                        ? "2px solid #214738"
                        : "1px solid #ddd",
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.1)" },
                  }}
                />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ maxWidth: 500 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#214738",
                textAlign: "left",
                fontSize: "1.8rem",
              }}
            >
              Hộp cắm viết bằng giấy (243 lượt mua)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#60A000",
                mt: 1,
                textAlign: "left",
                fontSize: "1.5rem",
              }}
            >
              60.000đ
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                color: "#333",
                textAlign: "left",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              <strong>Chất liệu:</strong> Giấy
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                color: "#333",
                textAlign: "left",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              <strong>Kích thước:</strong> Vừa phải, phù hợp để đặt trên bàn làm
              việc.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "#555",
                textAlign: "left",
                fontSize: "0.95rem",
                lineHeight: "1.6",
              }}
            >
              Sản phẩm thân thiện với môi trường, giá thành rẻ, dễ dàng tùy biến
              hoặc trang trí. Thích hợp cho không gian học tập, làm việc hoặc
              làm quà tặng nhỏ.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Button
                variant="outlined"
                onClick={() => handleQuantityChange(-1)}
                sx={{
                  minWidth: "36px",
                  height: "36px",
                  color: "#214738",
                  borderColor: "#214738",
                  fontSize: "1.2rem",
                  "&:hover": { backgroundColor: "#f2f2f2" },
                }}
              >
                -
              </Button>
              <Typography variant="body1" sx={{ mx: 2, fontSize: "1.2rem" }}>
                {quantity}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleQuantityChange(1)}
                sx={{
                  minWidth: "36px",
                  height: "36px",
                  color: "#214738",
                  borderColor: "#214738",
                  fontSize: "1.2rem",
                  "&:hover": { backgroundColor: "#f2f2f2" },
                }}
              >
                +
              </Button>
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  backgroundColor: "#214738",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#183026" },
                  padding: "8px 20px",
                  fontSize: "1.1rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "background-color 0.3s ease",
                }}
                startIcon={<AddShoppingCartIcon />}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#214738",
            fontWeight: "bold",
            fontSize: "1.5rem",
            mb: "-22px",
          }}
        >
          Sản phẩm cùng loại
        </Typography>
        <Box display="flex" justifyContent="center" mb={4}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={2}
            sx={{
              marginTop: { lg: "20px", sm: "50px", xs: "90px", md: "50px" },
            }}
          >
            {relatedProducts.map((product) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={product.id}>
                <Card
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    border: "2px solid #214738",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                    "&:hover .hoverActions": { opacity: 1 }, // Hiển thị hoverActions khi hover vào Card
                  }}
                >
                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    sx={{ height: 180 }}
                  />

                  {/* Product Details */}
                  <CardContent
                    sx={{ textAlign: "center", backgroundColor: "#FFF" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "KoHo",
                        color: "#214738",
                        marginBottom: "10px",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "#214738",
                        fontSize: "1.1rem",
                      }}
                    >
                      {product.price} | {product.points}
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

                  {/* Hover Actions - Add to Cart Button */}
                  <Box
                    className="hoverActions"
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      opacity: 0,
                      transition: "opacity 0.3s",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    <IconButton color="primary" sx={{ color: colors.color2 }}>
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            mt: 4,
            p: 4,
            backgroundColor: "#FFF8EE", // Thay đổi màu nền cho giống mẫu
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Đánh giá của bạn */}
          {isLogin ? (
            <>
              {/* Phần đánh giá của bạn */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333333", // Màu tiêu đề
                  mb: 2,
                  textAlign: "left",
                  fontSize: "1.2rem",
                }}
              >
                Đánh giá của bạn
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                  sx={{ fontSize: "2rem", color: "#FFD700" }}
                />
              </Box>
              <TextField
                placeholder="Nhập đánh giá của bạn..."
                multiline
                rows={3}
                fullWidth
                value={review}
                onChange={(e) => setReview(e.target.value)}
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                  fontSize: "0.9rem",
                  mb: 2,
                }}
              />
              <Button
                variant="contained"
                onClick={handleAddReview}
                sx={{
                  backgroundColor: "#214738",
                  color: "#FFFFFF",
                  width: "100%",
                  py: 1.5,
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                  "&:hover": { backgroundColor: "#183026" },
                }}
              >
                Gửi nhận xét
              </Button>

              <Divider sx={{ my: 4 }} />

              {/* Phần đánh giá của người mua */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#333333",
                  mb: 2,
                  textAlign: "left",
                  fontSize: "1.2rem",
                }}
              >
                Đánh giá của người mua: 5⭐ (102 lượt đánh giá)
              </Typography>
              {reviews.slice(0, 3).map((rev, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    mb: 3,
                    p: 2,
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                    alignItems: "flex-start",
                  }}
                >
                  <Avatar sx={{ bgcolor: "#214738", color: "#fff", mr: 2 }}>
                    {rev.user.charAt(0)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        color: "#214738",
                        textAlign: "left",
                      }}
                    >
                      {rev.user} - {rev.date}
                    </Typography>
                    <Rating
                      value={rev.rating}
                      readOnly
                      sx={{ mt: 0.5, color: "#FFD700" }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ mt: 1, color: "#555555", textAlign: "left" }}
                    >
                      {rev.content}
                    </Typography>
                    {rev.image && (
                      <CardMedia
                        component="img"
                        image={rev.image}
                        alt="Ảnh minh họa"
                        sx={{
                          mt: 2,
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px",
                        }}
                      />
                    )}
                  </Box>
                </Box>
              ))}
              <Pagination
                count={4}
                color="primary"
                sx={{ display: "flex", justifyContent: "center", mt: 2 }}
              />
            </>
          ) : (
            // Hiển thị khi chưa đăng nhập
            <Typography
              variant="body1"
              sx={{
                color: "#888",
                textAlign: "center",
                fontStyle: "italic",
                mt: 2,
              }}
            >
              Vui lòng{" "}
              <RouterLink to={routes.login} style={{ textDecoration: "none" }}>
                <Typography
                  component="span"
                  sx={{
                    color: "#214738",
                    fontWeight: "bold",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: "50%",
                      right: "50%",
                      bottom: 0,
                      height: "1px",
                      backgroundColor: "#214738",
                      transition: "left 0.3s, right 0.3s",
                    },
                    "&:hover": {
                      color: "#214738",
                      "&::after": {
                        left: 0,
                        right: 0,
                      },
                    },
                  }}
                >
                  đăng nhập
                </Typography>
              </RouterLink>{" "}
              để xem và gửi đánh giá của bạn.
            </Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ProductDetail;
