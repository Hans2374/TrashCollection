import React from 'react';
import { Box } from '@mui/material';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

const News = () => {
    return (
        <>
            <ScrollToTop />
            <Header1 />

            {/* Box wrapping Header2 with background image */}
            <Box
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/news.png)`,
                    height: '421px',
                    backgroundSize: 'cover', // Ensures the image covers the Box
                    backgroundPosition: 'center', // Centers the image
                    maxWidth: '100%', // Set maximum width if needed, e.g., 'lg' for a larger container
                    margin: '0 auto', // Center the Box horizontally
                }}
            >
                
            </Box>
            <Header2 />
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>

            <div>g</div>
            <div>g</div>
            <div>g</div>
            <div>g</div>
            <Footer />
        </>
    );
};

export default News;
