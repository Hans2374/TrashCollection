import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import colors from '../colors';

const Regulation = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);

    return (
        <>
            <Header1 isLogin={isLogin} />
            <ScrollToTop />

            {/* Background image */}
            <Box
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/regulationMain.png)`,
                    height: '421px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
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
                        QUY ĐỊNH
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
                        Những quy định chung của chúng tôi về việc xử lí, phân loại rác thải trong quá trình mua bán                    </Typography>
                </Box>
            </Box>

            <Header2 />

            {/* Main content section */}
            <Box sx={{ fontFamily: 'KoHo' }}>

                {/* Section 1 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        backgroundColor: colors.color3,
                        paddingBottom: '50px'
                    }}
                >
                    {/* title */}
                    <Typography variant="h4"
                        sx={{
                            color: `${colors.color2}`,
                            fontFamily: 'KoHo',
                            fontWeight: '700',
                            marginBottom: '15px',
                            paddingTop: '70px',
                        }}
                    >
                        <span style={{ textDecoration: 'underline' }}>KHÔNG</span> Thu Mua Các Loại Rác Hữu Cơ
                    </Typography>

                    {/* img */}
                    <Box sx={{ marginTop: '30px', width: '100%' }}>
                        <Box >
                            <img
                                src="/images/regulation1.png" alt="img1"
                                style={{
                                    width: '70%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    border: `4px solid ${colors.color2}`
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Section 2 */}
                <Box
                    sx={{
                        textAlign: 'center',
                        backgroundColor: colors.color1,
                        paddingBottom: '50px'
                    }}
                >
                    {/* title */}
                    <Typography variant="h4"
                        sx={{
                            color: `${colors.color2}`,
                            fontFamily: 'KoHo',
                            fontWeight: '700',
                            marginBottom: '30px',
                            paddingTop: '70px',
                        }}
                    >
                        Cách Xử Lí Rác Hữu Cơ
                    </Typography>

                    {/* Content Row 1 */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '70px',
                        paddingTop: '20px'
                    }}>

                        {/* Text */}
                        <Box sx={{
                            maxWidth: '450px'
                        }}>
                            <Typography variant="h5"
                                sx={{
                                    paddingBottom: '10px',
                                    paddingLeft: '18px',
                                    color: colors.color2,
                                    fontFamily: 'KoHo',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>
                                Ủ phân hữu cơ
                            </Typography>
                            <Typography component="ul"
                                sx={{
                                    listStyleType: 'disc',
                                    paddingLeft: '18px',
                                    marginTop: '8px',
                                    fontSize: '18px',
                                    textAlign: 'left'
                                }}>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Chuẩn bị một khu vực hoặc thùng chứa phân hữu cơ.
                                </Typography>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Phân loại rác hữu cơ từ nhà bếp, không bao gồm các sản phẩm từ thịt, sữa.
                                </Typography>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Đảo trộn thường xuyên để cung cấp oxy và giữ độ ẩm vừa phải.
                                </Typography>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Sau khoảng 2-3 tháng (tùy điều kiện), sẽ có phân hữu cơ để bón cho cây trồng.
                                </Typography>
                            </Typography>
                        </Box>

                        {/* Image */}
                        <Box component="img"
                            src="\images\regulation4.png"
                            alt="Hình ảnh ủ phân hữu cơ"
                            sx={{
                                width: '450px',
                                height: '250px',
                                borderRadius: '10px',
                                border: `3px solid ${colors.color2}`
                            }}
                        />
                    </Box>

                    {/* Content Row 2 */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '70px',
                        paddingTop: '40px'
                    }}>
                        {/* Image  */}
                        <Box component="img"
                            src="\images\regulation5.png"
                            alt="Hình ảnh ủ phân hữu cơ"
                            sx={{
                                width: '450px',
                                height: '250px',
                                borderRadius: '10px',
                                border: `3px solid ${colors.color2}`
                            }}
                        />
                        {/* Text  */}
                        <Box sx={{
                            maxWidth: '450px'
                        }}>
                            <Typography variant="h5"
                                sx={{
                                    paddingBottom: '10px',
                                    paddingLeft: '16px',
                                    color: colors.color2,
                                    fontFamily: 'KoHo',
                                    fontWeight: '600',
                                    textAlign: 'left'
                                }}>
                                Sử dụng máy xử lý rác hữu cơ
                            </Typography>
                            <Typography component="ul"
                                sx={{
                                    listStyleType: 'disc',
                                    paddingLeft: '16px',
                                    marginTop: '8px',
                                    fontSize: '18px',
                                    textAlign: 'left'
                                }}>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Có nhiều loại máy xử lý rác hữu cơ gia đình giúp biến rác hữu cơ thành phân bón trong thời gian ngắn (khoảng 24 giờ).
                                </Typography>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Được thiết kế để hoạt động trong nhà, hạn chế mùi và sự phát sinh của côn trùng, giúp giữ môi trường sống sạch sẽ, gọn gàng hơn.
                                </Typography>
                                <Typography component="li" sx={{ fontSize: '18px', fontFamily: 'KoHo' }}>
                                    Có thể mua trực tiếp hoặc trực tuyến tại các cửa hàng điện máy lớn trên toàn quốc.
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>

                    {/* Content Row 3 */}
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '70px',
                        paddingTop: '40px'
                    }}>
                        <Box sx={{
                            maxWidth: '1000px'
                        }}>
                            <Typography sx={{ textAlign: 'left', paddingLeft: '18px' }}>
                                <Typography variant="h5"
                                    sx={{
                                        fontFamily: 'KoHo',
                                        color: colors.color2,
                                        fontWeight: '600',
                                        display: 'inline'
                                    }}>
                                    Chôn lấp rác hữu cơ:
                                </Typography>
                                <Typography sx={{
                                    fontFamily: 'KoHo',
                                    fontSize: '18px',
                                    color: 'black',
                                    fontWeight: 'normal',
                                    display: 'inline',
                                    marginLeft: '8px'
                                }}>
                                    Nếu có đất trống, có thể đào hố chôn rác hữu cơ trực tiếp. Sau một thời gian, rác sẽ tự phân hủy trong đất và cải thiện chất lượng đất.                                </Typography>
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Section 3 */}
                <Box sx={{
                    textAlign: 'center',
                    backgroundColor: colors.color3,
                    paddingBottom: '50px'
                }}>
                    <Typography variant="h4"
                        sx={{
                            color: `${colors.color2}`,
                            fontFamily: 'KoHo',
                            fontWeight: '700',
                            marginBottom: '15px',
                            paddingTop: '70px',
                        }}
                    >
                        Lưu ý trước khi xử lí các loại rác điện tử
                    </Typography>
                </Box>

            </Box>
            <Footer />

        </>
    );
};

export default Regulation;