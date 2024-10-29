import { Box, Typography, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useState, useEffect } from 'react';
import { routes } from "../routes/routes";
import { Link as RouterLink } from 'react-router-dom';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import colors from '../colors';

const Header1 = ({ isLogin }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    return (
        <Box position='sticky' top={0}
            sx={{
                zIndex: 10,
                height: '40px',
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

            {/* Đăng nhập / Icon Buttons */}
            {isLogin ? (
                <Box sx={{ display: 'flex', gap: 2, marginRight: { md: '100px' } }}>
                    <IconButton
                        sx={{ color: colors.color1 }}
                    >
                        <MeetingRoomIcon
                            sx={{
                                '&:hover': {
                                    content: <MeetingRoomOutlinedIcon />,
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        sx={{ color: colors.color1 }}
                    >
                        <Inventory2Icon
                            sx={{
                                '&:hover': {
                                    content: <Inventory2OutlinedIcon />,
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        sx={{ color: colors.color1 }}
                    >
                        <ShoppingCartIcon
                            sx={{
                                '&:hover': {
                                    content: <ShoppingCartOutlinedIcon />,
                                },
                            }}
                        />
                    </IconButton>
                    <IconButton
                        sx={{ color: colors.color1 }}
                    >
                        <AccountCircleIcon
                            sx={{
                                '&:hover': {
                                    content: <AccountCircleOutlinedIcon />,
                                },
                            }}
                        />
                    </IconButton>
                </Box>
            ) : (
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
            )}
        </Box >
    );
};
export default React.memo(Header1);