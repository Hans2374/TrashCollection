import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import colors from '../colors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const News = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const [selectedMenu, setSelectedMenu] = useState('Môi trường');
    const menuItems = ['Tin tức', 'Biến đổi khí hậu', 'Khoa học và Công nghệ', 'Chất thải', 'Môi trường'];
    const [visibleRows, setVisibleRows] = useState(2);
    const articlesPerRow = 4;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/news-detail');
    };

    const handleMenuItemClick = (item) => {
        setSelectedMenu(item);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const articles = [
        {
            id: 1,
            title: "Dự báo thời tiết 18/10: Miền Bắc ngày nắng, mưa rào rải rác",
            summary: "Theo Trung tâm Dự báo Khí tượng thủy văn Quốc gia, hôm nay 18/10, Bắc Bộ và Bắc Trung Bộ có mưa rào và dông vài nơi, trưa chiều trời nắng. Riêng chiều tối và đêm ở khu vực Tây Bắc, Việt Bắc có mưa rào rải rác và có nơi có dông.",
            image: "images/news1.png",
        },
        {
            id: 2,
            title: "Dự báo thời tiết 19/10: Mưa rào và dông vài nơi, chuẩn bị đón không khí lạnh",
            image: "images/news2.png",
        },
        {
            id: 3,
            title: "Nghiên cứu khởi động lại dự án điện hạt nhân trong bối cảnh chống biến đổi khí hậu",
            image: "images/news3.png",
        },
    ];

    const articlesList = [
        {
            id: 1,
            title: "Dự báo thời tiết 18/10: Miền Bắc ngày nắng, mưa rào rải rác",
            image: "images/news1.png",
        },
        {
            id: 2,
            title: "Dự báo thời tiết 19/10: Mưa rào và dông vài nơi, chuẩn bị đón không khí lạnh",
            image: "images/news2.png",
        },
        {
            id: 3,
            title: "Nghiên cứu khởi động lại dự án điện hạt nhân trong chống biến đổi khí hậu",
            image: "images/news3.png",
        },
        {
            id: 4,
            title: "Triều cường kết hợp mưa lớn, Nam Bộ nhiều khả năng ngập úng vùng trũng thấp",
            image: "images/news4.png",
        },
        {
            id: 5,
            title: "Dự báo mùa mưa kết thúc muộn hơn bình thường",
            image: "images/news5.png",
        },
        {
            id: 6,
            title: "Bình Định: Nâng cao chất lượng tham vấn cộng đồng trong lập hồ sơ môi trường",
            image: "images/news6.png",
        },

        {
            id: 7,
            title: "Dự báo thời tiết 19/10: Mưa rào và dông vài nơi, chuẩn bị đón không khí lạnh",
            image: "images/news2.png",
        },
        {
            id: 8,
            title: "Nghiên cứu khởi động lại dự án điện hạt nhân trong chống biến đổi khí hậu",
            image: "images/news3.png",
        },
        {
            id: 9,
            title: "Triều cường kết hợp mưa lớn, Nam Bộ nhiều khả năng ngập úng vùng trũng thấp",
            image: "images/news4.png",
        },
        {
            id: 10,
            title: "Dự báo mùa mưa kết thúc muộn hơn bình thường",
            image: "images/news5.png",
        },
        {
            id: 11,
            title: "Bình Định: Nâng cao chất lượng tham vấn cộng đồng trong lập hồ sơ môi trường",
            image: "images/news6.png",
        },

        {
            id: 12,
            title: "Dự báo thời tiết 19/10: Mưa rào và dông vài nơi, chuẩn bị đón không khí lạnh",
            image: "images/news2.png",
        },
        {
            id: 13,
            title: "Nghiên cứu khởi động lại dự án điện hạt nhân trong chống biến đổi khí hậu",
            image: "images/news3.png",
        },
        {
            id: 14,
            title: "Triều cường kết hợp mưa lớn, Nam Bộ nhiều khả năng ngập úng vùng trũng thấp",
            image: "images/news4.png",
        },
        {
            id: 15,
            title: "Dự báo mùa mưa kết thúc muộn hơn bình thường",
            image: "images/news5.png",
        },
        {
            id: 16,
            title: "Bình Định: Nâng cao chất lượng tham vấn cộng đồng trong lập hồ sơ môi trường",
            image: "images/news6.png",
        },

    ];

    const loadMoreArticles = () => {
        setVisibleRows(visibleRows + 1);
    };

    const visibleArticles = articlesList.slice(0, visibleRows * articlesPerRow);


    return (
        <>
            <ScrollToTop />
            <Header1 isLogin={isLogin} />

            {/* Background image */}
            <Box
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/newMain.png)`,
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
                        width: { xs: '278px', sm: '360px' },
                        height: { xs: '169px', sm: '190px' },
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
                            fontSize: { xs: '24px', sm: '36px' },
                            fontWeight: 700,
                            lineHeight: { xs: '30px', sm: '46.8px' },
                            color: `${colors.color2}`,
                            textAlign: 'center',
                            marginBottom: '8px',
                        }}
                    >
                        THÔNG TIN
                    </Typography>

                    {/* Description */}
                    <Typography
                        sx={{
                            padding: '5px 20px 5px 20px',
                            fontFamily: 'KoHo',
                            fontSize: { xs: '14px', sm: '16px', md: '17px' },
                            fontWeight: 400,
                            color: `${colors.color2}`,
                            textAlign: 'left',
                        }}
                    >
                        Cung cấp những bài viết, cập nhật mới nhất về các chính sách bảo vệ môi trường và những sáng kiến xanh trên toàn thế giới.
                    </Typography>
                </Box>
            </Box>
            <Header2 />

            {/* Main content section */}
            <Box
                sx={{
                    backgroundColor: `${colors.color1}`,
                    textAlign: 'left',
                    paddingTop: '100px',
                    paddingBottom: '50px'
                }}
            >
                {/* Main title */}
                <Typography
                    sx={{
                        color: `${colors.color2}`,
                        marginLeft: { xs: '16px', md: '119px' },
                        fontFamily: 'KoHo',
                        fontSize: '25px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        marginBottom: '15px',
                    }}
                >
                    {selectedMenu}
                </Typography>

                {/* Menu items container */}
                <Box
                    sx={{
                        alignItems: 'center',
                        borderTop: '1px solid rgba(33, 71, 56, 0.3)',
                        borderBottom: '1px solid rgba(33, 71, 56, 0.3)',
                        display: 'flex',
                        marginLeft: { xs: '15px', md: '117px' },
                        marginRight: { xs: '15px', md: '117px' },
                        gap: '150px',
                        overflowX: 'hidden',
                        whiteSpace: 'nowrap',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        '&': {
                            overflowX: 'auto',
                        },
                    }}
                >
                    {menuItems.map((item) => (
                        <Button
                            key={item}
                            onClick={() => handleMenuItemClick(item)}
                            disableRipple
                            variant="text"
                            sx={{
                                fontFamily: 'KoHo',
                                fontSize: { xs: '16px', md: '18px' },
                                fontWeight: 400,
                                color: `${colors.color2}`,
                                textTransform: 'none',
                                '&:hover': {
                                    fontWeight: 600,
                                    backgroundColor: 'transparent'
                                },
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </Box>

                {/* articles content */}
                <Box
                    sx={{
                        borderBottom: '1px solid rgba(33, 71, 56, 0.3)',
                        display: 'flex',
                        marginLeft: { xs: 0, md: '118px' },
                        marginRight: { xs: 0, md: '118px' },
                        gap: '20px',
                        alignItems: 'stretch',
                    }}
                >
                    {/* Large article on the left */}
                    <Box
                        sx={{
                            borderRight: { md: '1px solid rgba(33, 71, 56, 0.3)' },
                            flex: 1,
                            paddingRight: { xs: '16px', md: '20px' },
                            paddingLeft: { xs: '16px', md: '0px' },
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Box
                            onClick={handleClick}
                            component="img"
                            src={articles[0].image}
                            alt={articles[0].title}
                            sx={{
                                width: '100%', height: '100%', borderRadius: '9px', marginTop: '30px', transition: 'transform 0.3s ease-in-out', // Smooth transition
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                },
                            }}
                        />
                        <Typography
                            onClick={handleClick}
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '15px', md: '0px' },
                                marginTop: '10px',
                                marginBottom: '10px',
                                color: 'black',
                                fontFamily: 'KoHo',
                                fontSize: '20px',
                                fontWeight: 600,
                                '&:hover': { color: `${colors.color2}` },
                            }}
                        >
                            {articles[0].title}
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '15px', md: '0px' },
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '16px',
                                paddingBottom: '15px',
                            }}
                        >
                            {articles[0].summary}
                        </Typography>
                    </Box>

                    {/* Container for the small articles */}
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            marginTop: '30px',
                            flex: 0.4,
                            flexDirection: 'column',
                        }}
                    >
                        {articles.slice(1).map((article) => (
                            <Box
                                key={article.id}
                                sx={{
                                    marginBottom: '20px',
                                    textAlign: 'left',
                                }}
                            >
                                <Box
                                    onClick={handleClick}
                                    component="img"
                                    src={article.image}
                                    alt={article.title}
                                    sx={{
                                        width: '100%', height: '70%', borderRadius: '8px', transition: 'transform 0.3s ease-in-out', // Smooth transition
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        },
                                    }}
                                />
                                <Typography
                                    onClick={handleClick}
                                    sx={{
                                        color: 'black',
                                        fontFamily: 'KoHo',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        '&:hover': { color: `${colors.color2}` },
                                    }}
                                >
                                    {article.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* orthers articles  */}
                <Box
                    sx={{
                        marginTop: '50px',
                        textAlign: 'left',
                        marginLeft: { xs: '16px', md: '119px' },
                        marginRight: { xs: '16px', md: '103px' },
                    }}
                >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { sm: '40px', md: '20px' } }}>
                        {visibleArticles.map((article) => (
                            <Box
                                key={article.id}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 20px)', md: 'calc(25% - 20px)' },
                                    marginBottom: '30px',
                                }}
                            >
                                <Box
                                    onClick={handleClick}
                                    component="img"
                                    src={article.image}
                                    alt={article.title}
                                    sx={{
                                        width: '100%',
                                        borderRadius: '9px',
                                        height: '180px',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                />
                                <Typography
                                    onClick={handleClick}
                                    sx={{
                                        color: 'black',
                                        fontFamily: 'KoHo',
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        marginTop: '10px',
                                        '&:hover': { color: `${colors.color2}` },
                                    }}
                                >
                                    {article.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {visibleRows * articlesPerRow < articlesList.length && (
                        <Button
                            onClick={loadMoreArticles}
                            sx={{
                                display: 'block',
                                margin: '20px auto',
                                border: `1px solid ${colors.color2}`,
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontWeight: 600,
                                '&:hover': {
                                    color: `${colors.color1}`,
                                    backgroundColor: `${colors.color2}`,
                                },
                            }}
                        >
                            Xem thêm
                        </Button>
                    )}
                </Box>

            </Box>

            <Footer />
        </>
    );
};

export default News;
