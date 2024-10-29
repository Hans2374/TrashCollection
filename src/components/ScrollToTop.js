import React from 'react';
import { Box } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';

export const ScrollToTop = () => {
    console.log('ScrollToTop rendered');
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Box
            onClick={handleScrollToTop}
            sx={{
                width: '50px',  
                height: '50px',
                backgroundColor: '#214738',
                borderRadius: '5px', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 
                cursor: 'pointer',
                position: 'fixed', 
                bottom: '20px', 
                right: '20px', 
                '&:hover': {
                    backgroundColor: '#2A3B32', 
                },
            }}
        >
            <RecyclingIcon  sx={{ color: '#FCF9F3' }} />
        </Box>
    );
};


