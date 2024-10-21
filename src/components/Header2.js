import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

export const Header2 = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 900px)');

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

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItemStyle = {
        color: '#214738',
        fontSize: '20px',
        transition: 'font-weight 0.2s, text-shadow 0.2s',
        '&:hover': {
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)'
        }
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: visible ? '40px' : '0px',
                height: '100px',
                backgroundColor: '#F8F3E7',
                fontFamily: 'KoHo, sans-serif',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease-in-out',
                transform: visible ? 'translateY(0)' : 'translateY(-100%)',
            }}
        >
            {/* Logo/Tên */}
            <Typography 
                variant="h4" 
                sx={{
                    marginLeft: {md:'100px'},
                    fontWeight: 'bold',
                    color: '#214738',
                }}
            >
                LOGO/TÊN
            </Typography>

            {isMobile ? (
                <>
                    {/* Icon drawer */}
                    <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: '#214738' }} />
                    </IconButton>

                    {/* menu */}
                    <Drawer
                        anchor="right"
                        open={drawerOpen}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                backgroundColor: '#FCF9F3', 
                            },
                        }}
                    >
                        <List sx={{ width: 250 }}>
                            {['Sản phẩm', 'Thu mua', 'Tin tức', 'Quy định'].map((text) => (
                                <ListItem button key={text}>
                                    <ListItemText
                                        sx={{
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            fontFamily: 'KoHo, sans-serif',
                                            color: '#214738',
                                            transition: 'font-weight 0.2s, text-shadow 0.2s',
                                            '&:hover': {
                                                fontWeight: 'bold',
                                                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                                            },
                                        }} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </>
            ) : (
                <Box sx={{ display: 'flex', gap: '150px', marginRight: {md:'100px'} }}>
                    <Typography sx={menuItemStyle}>Sản phẩm</Typography>
                    <Typography sx={menuItemStyle}>Thu mua</Typography>
                    <Typography sx={menuItemStyle}>Tin tức</Typography>
                    <Typography sx={menuItemStyle}>Quy định</Typography>
                </Box>
            )}
        </Box>
    );
};
