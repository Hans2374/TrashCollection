import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import colors from '../colors';
import { useSelector } from 'react-redux';

const NewsDetail = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);

    const [visibleRows, setVisibleRows] = useState(2);
    const articlesPerRow = 4;

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    top: 2,
                    behavior: 'smooth',
                });
            }
        }, 50);

        return () => clearInterval(scrollInterval);
    }, []);


    const articles = [
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

    const visibleArticles = articles.slice(0, visibleRows * articlesPerRow);

    return (
        <>
            <ScrollToTop />
            <Header1 isLogin={isLogin}/>

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
                            padding: '10px 20px 5px 20px',
                            fontFamily: 'KoHo',
                            fontSize: { xs: '14px', sm: '16px', md: '17px' },
                            fontWeight: 400,
                            color: `${colors.color2}`,
                            textAlign: 'center',
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

                <Box
                    sx={{
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
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '15px', md: '0px' },
                                marginBottom: '10px',
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '30px',
                                fontWeight: 600,
                            }}
                        >
                            {articles[0].title}
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginTop: '10px',
                                marginBottom: '10px',
                                color: 'rgba(33, 71, 56, 0.5)',
                                fontFamily: 'KoHo',
                                fontSize: '15px',
                            }}
                        >
                            Nguyễn Thịnh     |     24/10/2024
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '15px', md: '0px' },
                                marginTop: '10px',
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '16px',
                                paddingBottom: '15px',
                                fontWeight: 600,
                            }}
                        >
                            {articles[0].summary}
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '4px', md: '0px' },
                                marginBottom: '20px',
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '16px',
                            }}
                        >
                            Trong khi đó, Trung và Nam Trung Bộ có mưa rào và dông rải rác, riêng phía Nam cục bộ có nơi mưa to, tập trung vào chiều và đêm.
                            Tây Nguyên và Nam Bộ tiếp tục mưa, mưa vừa và rải rác có dông, cục bộ có nơi mưa to đến rất to; cảnh báo nguy cơ có mưa cục bộ cường
                            suất lớn. Ở khu vực Nam Trung Bộ và phía Bắc Tây Nguyên có mưa rào và dông rải rác, cục bộ có nơi mưa to với lượng mưa từ 10-30mm,
                            cục bộ có nơi trên 50mm. Trong mưa dông có khả năng xảy ra lốc, sét và gió giật mạnh.
                        </Typography>
                        <Box
                            component="img"
                            src={articles[0].image}
                            alt={articles[0].title}
                            sx={{
                                width: '100%', height: '100%', borderRadius: '9px', transition: 'transform 0.3s ease-in-out',
                            }}
                        />
                        <Typography
                            sx={{
                                marginLeft: { xs: '4px', md: '0px' },
                                marginRight: { xs: '4px', md: '0px' },
                                marginTop: '20px',
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '16px',
                            }}
                        >
                            Hà Nội: Có mây, có mưa vài nơi, trưa chiều trời nắng; chiều tối và đêm có mưa, mưa rào rải rác. Gió nhẹ.<br />
                            Nhiệt độ thấp nhất : 24-26 độ.<br />
                            Nhiệt độ cao nhất : 31-33 độ.<br /><br />

                            Phía Tây Bắc Bộ: Có mây, ngày nắng, chiều tối và đêm có mưa rào và dông vài nơi. Gió nhẹ.<br />
                            Nhiệt độ thấp nhất : 22-25 độ, có nơi dưới 21 độ.<br />
                            Nhiệt độ cao nhất : 29-32 độ, có nơi trên 32 độ.<br /><br />

                            Phía Đông Bắc Bộ: Có mây, ngày nắng, riêng vùng núi nhiều mây, trưa chiều giảm mây trời nắng; chiều tối và đêm có mưa, mưa rào rải rác và có nơi có dông. Gió nhẹ. Trong mưa dông có khả năng xảy ra lốc, sét và gió giật mạnh.<br />
                            Nhiệt độ thấp nhất: 23-26 độ, vùng núi có nơi dưới 23 độ.<br />
                            Nhiệt độ cao nhất : 29-32 độ, có nơi trên 32 độ.<br /> <br />

                            Trong khi đó, Trung và Nam Trung Bộ có mưa rào và dông rải rác, riêng phía Nam cục bộ có nơi mưa to, tập trung vào chiều và đêm.
                            Tây Nguyên và Nam Bộ tiếp tục mưa, mưa vừa và rải rác có dông, cục bộ có nơi mưa to đến rất to; cảnh báo nguy cơ có mưa cục bộ cường
                            suất lớn. Ở khu vực Nam Trung Bộ và phía Bắc Tây Nguyên có mưa rào và dông rải rác, cục bộ có nơi mưa to với lượng mưa từ 10-30mm,
                            cục bộ có nơi trên 50mm. Trong mưa dông có khả năng xảy ra lốc, sét và gió giật mạnh.<br />
                            Trong khi đó, Trung và Nam Trung Bộ có mưa rào và dông rải rác, riêng phía Nam cục bộ có nơi mưa to, tập trung vào chiều và đêm.
                            Tây Nguyên và Nam Bộ tiếp tục mưa, mưa vừa và rải rác có dông, cục bộ có nơi mưa to đến rất to; cảnh báo nguy cơ có mưa cục bộ cường
                            suất lớn. Ở khu vực Nam Trung Bộ và phía Bắc Tây Nguyên có mưa rào và dông rải rác, cục bộ có nơi mưa to với lượng mưa từ 10-30mm,
                            cục bộ có nơi trên 50mm. Trong mưa dông có khả năng xảy ra lốc, sét và gió giật mạnh.<br /> <br />

                            Trong khi đó, Trung và Nam Trung Bộ có mưa rào và dông rải rác, riêng phía Nam cục bộ có nơi mưa to, tập trung vào chiều và đêm.
                            Tây Nguyên và Nam Bộ tiếp tục mưa, mưa vừa và rải rác có dông, cục bộ có nơi mưa to đến rất to; cảnh báo nguy cơ có mưa cục bộ cường
                            suất lớn. Ở khu vực Nam Trung Bộ và phía Bắc Tây Nguyên có mưa rào và dông rải rác, cục bộ có nơi mưa to với lượng mưa từ 10-30mm,
                            cục bộ có nơi trên 50mm. Trong mưa dông có khả năng xảy ra lốc, sét và gió giật mạnh.<br /> <br />
                        </Typography>

                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            flex: 0.4,
                            flexDirection: 'column',
                        }}
                    >
                        {/* Tiêu đề "Tin liên quan" không bị cuộn */}
                        <Typography
                            sx={{
                                textAlign: 'center',
                                marginBottom: '10px',
                                color: `${colors.color2}`,
                                fontFamily: 'KoHo',
                                fontSize: '25px',
                                fontWeight: 600,
                            }}
                        >
                            Tin liên quan
                        </Typography>

                        {/* Container  */}
                        <Box
                            ref={scrollContainerRef}
                            sx={{
                                height: '1400px',
                                overflowY: 'auto',
                                scrollbarWidth: 'none',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                paddingRight: '10px',
                            }}
                        >
                            {articles.slice(1).map((article) => (
                                <Box
                                    key={article.id}
                                    sx={{
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                        textAlign: 'left',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={article.image}
                                        alt={article.title}
                                        sx={{
                                            width: '100%',
                                            height: '70%',
                                            borderRadius: '8px',
                                            transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                    />
                                    <Typography
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
                </Box>

                {/* orthers articles */}
                <Box
                    sx={{
                        display: { md: 'none' },
                        marginTop: '50px',
                        textAlign: 'left',
                        marginLeft: { xs: '16px', md: '119px' },
                        marginRight: { xs: '16px', md: '103px' },
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            marginBottom: '20px',
                            color: `${colors.color2}`,
                            fontFamily: 'KoHo',
                            fontSize: '25px',
                            fontWeight: 600,
                        }}
                    >
                        Tin liên quan
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {visibleArticles.map((article) => (
                            <Box
                                key={article.id}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 20px)', md: 'calc(25% - 20px)' },
                                    marginBottom: '30px',
                                }}
                            >
                                <Box
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

                    {visibleRows * articlesPerRow < articles.length && (
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

export default NewsDetail;
