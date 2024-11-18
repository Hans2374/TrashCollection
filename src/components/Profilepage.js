import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Box, Card, CardContent, Typography, Divider, IconButton, InputBase } from '@mui/material';
import { Email, LocationOn, Phone, Settings, Lock, Edit, Search } from '@mui/icons-material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { ScrollToTop } from './ScrollToTop';
import colors from '../colors';
import { useSelector } from 'react-redux';
import ProfileList from './Table/ProfileListTable';
import { Footer } from './Footer';


const Profilepage = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);

    const [visibleRows, setVisibleRows] = useState(2);
    const articlesPerRow = 4;

    const scrollContainerRef = useRef(null);

    const [selected, setSelected] = useState("personal");

    const data = {
        personal: {
            phone: "0123455678",
            address: "HCM, Q.Bình Thạnh, P.13, Đ.ABC, số 67/12",
            email: "Example@gmail.com",
        },
        owner: {
            phone: "0000000000",
            address: "HN, Q.Hoàn Kiếm, P.4, Đ.ABC, số 67/12",
            email: "Example@gmail.com",
        },
    };

    const currentData = data[selected];



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
                        LỊCH SỬ GIAO DỊCH
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
                        Dành cho cá nhân hoặc chủ vựa, xem lại lịch sử giao dịch trong thời gian vừa qua.
                    </Typography>
                </Box>
            </Box>
            <Header2 />

            <Box display="flex" justifyContent="center" alignItems="center" padding={2} gap={4}>
                {/* Avatar and User Info on the left */}
                <Box textAlign="center">
                    <Avatar
                        sx={{ width: 80, height: 80, bgcolor: "#214738" }}
                    />
                    <Typography variant="h6" fontWeight="bold" mt={1}>
                        USER001
                    </Typography>
                    <Typography variant="body2">
                        11.000 🌱
                    </Typography>
                </Box>

                {/* Container for Personal Info Card and Action Icons */}
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                    {/* Personal Info Card */}
                    <Card sx={{ maxWidth: 400, borderRadius: 2, border: "3px solid #214738" }}>
                        <CardContent>
                            {/* Header */}
                            <Box display="flex" justifyContent="center" alignItems="center" mb={1} position="relative">
                                {/* Cá nhân */}
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{
                                        cursor: "pointer",
                                        color: selected === "personal" ? "#214738" : "gray",
                                        paddingBottom: selected === "personal" ? "4px" : "0",
                                        borderBottom: selected === "personal" ? "2px solid #214738" : "none",
                                        marginRight: "16px",
                                        fontFamily: 'KoHo',
                                        fontWeight: '700',
                                        fontSize: '24px',
                                    }}
                                    onClick={() => setSelected("personal")}
                                >
                                    Cá nhân
                                </Typography>
                                {/* Chủ vựa */}
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    sx={{
                                        cursor: "pointer",
                                        color: selected === "owner" ? "#214738" : "gray",
                                        paddingBottom: selected === "owner" ? "4px" : "0",
                                        borderBottom: selected === "owner" ? "2px solid #214738" : "none",
                                    }}
                                    onClick={() => setSelected("owner")}
                                >
                                    Chủ vựa
                                </Typography>
                            </Box>
                            <Divider sx={{ borderColor: "darkgreen" }} />
                            {/* Nội dung */}
                            <Box mt={2}>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <Phone color="action" />
                                    <Typography>{currentData.phone}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1} mb={1}>
                                    <LocationOn color="action" />
                                    <Typography>{currentData.address}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Email color="action" />
                                    <Typography>{currentData.email}</Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Action Icons below the info card, aligned to the right */}
                    <Box display="flex" gap={2} mt={1}>
                        <IconButton>
                            <Settings sx={{ color: 'darkgreen' }} />
                        </IconButton>
                        <IconButton>
                            <Lock sx={{ color: 'darkgreen' }} />
                        </IconButton>
                        <IconButton>
                            <Edit sx={{ color: 'darkgreen' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    // Adjustable border thickness and color
                    borderBottom: `4px solid ${colors.primary || 'grey'}`, // Customize color and thickness here
                    width: '70%',
                    margin: '0 auto',
                    //marginY: 2, // Optional: adds vertical spacing around the border
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6, // Space between vector and title
                    color: '#214738', // Customize the color here
                    fontFamily: 'KoHo',
                    fontSize: '24px',
                }}
            >
                Lịch sử giao dịch
            </Typography>

            <Box
                display="flex"
                alignItems="center"
                sx={{
                    width: '426px', // Set the width of the search bar
                    height: '29px',
                    border: '1.5px solid #214738', // Customize border color here
                    borderRadius: '5px',
                    padding: '4px 8px',
                    margin: '0 auto',
                    marginX: '20%',
                    marginTop: 6,
                    justifyContent: 'flex-start', // Control the alignment: 'flex-start', 'center', or 'flex-end'
                }}
            >
                <IconButton size="small" sx={{ color: '#214738', marginLeft: '1px', }}>
                    <Search />
                </IconButton>
                <InputBase
                    placeholder="Mã đơn hàng"
                    sx={{
                        ml: 1,
                        flex: 1,
                        color: '#214738', // Customize text color here
                        fontFamily: 'KoHo',
                        fontWeight: '400',
                        fontSize: '20px',
                        lineHeight: '26px',
                    }}
                />
            </Box>
            <ProfileList />
            <Footer />
        </>
    );
}

export default Profilepage;