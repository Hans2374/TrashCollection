import React, { useState } from 'react';
import { Box, Typography, Icon, Select, MenuItem, useMediaQuery, Pagination } from '@mui/material';
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
            {!isSmallScreen && <ScrollToTop />}
            <Header1 isLogin={isLogin} />

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
                            color: '#214738',
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
                            color: '#214738',
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
                    className={styles.container}
                    sx={{
                        display: 'flex', flexDirection: 'column', p: 10, gap: 2, backgroundColor: colors.color1
                    }}
                >
                    <div className={styles.welcome}>
                        <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '30px', lineHeight: '39px', color: colors.color2 }}>
                            Chào mừng đối tác của TÊN!
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
                            Hãy chắc rằng bạn đã nắm rõ và đồng ý với <RouterLink to={routes.regulation} style={{ textDecoration: 'underline', color: colors.color2, fontWeight: 600 }}>quy định</RouterLink> của chúng tôi!
                        </Typography>
                    </div>

                    {/* Search box and filters */}
                    <Box
                        className={styles.filterSearch}
                        sx={{
                            marginTop: '60px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            gap: 1,
                            height: '29px',
                            flexWrap: { xs: 'wrap', sm: 'wrap', md: 'wrap' },
                        }}
                    >
                        <Box sx={{ position: 'relative' }}>
                            <input
                                className={styles.searchBox}
                                type="text"
                                placeholder="Bạn đang có gì?"
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

                    {/* Card display */}
                    <Box display='flex' justifyContent='center'>
                        <Grid className={styles.cardContainer} container rowSpacing={7} columnSpacing={4} sx={{ marginTop: { lg: '20px', sm: '50px', xs: '90px', md: '50px' } }}>
                            {paginatedData.map((card) => (
                                <Grid size={{ xs: 6, sm: 6, md: 4, lg: 3, xl: 3 }} key={card.id} display='flex' justifyContent='center'>
                                    <Box className={styles.card}>
                                        <div>
                                            <img src={card.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ marginBottom: 5, marginTop: -7, borderTop: '3px solid var(--color2)' }}>
                                            <div className={styles.cardTitle}>{card.title}</div>
                                            <div className={styles.cardBody}>{card.description}</div>
                                        </div>
                                        <span>Xem chi tiết</span>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    {/* Pagination */}
                    <Box display="flex" justifyContent="center" mb={2} mt={1}>
                        <Pagination
                            count={Math.ceil(cardData.length / itemsPerPage)}
                            page={page}
                            onChange={handleChangePage}
                            color='success'
                        />
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', gap: 2, height: '485px', justifyContent: 'center', backgroundColor: colors.color1
                    }}
                >
                    <img src={`${process.env.PUBLIC_URL}/images/error404.png`} alt="Description" style={{ width: '100px', height: '100px' }} />
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>Rất tiết!</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>Bạn không thể sử dụng dịch vụ này nếu không phải là đối tác của <span style={{ fontWeight: 600 }}>TÊN</span>.</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>
                        Trở thành đối tác của <span style={{ fontWeight: 600 }}>TÊN</span> <RouterLink to={routes.login} style={{ textDecoration: 'underline', color: colors.color2, fontWeight: 600 }}>ngay bây giờ!</RouterLink>
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