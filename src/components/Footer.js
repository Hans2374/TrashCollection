import { Box, Typography } from '@mui/material';
import React from 'react';
import { Facebook, YouTube, Instagram, Twitter } from '@mui/icons-material';
import colors from '../colors';

export const Footer = () => {
    console.log('Footer rendered');
    return (
        <Box
            sx={{
                fontFamily: 'KoHo',
                height: 'auto',
                backgroundColor: '#214738',
                color: '#F8F3E7',
                fontFamily: 'KoHo, sans-serif',
                padding: '0 16px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, 
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box sx={{ textAlign: 'left', flex: 1 }}>
                <Typography variant="h5" sx={{ fontFamily: 'KoHo', fontWeight: 'bold', marginBottom: '20px', marginTop: '50px', marginLeft: { md: '150px' },}}>
                    LOGO/TÊN
                </Typography>

                {['0123456789', '0000000000', '6927968059'].map((hotline, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: { md: '150px' }, }}>
                        <Box
                            sx={{
                                fontFamily: 'KoHo',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: '#F8F3E7',
                                marginRight: '10px'
                            }}
                        />
                        <Typography >{`Hotline ${index + 1}: ${hotline}`}</Typography>
                    </Box>
                ))}

                <Typography
                    sx={{
                        fontFamily: 'KoHo',
                        marginLeft: { md: '150px' },
                        color: '#F8F3E7',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                        marginBottom: '10px',
                        
                    }}
                >
                    Email: hotro@gmail.com
                </Typography>
                <Typography sx={{ fontFamily: 'KoHo', marginBottom: '20px', marginLeft: { md: '150px' }, }}>
                    Địa chỉ: 256 Bình Thạnh, BHH B, Q. Bình Tân, Tp.HCM
                </Typography>

                <Box sx={{ fontFamily: 'KoHo', display: 'flex', gap: '20px', marginTop: '20px', marginBottom: '50px', marginLeft: { md: '150px' }, }}>
                    <Facebook sx={{ color: '#F8F3E7', '&:hover': { color: '#1877F2' } }} />
                    <YouTube sx={{ color: '#F8F3E7', '&:hover': { color: '#FF0000' } }} />
                    <Instagram sx={{ color: '#F8F3E7', '&:hover': { color: '#E1306C' } }} />
                    <Twitter sx={{ color: '#F8F3E7', '&:hover': { color: '#1DA1F2' } }} />
                </Box>
            </Box>

            <Box sx={{ 
                width: { xs: '100%', md: '500px' },  
                height: 250,  
                padding: 0, 
                border: `5px solid ${colors.color1}`,
                borderRadius: '8px', 
                overflow: 'hidden', 
                margin: { xs: '20px 0 20px 0', md: '0 100px 0 20px' }, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
            }}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5628050519643!2d106.7698912759312!3d10.850873289296602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752743bdf5a07b%3A0x42a0364c47a52796!2zMjIgRC4gSMOgbmcgRGl14buBdSAyLCBQLiBMaW5oIFRydW5nLCBUaOG7pyDEkOG7qWMgVGjhuqFjIFRow6BuaCwgSOG7kyBDaMOtIE5naGhp!5e0!3m2!1sen!2s!4v1694593284505!5m2!1sen!2s"
                    width="100%"
                    height="250"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </Box>
    );
};
