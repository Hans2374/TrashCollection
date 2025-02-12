import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { useTheme } from '@mui/material/styles';
import colors from '../colors';

export const ScrollToTop = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isSmallScreen) {
        return null;
    }

    return (
        <Box
            onClick={handleScrollToTop}
            sx={{
                width: '50px',
                height: '50px',
                backgroundColor: colors.color2,
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 1000,
                '&:hover': {
                    backgroundColor: '#2A3B32',
                },
            }}
        >
            <RecyclingIcon sx={{ color: colors.color1 }} />
        </Box>
    );
};


