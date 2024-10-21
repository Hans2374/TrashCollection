import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import React, { useState, useEffect } from 'react';

export const Header1 = () => {

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
                height: '40px',
                backgroundColor: '#214738',
                fontFamily: 'KoHo, sans-serif',
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
                    marginLeft: {md:'100px'},
                    display: 'flex', 
                    alignItems: 'center',
                    '&:hover': {
                        color: '#F8F3E7', 
                        '& .MuiSvgIcon-root': {
                            color: '#F8F3E7', 
                        },
                    },
                }}
            >
                <PhoneIcon 
                    sx={{ marginRight: '8px', color: '#FCF9F3' }} 
                />
                <Typography
                    sx={{
                        color: '#FCF9F3',
                        position: 'relative',
                        '&:hover': {
                            color: '#F8F3E7',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                height: '1px',
                                backgroundColor: '#F8F3E7',
                                transition: '0.3s'
                            }
                        }
                    }}
                >
                    0123456789
                </Typography>
            </Box>

            {/* Đăng nhập */}
            <Typography 
                sx={{
                    marginRight: {md:'100px'},
                    color: '#FCF9F3',
                    position: 'relative',
                    '&:hover': {
                        color: '#F8F3E7', 
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '1px', 
                            backgroundColor: '#F8F3E7', 
                            transition: '0.3s' 
                        }
                    }
                }}
            >
                Đăng nhập
            </Typography>
        </Box>
    );
};
