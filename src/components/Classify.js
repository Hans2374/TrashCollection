import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Icon,
    Select,
    MenuItem,
    useMediaQuery,
    Pagination,
    PaginationItem,
    Card,
    CardMedia,
    CardContent,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { useSelector } from 'react-redux';
import colors from '../colors';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Classify.module.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme();

const Classify = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const isLogin = useSelector((state) => state.auth.isLogin);
    const [dropdown1, setDropdown1] = useState('');
    const [dropdown2, setDropdown2] = useState('');
    const [dropdown3, setDropdown3] = useState('');
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('lg'));

    const handleDropdownChange = (event, setDropdown) => {
        setDropdown(event.target.value);
    };

    const cardData = [
        {
            id: 1,
            title: "Nhựa",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card1.png`,
        },
        {
            id: 2,
            title: "Cao su",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card2.png`,
        },
        {
            id: 3,
            title: "Giấy",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card3.png`,
        },
        {
            id: 4,
            title: "Thuỷ tinh",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card4.png`,
        },
        {
            id: 5,
            title: "Kim loại",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card5.png`,
        },
        {
            id: 6,
            title: "Nilon",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card6.png`,
        },
        {
            id: 7,
            title: "Đồ điện",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card7.png`,
        },
        {
            id: 8,
            title: "Vải",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card8.png`,
        },
        {
            id: 9,
            title: "Củi khô",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card9.png`,
        },
        {
            id: 10,
            title: "Cát sỏi",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card10.png`,
        },
        {
            id: 11,
            title: "Rác hữu cơ",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card11.png`,
        },
        {
            id: 12,
            title: "Rác vô cơ tổng hợp",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card12.png`,
        },
        {
            id: 13,
            title: "Cát sỏi",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card10.png`,
        },
        {
            id: 14,
            title: "Rác hữu cơ",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card11.png`,
        },
        {
            id: 15,
            title: "Rác vô cơ tổng hợp",
            description: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card12.png`,
        },
    ];

    const [page, setPage] = useState(1);
    const itemsPerPage = isSmallScreen ? 6 : 8;
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const paginatedData = cardData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <>
            <ScrollToTop />
            <Header1 />

            {/* Background image */}
            <Box
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/classify.png)`,
                    height: '421px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maxWidth: '100%',
                    margin: '0 auto',
                    position: 'relative',
                }}
            >
                {/* Box info */}
                <Box
                    sx={{
                        width: { xs: '278px', sm: '360px' }, // Responsive width
                        height: { xs: '169px', sm: '190px' }, // Responsive height
                        backgroundColor: 'rgba(252, 249, 243, 0.6)',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '8px',
                        boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    {/* Title */}
                    <Typography
                        sx={{
                            padding: '10px 20px 5px 20px',
                            fontFamily: 'KoHo',
                            fontSize: { xs: '24px', sm: '36px' }, // Responsive font size
                            fontWeight: 700,
                            lineHeight: { xs: '30px', sm: '46.8px' }, // Responsive line height
                            color: colors.color2,
                            textAlign: 'left',
                            marginBottom: '8px',
                        }}
                    >
                        THU MUA
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            padding: '10px 20px 5px 20px',
                            fontFamily: 'KoHo',
                            fontSize: { xs: '14px', sm: '16px' }, // Responsive font size
                            fontWeight: 400,
                            lineHeight: '20.8px',
                            color: colors.color2,
                            textAlign: 'left',
                        }}
                    >
                        Chúng tôi chuyên thu mua các loại phế liệu và nhiều loại vật liệu tái chế khác. Góp phần bảo vệ môi trường và tái sử dụng tài nguyên.
                    </Typography>
                </Box>
            </Box>
            <Header2 />
            {/* Nội dung */}
            {isLogin ? (
                <Box
                    className={styles.content}
                    sx={{
                        display: 'flex', flexDirection: 'column', backgroundColor: colors.color1, p: 10
                    }}
                >
                    <Box className={styles.welcome} sx={{ marginTop: 1 }}>
                        <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '30px', lineHeight: '39px', color: colors.color2 }}>
                            Chào mừng đối tác của TÊN!
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
                            Hãy chắc rằng bạn đã nắm rõ và đồng ý với{" "}
                            <RouterLink to={routes.regulation} style={{ textDecoration: "none" }}>
                                <Typography
                                    component="span"
                                    sx={{
                                        color: colors.color2,
                                        fontWeight: 600,
                                        fontFamily: "KoHo",
                                        fontSize: "24px",
                                        lineHeight: "31.2px",
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: "50%",
                                            right: "50%",
                                            bottom: 0,
                                            height: "2px",
                                            backgroundColor: colors.color2,
                                            transition: "left 0.3s, right 0.3s",
                                        },
                                        "&:hover": {
                                            color: colors.color2,
                                            "&::after": {
                                                left: 0,
                                                right: 0,
                                            },
                                        },
                                    }}
                                >
                                    quy định
                                </Typography>
                            </RouterLink>
                            {" "}của chúng tôi!
                        </Typography>
                    </Box>

                    {/* Search box and filters */}
                    <Box
                        className={styles.filterSearch}
                        sx={{
                            marginTop: '60px',
                            marginBottom: '20px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 1,
                            height: '29px',
                            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap' },
                        }}
                    >
                        <Box sx={{ position: 'relative', marginTop: isSmallScreen ? 1 : 0, }}>
                            <input
                                className={styles.searchBox}
                                type="text"
                                placeholder="Bạn đang có gì?"
                                style={{
                                    backgroundColor: `${colors.color1}`,
                                    border: `2px solid ${colors.color2}`,
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
                                    border: `2px solid ${colors.color2}`,
                                    maxWidth: '300px',
                                    marginTop: isSmallScreen ? 1 : 0,
                                    height: '29px',
                                    borderRadius: '5px',
                                    fontFamily: 'KoHo',
                                    marginRight: 3,
                                    backgroundColor: `${colors.color1}`,
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
                                    border: `2px solid ${colors.color2}`,
                                    maxWidth: '110px',
                                    height: '29px',
                                    marginTop: isSmallScreen ? 1 : 0,
                                    borderRadius: '5px',
                                    fontFamily: 'KoHo',
                                    marginRight: 3,
                                    backgroundColor: `${colors.color1}`,
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
                                    border: `2px solid ${colors.color2}`,
                                    maxWidth: '150px',
                                    height: '29px',
                                    marginTop: isSmallScreen ? 1 : 0,
                                    borderRadius: '5px',
                                    fontFamily: 'KoHo',
                                    backgroundColor: `${colors.color1}`,
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

                    {/* Card display */}
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Grid
                            className={styles.cardContainer}
                            container
                            rowSpacing={3}
                            columnSpacing={2}
                            sx={{
                                marginTop: { lg: '20px', sm: '70px', xs: '110px', md: '70px' },
                            }}
                        >
                            {paginatedData.map((card) => (
                                <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }} key={card.id} >
                                    <Card
                                        sx={{
                                            backgroundColor: `${colors.color1}`,
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            border: `3px solid ${colors.color2}`,
                                            borderRadius: "10px",
                                            boxShadow: "none",
                                            "&:hover": {
                                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                            },
                                            "&:hover .hoverActions": { opacity: 1 },
                                        }}
                                    >
                                        <RouterLink to={routes.classifyDetail} style={{ textDecoration: 'none' }}>
                                            <Box className={styles.card} sx={{ width: '100%' }}>
                                                <div>
                                                    <img className={styles.img} src={card.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                                </div>
                                                <div style={{ marginTop: -10 }}>
                                                    <div className={styles.cardTitle} style={{ color: `${colors.color2}`, paddingTop: '10px' }} >{card.title}</div>
                                                    <div className={styles.cardBody} style={{ color: `${colors.color2}`, paddingTop: '8px', paddingBottom: '10px' }}>{card.description}</div>
                                                </div>
                                                <span style={{ color: `${colors.color2}` }}>Xem chi tiết</span>
                                            </Box>
                                        </RouterLink>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Pagination */}
                    <Box display="flex" justifyContent="center" mb={2} mt={1} marginTop={5}>
                        <Pagination
                            count={Math.ceil(cardData.length / itemsPerPage)}
                            page={page}
                            onChange={handleChangePage}
                            color={`${colors.color2}`}
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    border: `2px solid ${colors.color2}`, // Add border
                                    color: colors.color2, // Change text color
                                    "&.Mui-selected": {
                                        backgroundColor: colors.color2, // Change background color of selected item
                                        color: colors.color1, // Change text color of selected item
                                    },
                                    ...(isSmallScreen ? {} : {
                                        "&:hover": {
                                            backgroundColor: "#46cf99", // Change background color on hover
                                        },
                                    }),
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
            ) : (
                <Box
                    sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', p: 6, gap: 2, height: '485px', justifyContent: 'center', backgroundColor: colors.color1
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/error404.png`} alt="Description" style={{ width: '100px', height: '100px' }} />
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>Rất tiết!</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>Bạn không thể sử dụng dịch vụ này nếu không phải là đối tác của <span style={{ fontWeight: 600 }}>TÊN</span>.</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
                        Trở thành đối tác của{" "}
                        <Typography component="span" style={{ fontFamily: 'KoHo', fontWeight: 600, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
                            TÊN
                        </Typography>{" "}
                        <RouterLink to={routes.login} style={{ textDecoration: "none" }}>
                            <Typography
                                component="span"
                                sx={{
                                    color: colors.color2,
                                    fontFamily: "KoHo",
                                    fontSize: "24px",
                                    lineHeight: "31.2px",
                                    fontWeight: 600,
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: "50%",
                                        right: "50%",
                                        bottom: 0,
                                        height: "3px",
                                        backgroundColor: colors.color2,
                                        transition: "left 0.3s, right 0.3s",
                                    },
                                    "&:hover": {
                                        color: colors.color2,
                                        "&::after": {
                                            left: 0,
                                            right: 0,
                                        },
                                    },
                                }}
                            >
                                ngay bây giờ!
                            </Typography>
                        </RouterLink>
                    </Typography>
                </Box>
            )}
            <Footer />
        </>
    );
};

const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Classify />
    </ThemeProvider>
);

export default App;