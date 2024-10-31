import React, { useEffect, } from 'react';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { useSelector } from 'react-redux';
import { Box, Typography, Grid } from '@mui/material';
import colors from '../colors';

const Regulation = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <Box
                    sx={{
                        textAlign: 'center',
                        backgroundColor: colors.color3,
                        paddingBottom: '50px'
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: colors.color2,
                            fontFamily: 'KoHo',
                            fontWeight: '700',
                            paddingTop: '70px',
                        }}
                    >
                        Lưu Ý Khi Xử Lí Các Loại Rác Thải Điện Tử
                    </Typography>

                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            maxWidth: '1700px',
                            margin: '0 auto',
                        }}
                    >
                        {/* c1 */}
                        <Grid item >
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '50px 15px 0 15px' }}>
                                <Box
                                    component="img"
                                    src="\images\regulation6.png"
                                    alt="Image6"
                                    sx={{ width: '250px', height: '280px', border: `2px solid ${colors.color2}`, borderRadius: '10px' }}
                                />
                                <Box
                                    component="img"
                                    src="\images\regulation7.png"
                                    alt="Image7"
                                    sx={{ width: '250px', height: '120px', border: `2px solid ${colors.color2}`, borderRadius: '20px' }}
                                />
                            </Box>
                        </Grid>

                        {/* c2 */}
                        <Grid item>
                            <Box
                                component="img"
                                src="\images\regulation8.png"
                                alt="Image8"
                                sx={{ margin: '50px 15px 0 15px', width: '250px', height: '420px', border: `2px solid ${colors.color2}`, borderRadius: '10px' }}
                            />
                        </Grid>

                        {/* c3 */}
                        <Grid item>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '50px 15px 0 15px' }}>
                                <Box
                                    component="img"
                                    src="\images\regulation9.png"
                                    alt="Image9"
                                    sx={{ width: '250px', height: '150px', border: `2px solid ${colors.color2}`, borderRadius: '50px' }}
                                />
                                <Box
                                    component="img"
                                    src="\images\regulation11.png"
                                    alt="Image11"
                                    sx={{ width: '250px', height: '250px', border: `2px solid ${colors.color2}`, borderRadius: '10px' }}
                                />
                            </Box>
                        </Grid>

                        {/* c4 */}
                        <Grid item>
                            <Box
                                component="img"
                                src="\images\regulation10.png"
                                alt="Image10"
                                sx={{ margin: '50px 15px 0 15px', width: '250px', height: '420px', border: `2px solid ${colors.color2}`, borderRadius: '10px' }}
                            />
                        </Grid>
                        <Typography sx={{ textAlign: 'left', maxWidth: '1100px', paddingTop: '30px' }}>
                            <Typography variant="h5"
                                sx={{
                                    fontFamily: 'KoHo',
                                    color: colors.color2,
                                    fontWeight: '600',
                                    display: 'inline'
                                }}>
                                Bảo vệ thông tin cá nhân:
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'KoHo',
                                fontSize: '18px',
                                color: 'black',
                                fontWeight: 'normal',
                                display: 'inline',
                                marginLeft: '8px'
                            }}>
                                Trước khi bỏ đi các thiết bị điện tử như máy tính hoặc điện thoại, cần đảm bảo đã xóa sạch dữ liệu cá nhân. Sử dụng phần mềm chuyên dụng để xóa hoàn toàn dữ liệu nếu cần.<br /><br />
                            </Typography>
                            <Typography variant="h5"
                                sx={{
                                    fontFamily: 'KoHo',
                                    color: colors.color2,
                                    fontWeight: '600',
                                    display: 'inline'
                                }}>
                                Tách biệt pin:
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'KoHo',
                                fontSize: '18px',
                                color: 'black',
                                fontWeight: 'normal',
                                display: 'inline',
                                marginLeft: '8px'
                            }}>
                                Pin và các thiết bị có chứa các kim loại nặng (như thủy ngân, chì, cadmium) nên được tách riêng để xử lý đặc biệt. <br /><br />
                            </Typography>
                            <Typography variant="h5"
                                sx={{
                                    fontFamily: 'KoHo',
                                    color: colors.color2,
                                    fontWeight: '600',
                                    display: 'inline'
                                }}>
                                Không tự ý phá hủy:
                            </Typography>
                            <Typography sx={{
                                fontFamily: 'KoHo',
                                fontSize: '18px',
                                color: 'black',
                                fontWeight: 'normal',
                                display: 'inline',
                                marginLeft: '8px'
                            }}>
                                Việc phá dỡ hoặc tự xử lý rác điện tử mà không có chuyên môn có thể gây ra ô nhiễm môi trường hoặc nguy hiểm cho sức khỏe.
                            </Typography>
                        </Typography>
                    </Grid>
                </Box>

                {/* section 4 */}
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
                            paddingTop: '70px',
                        }}
                    >
                        Điều Kiện Xử Lí Miễn Phí
                    </Typography>
                    <Typography variant='h6'
                        sx={{
                            color: `${colors.color2}`,
                            fontFamily: 'KoHo',
                            marginBottom: '15px',
                        }}
                    >
                        Chúng tôi sẽ giúp bạn xử lí các loại rác thải miễn phí nếu thỏa mãn những điều kiện dưới đây
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            gap: '20px',
                            paddingTop: '40px',
                        }}
                    >
                        <Box sx={{ width: '400px', textAlign: 'center', mb: 2 }}>
                            <img
                                src="/images/typ2.png"
                                alt="Icon"
                                style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'KoHo',
                                    marginBottom: '10px',
                                }}
                            >
                                Là đối tác của <Box component="span" sx={{ fontWeight: 'bold', color: colors.color2 }}>TÊN</Box>
                            </Typography>
                        </Box>

                        <Box sx={{ width: '400px', textAlign: 'center', mb: 2 }}>
                            <img
                                src="/images/recycle2.png"
                                alt="Icon"
                                style={{ width: '70px', height: '65px', margin: '0 auto', mb: 1 }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: 'KoHo',
                                    marginBottom: '10px',
                                }}
                            >
                                Có tối thiểu 100kg rác thải điện tử hoặc 20kg các loại rác khác
                            </Typography>
                        </Box>
                    </Box>

                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: 'KoHo',
                            marginTop: '60px',
                        }}
                    >
                        Gọi <Box component="span" sx={{ fontWeight: 'bold', color: colors.color2 }}>0123456789</Box> để được tư vấn chi tiết
                    </Typography>

                </Box>

            </Box>
            <Footer />

        </>
    );
};

export default Regulation;