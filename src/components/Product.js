import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  MenuItem,
  useMediaQuery,
  Icon,
  Select,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import colors from '../colors';
import styles from './Product.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import SearchIcon from '@mui/icons-material/Search';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const theme = createTheme();

const Product = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('lg'));

  const handleDropdownChange = (event, setDropdown) => {
    setDropdown(event.target.value);
  };

  const products = [
    {
      id: 1,
      name: "Tên sản phẩm",
      price: "60.000₫",
      img: `${process.env.PUBLIC_URL}/images/sec2.png`,
      points: "120",
      isEcoFriendly: true,
    },
    {
      id: 2,
      name: "Tên sản phẩm",
      price: "120.000₫",
      img: `${process.env.PUBLIC_URL}/images/sec1.png`,
      points: "180",
      isEcoFriendly: true,
    },
    {
      id: 3,
      name: "Tên sản phẩm",
      points: "60",
      img: `${process.env.PUBLIC_URL}/images/sec3.png`,
    },
    {
      id: 4,
      name: "Tên sản phẩm",
      price: "20,000₫",
      img: `${process.env.PUBLIC_URL}/images/Product4.png`,
    },
    {
      id: 5,
      name: "Tên sản phẩm",
      price: "50,000₫",
      img: `${process.env.PUBLIC_URL}/images/product1.png`,
    },
    {
      id: 6,
      name: "Tên sản phẩm",
      price: "34,000₫",
      img: `${process.env.PUBLIC_URL}/images/sec3.png`,
    },
    {
      id: 7,
      name: "Tên sản phẩm",
      price: "9,000₫",
      img: `${process.env.PUBLIC_URL}/images/sec1.png`,
    },
    {
      id: 8,
      name: "Tên sản phẩm",
      price: "10,000₫",
      img: `${process.env.PUBLIC_URL}/images/Product4.png`,
    },
    {
      id: 9,
      name: "Tên sản phẩm",
      price: "15,000₫",
      img: `${process.env.PUBLIC_URL}/images/product2.png`,
    },
    {
      id: 10,
      name: "Tên sản phẩm",
      price: "18,000₫",
      img: `${process.env.PUBLIC_URL}/images/product3.png`,
    },
    {
      id: 11,
      name: "Tên sản phẩm",
      price: "24,000₫",
      img: `${process.env.PUBLIC_URL}/images/sec3.png`,
    },
    {
      id: 12,
      name: "Tên sản phẩm",
      price: "65,000₫",
      img: `${process.env.PUBLIC_URL}/images/Product4.png`,
    },
    {
      id: 13,
      name: "Tên sản phẩm",
      price: "28,000₫",
      img: `${process.env.PUBLIC_URL}/images/sec1.png`,
    },
    {
      id: 14,
      name: "Tên sản phẩm",
      price: "60,000₫",
      img: `${process.env.PUBLIC_URL}/images/product1.png`,
    },
    {
      id: 15,
      name: "Tên sản phẩm",
      price: "30,000₫",
      img: `${process.env.PUBLIC_URL}/images/product2.png`,
    },
    {
      id: 16,
      name: "Tên sản phẩm",
      price: "18,000₫",
      img: `${process.env.PUBLIC_URL}/images/product3.png`,
    },
    {
      id: 17,
      name: "Tên sản phẩm",
      price: "15,000₫",
      img: `${process.env.PUBLIC_URL}/images/Product4.png`,
    },
    {
      id: 18,
      name: "Tên sản phẩm",
      price: "17,000₫",
      img: `${process.env.PUBLIC_URL}/images/sec3.png`,
    },
    {
      id: 19,
      name: "Tên sản phẩm",
      price: "60,000₫",
      img: `${process.env.PUBLIC_URL}/images/product1.png`,
    },
    {
      id: 20,
      name: "Tên sản phẩm",
      price: "120,000₫",
      img: `${process.env.PUBLIC_URL}/images/product2.png`,
      isEcoFriendly: true,
    },
    {
      id: 21,
      name: "Tên sản phẩm",
      price: "60,000₫",
      img: `${process.env.PUBLIC_URL}/images/product3.png`,
    },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = isSmallScreen ? 6 : 8;
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedData = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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
              color: colors.color2,
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
              color: colors.color2,
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
          display: 'flex', flexDirection: 'column', padding: {lg: 10, md: 10}, backgroundColor: colors.color1
        }}
      >
        {/* Filter & Search */}
        <Box
          className={styles.filterSearch}
          sx={{
            paddingTop: '20px',
            paddingBottom: '20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 1,
            height: '29px',
            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap' },
            marginTop: {xs: '50px'}
          }}
        >
          <Box sx={{ position: 'relative', marginTop: isSmallScreen ? 1 : 0, }}>
            <input
              className={styles.searchBox}
              type="text"
              placeholder="Bạn đang tìm gì?"
              style={{
                border: '2px solid #214738',
                width: '500px',
                borderRadius: '5px',
                fontFamily: 'KoHo',
                fontSize: '20px',
                fontFamily: 'KoHo',
                fontWeight: 400,
                lineHeight: '26px',
                outline: 'none',
                padding: 0,
                paddingLeft: '40px',
                paddingBottom: isSmallScreen ? '2px' : '0px',
              }}
            />
            <Icon className={styles.searchIcon} sx={{ position: 'absolute', left: '3%', top: '50%', transform: 'translateY(-50%)' }}>
              <SearchIcon />
            </Icon>
          </Box>
          <Box className={styles.filterContainer} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Select
              color='inherit'
              value={dropdown1}
              onChange={(event) => handleDropdownChange(event, setDropdown1)}
              displayEmpty
              sx={{
                border: '2px solid #214738',
                maxWidth: '300px',
                marginTop: isSmallScreen ? 1 : 0,
                height: '29px',
                borderRadius: '5px',
                fontFamily: 'KoHo',
                marginRight: 3,
                backgroundColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: '5px', border: 'none', outline: 'none' },
                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#f5f5f5',
                },
                fontSize: '20px',
                lineHeight: '26px',
              }}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => selected || 'Giá'}
            >
              <MenuItem value=""><em>Hủy</em></MenuItem>
              <MenuItem value={"< 50.000đ"}>Dưới 50.000đ</MenuItem>
              <MenuItem value={'50.000đ - 100.000đ'}>Từ 50.000đ đến 100.000đ</MenuItem>
              <MenuItem value={'> 100.00đ'}>Trên 100.00đ</MenuItem>
            </Select>
            <Select
              color='inherit'
              value={dropdown2}
              onChange={(event) => handleDropdownChange(event, setDropdown2)}
              displayEmpty
              sx={{
                border: '2px solid #214738',
                maxWidth: '110px',
                height: '29px',
                marginTop: isSmallScreen ? 1 : 0,
                borderRadius: '5px',
                fontFamily: 'KoHo',
                marginRight: 3,
                backgroundColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: '5px', border: 'none' },
                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#f5f5f5',
                },
                fontSize: '20px',
                lineHeight: '26px',
              }}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => selected || 'Thứ tự'}
            >
              <MenuItem value=""><em>Hủy</em></MenuItem>
              <MenuItem value={"A-Z"}>A-Z</MenuItem>
              <MenuItem value={"Z-A"}>Z-A</MenuItem>
            </Select>
            <Select
              color='inherit'
              value={dropdown3}
              onChange={(event) => handleDropdownChange(event, setDropdown3)}
              displayEmpty
              sx={{
                border: '2px solid #214738',
                maxWidth: '150px',
                height: '29px',
                marginTop: isSmallScreen ? 1 : 0,
                borderRadius: '5px',
                fontFamily: 'KoHo',
                marginRight: 3,
                backgroundColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: '5px', border: 'none' },
                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#f5f5f5',
                },
                fontSize: '20px',
                lineHeight: '26px',
              }}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => selected || 'Chất liệu'}
            >
              <MenuItem value=""><em>Hủy</em></MenuItem>
              <MenuItem value={'Giấy'}>Giấy</MenuItem>
              <MenuItem value={'Nhựa'}>Nhựa</MenuItem>
              <MenuItem value={'Tổng hợp'}>Tổng hợp</MenuItem>
            </Select>
            <Select
              color='inherit'
              value={dropdown4}
              onChange={(event) => handleDropdownChange(event, setDropdown4)}
              displayEmpty
              sx={{
                border: '2px solid #214738',
                maxWidth: '150px',
                height: '29px',
                marginTop: isSmallScreen ? 1 : 0,
                borderRadius: '5px',
                fontFamily: 'KoHo',
                backgroundColor: 'white',
                '& .MuiOutlinedInput-notchedOutline': { borderRadius: '5px', border: 'none' },
                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#f5f5f5',
                },
                fontSize: '20px',
                lineHeight: '26px',
              }}
              IconComponent={KeyboardArrowDownIcon}
              renderValue={(selected) => selected || 'Phân loại'}
            >
              <MenuItem value=""><em>Hủy</em></MenuItem>
              <MenuItem value={'Hữu cơ'}>Hữu cơ</MenuItem>
              <MenuItem value={'Vô cơ'}>Vô cơ</MenuItem>
              <MenuItem value={'Tái chế'}>Tái chế</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* Card Display */}
        <Box display='flex' justifyContent='center' paddingTop='30px' marginTop={isSmallScreen ? '50px' : ''}>
          <Grid className={styles.cardContainer} container rowSpacing={3} columnSpacing={2} sx={{ marginTop: { lg: '20px', sm: '50px', xs: '90px', md: '50px' } }}>
            {paginatedData.map((product) => (
              <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }} key={product.id}>
                <Card
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
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
                  <CardContent sx={{  textAlign: "center", backgroundColor: `${colors.color1}` }}>
                    <Typography variant="body1" sx={{ marginBottom: '10px',fontFamily: 'KoHo', color: `${colors.color2}` }}>
                      {product.name}
                    </Typography>
                    <Typography sx={{ fontWeight: '20px' ,fontFamily: 'KoHo', color: `${colors.color2}`, fontWeight: 'bold' }}>
                      {/* Kiểm tra các trường hợp */}
                      {product.price && product.points ? (
                        // Trường hợp hiển thị cả giá và điểm
                        <>
                          {product.price}   |   {product.points} 
                        </>
                      ) : product.points ? (
                        // Trường hợp chỉ hiển thị điểm
                        <span>{product.points} </span>
                      ) : product.price ? (
                        // Trường hợp chỉ hiển thị giá
                        <span>{product.price}</span>
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
                      borderRadius: "10%",
                      width: "40px",
                      height: "40px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
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

        {/* Pagination */}
        <Box display="flex" justifyContent="center" mb={2} mt={3}>
          <Pagination
            count={Math.ceil(products.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            color='success'
            sx={{
              '& .MuiPaginationItem-root': {
                border: '2px solid #214738', // Add border
                color: colors.color2, // Change text color
                '&.Mui-selected': {
                  backgroundColor: colors.color2, // Change background color of selected item
                  color: colors.color1, // Change text color of selected item
                },
                '&:hover': {
                  backgroundColor: '#46cf99', // Change background color on hover
                },
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                {...item}
                sx={{
                  '&.Mui-selected': {
                    borderColor: colors.color2, // Change border color of selected item
                  },
                }}
              />
            )}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Product />
  </ThemeProvider>
);

export default App;