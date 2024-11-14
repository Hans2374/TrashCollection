import { Box, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from "../routes/routes";

export const AdminHeader = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 900px)');

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const menuItemStyle = {
        fontFamily: 'KoHo',
        color: '#214738',
        fontSize: '20px',
        transition: 'font-weight 0.2s, text-shadow 0.2s',
        '&:hover': {
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        },
    };

    return (
        <Box
            sx={{
                zIndex: 10,
                height: '100px',
                backgroundColor: '#F8F3E7',
                fontFamily: 'KoHo',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out', // Include top in transition
            }}
        >
            {/* Logo/Tên */}
            <Link to={routes.homePage} style={{ textDecoration: 'none' }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'KoHo',
                        marginLeft: { md: '100px' },
                        fontWeight: 'bold',
                        color: '#214738',
                    }}
                >
                    LOGO/TÊN
                </Typography>
            </Link>

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
                                            fontFamily: 'KoHo',
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
                <Box sx={{ display: 'flex', gap: '150px', marginRight: { md: '200px' } }}>
                    <Link to="/admin-product" style={{ textDecoration: 'none' }}><Typography sx={menuItemStyle}>Sản phẩm</Typography></Link>
                    <Link to="/admin-order" style={{ textDecoration: 'none' }}><Typography sx={menuItemStyle}>Đơn hàng</Typography></Link>
                    <Link to="/admin-statistic" style={{ textDecoration: 'none' }}><Typography sx={menuItemStyle}>Thống kê</Typography></Link>
                    <Link to="/admin-user" style={{ textDecoration: 'none' }}><Typography sx={menuItemStyle}>Người dùng</Typography></Link>
                </Box>
            )}
        </Box>
    );
};
