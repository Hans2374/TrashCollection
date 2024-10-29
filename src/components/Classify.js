import React, { useState } from 'react';
import { Box, Typography, Icon, Select, MenuItem } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
// import { useSelector } from 'react-redux';
import colors from '../colors';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

const Classify = () => {
    // const isLogin = useSelector((state) => state.auth.isLogin);
    const isLogin = true;
    const [dropdown1, setDropdown1] = useState('');
    const [dropdown2, setDropdown2] = useState('');
    const [dropdown3, setDropdown3] = useState('');

    const handleDropdownChange = (event, setDropdown) => {
        setDropdown(event.target.value);
    };

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
                    sx={{
                        display: 'flex', flexDirection: 'column', p: 10, gap: 2, backgroundColor: colors.color1
                    }}
                >
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '30px', lineHeight: '39px', color: colors.color2 }}>Chào mừng đối tác của TÊN!</Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px', color: colors.color2 }}>Hãy chắc rằng bạn đã nắm rõ và đồng ý với <RouterLink to={routes.login} style={{ textDecoration: 'underline', color: colors.color2, fontWeight: 600 }}>quy định</RouterLink> của chúng tôi!</Typography>
                    <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 1 }}>
                        <Box sx={{
                            border: '1px solid #214738',
                            borderRadius: '5px',
                            width: '426px',
                            height: '29px',
                        }}>
                            <input
                                type="text"
                                placeholder="Bạn đang có gì?"
                                style={{
                                    border: 'none',
                                    fontSize: '20px',
                                    fontFamily: 'KoHo',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                    outline: 'none',
                                }}
                            />
                            <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                <SearchIcon />
                            </Icon>
                        </Box>
                        <Select
                            color='inherit'
                            value={dropdown1}
                            onChange={(event) => handleDropdownChange(event, setDropdown1)}
                            displayEmpty
                            sx={{
                                width: 100,
                                borderRadius: 3,
                                marginRight: 3,
                                height: 40,
                                backgroundColor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: '#f5f5f5',
                                },
                                fontSize: '16px',
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                            renderValue={(selected) => selected || 'Giá'}
                        >
                            <MenuItem value=""><em>Giá</em></MenuItem>
                            <MenuItem value={10}>Dưới 50.000đ</MenuItem>
                            <MenuItem value={20}>Từ 50.000đ đến 100.000đ</MenuItem>
                            <MenuItem value={30}>Trên 100.00đ</MenuItem>
                        </Select>
                        <Select
                            color='inherit'
                            value={dropdown2}
                            onChange={(event) => handleDropdownChange(event, setDropdown2)}
                            displayEmpty
                            sx={{
                                width: 100,
                                borderRadius: 3,
                                marginRight: 3,
                                height: 40,
                                backgroundColor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: '#f5f5f5',
                                },
                                fontSize: '16px',
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                            renderValue={(selected) => selected || 'A-Z'}
                        >
                            <MenuItem value=""><em>A-Z</em></MenuItem>
                            <MenuItem value={10}>A-Z</MenuItem>
                            <MenuItem value={20}>Z-A</MenuItem>
                        </Select>
                        <Select
                            color='inherit'
                            value={dropdown3}
                            onChange={(event) => handleDropdownChange(event, setDropdown3)}
                            displayEmpty
                            sx={{
                                width: 100,
                                borderRadius: 3,
                                marginRight: 3,
                                height: 40,
                                backgroundColor: 'white',
                                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                                boxShadow: '0px 3px 2px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    backgroundColor: '#f5f5f5',
                                },
                                fontSize: '16px',
                            }}
                            IconComponent={KeyboardArrowDownIcon}
                            renderValue={(selected) => selected || 'Phân loại'}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={10}>Hữu cơ</MenuItem>
                            <MenuItem value={20}>Vô cơ</MenuItem>
                            <MenuItem value={30}>Giấy</MenuItem>
                        </Select>
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

export default Classify;