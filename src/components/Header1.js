import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useState, useEffect } from 'react';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import colors from '../colors';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../routes/routes';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header1 = () => {
    const role = useSelector((state) => state.auth.role);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dispatch = useDispatch();

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Box position='sticky' top={0}
            sx={{
                zIndex: 10,
                height: '40px',
                marginBottom: 0, //test cho trang profile
                backgroundColor: '#214738',
                fontFamily: 'KoHo',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 16px',
                transition: 'transform 0.3s ease-in-out',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
            }}
        >
            {/* Số điện thoại */}
            <Box
                sx={{
                    fontFamily: 'KoHo',
                    marginLeft: { md: '100px' },
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                        color: colors.color3,
                        '& .MuiSvgIcon-root': {
                            color: colors.color3,
                        },
                    },
                }}
            >
                <PhoneIcon
                    sx={{ marginRight: '8px', color: colors.color1 }}
                />
                <Typography
                    sx={{
                        fontFamily: 'KoHo',
                        color: colors.color1,
                        position: 'relative',
                        '&:hover': {
                            color: colors.color3,
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: '1px',
                                backgroundColor: colors.color3,
                                transition: '0.3s'
                            }
                        }
                    }}
                >
                    0123456789
                </Typography>
            </Box>

            {isLogin ? (
                // Icon Buttons
                <Box sx={{ display: 'flex', gap: 2, marginRight: { md: '80px' } }}>
                    <IconButton
                        sx={{ color: colors.color1 }}
                        onMouseEnter={() => handleMouseEnter('meetingRoom')}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleLogout}
                    >
                        {hoveredIcon === 'meetingRoom' ? <MeetingRoomOutlinedIcon /> : <MeetingRoomIcon />}
                    </IconButton>
                    <Link to={routes.sell}>
                        <IconButton
                            sx={{ color: colors.color1 }}
                            onMouseEnter={() => handleMouseEnter('inventory')}
                            onMouseLeave={handleMouseLeave}
                        >
                            {hoveredIcon === 'inventory' ? <Inventory2OutlinedIcon /> : <Inventory2Icon />}
                        </IconButton>
                    </Link>
                    <Link to={routes.cart}>
                        <IconButton
                            sx={{ color: colors.color1 }}
                            onMouseEnter={() => handleMouseEnter('shoppingCart')}
                            onMouseLeave={handleMouseLeave}
                        >
                            {hoveredIcon === 'shoppingCart' ? <ShoppingCartOutlinedIcon /> : <ShoppingCartIcon />}
                        </IconButton>
                    </Link>
                    <Link to={role === 'customer' ? routes.profile : routes.adminproduct} style={{ textDecoration: 'none' }}>
                        <IconButton
                            sx={{ color: colors.color1 }}
                            onMouseEnter={() => handleMouseEnter('accountCircle')}
                            onMouseLeave={handleMouseLeave}
                        >
                            {hoveredIcon === 'accountCircle' ? <AccountCircleOutlinedIcon /> : <AccountCircleIcon />}
                        </IconButton>
                    </Link>
                </Box>
            ) : (
                // Đăng nhập
                <Box sx={{ display: 'flex', gap: 2, marginRight: { md: '20px' } }}>
                    <RouterLink to={routes.login} style={{ textDecoration: 'none' }}>
                        <Typography
                            sx={{
                                marginRight: { md: '100px' },
                                color: colors.color1,
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: '50%',
                                    right: '50%',
                                    bottom: 0,
                                    height: '1px',
                                    backgroundColor: colors.color3,
                                    transition: 'left 0.3s, right 0.3s'
                                },
                                '&:hover': {
                                    color: colors.color3,
                                    '&::after': {
                                        left: 0,
                                        right: 0,
                                    }
                                }
                            }}
                        >
                            Đăng nhập
                        </Typography>
                    </RouterLink>
                </Box>
            )}
        </Box >
    );
};