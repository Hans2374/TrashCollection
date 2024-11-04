import React, { useState } from 'react';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { ScrollToTop } from './ScrollToTop';
import { Footer } from './Footer';
import { Box, Typography, IconButton, TextField, Checkbox } from '@mui/material';
import colors from '../colors';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Sell = () => {
    const [quantity, setQuantity] = useState(1);

    const cardData = [
        {
            id: 1,
            title: "Nhựa",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card1.png`,
        },
        {
            id: 2,
            title: "Cao su",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card2.png`,
        },
        {
            id: 3,
            title: "Giấy",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card3.png`,
        },
        {
            id: 4,
            title: "Thuỷ tinh",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card4.png`,
        },
        {
            id: 5,
            title: "Kim loại",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card5.png`,
        },
        {
            id: 6,
            title: "Nilon",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card6.png`,
        },
        {
            id: 7,
            title: "Đồ điện",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card7.png`,
        },
        {
            id: 8,
            title: "Vải",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card8.png`,
        },
        {
            id: 9,
            title: "Củi khô",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card9.png`,
        },
        {
            id: 10,
            title: "Cát sỏi",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card10.png`,
        },
        {
            id: 11,
            title: "Rác hữu cơ",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card11.png`,
        },
        {
            id: 12,
            title: "Rác vô cơ tổng hợp",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card12.png`,
        },
        {
            id: 13,
            title: "Cát sỏi",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card10.png`,
        },
        {
            id: 14,
            title: "Rác hữu cơ",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card11.png`,
        },
        {
            id: 15,
            title: "Rác vô cơ tổng hợp",
            price: "60.000đ / 1kg",
            image: `${process.env.PUBLIC_URL}/images/card12.png`,
        },
    ];

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        }
    };

    return (
        <>
            <ScrollToTop />
            <Header1 />
            <Box>
                <Header2 />
            </Box>

            {/* Nội dung */}
            <>
                <Typography sx={{ p: 10, pb: 0, fontFamily: 'KoHo', fontWeight: 700, fontSize: '30px', lineHeight: '39px', color: colors.color2 }}>Bán</Typography>

                {/* Card display */}
                <Box sx={{ p: 10 }}>
                    <Grid container spacing={2} >
                        {cardData.map((card, index) => (
                            <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} >
                                <Box
                                    sx={{
                                        width: '200px',
                                        height: '200px',
                                        boxSizing: 'border-box',
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}>
                                    <Box
                                        component="img"
                                        src={card.image}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            boxSizing: 'border-box',
                                            border: '4px solid #214738',
                                            borderRadius: '15px 0px 0px 15px',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            width: '200px',
                                            padding: '10px',
                                            boxSizing: 'border-box',
                                            borderTop: '4px solid #214738',
                                            borderRight: '4px solid #214738',
                                            borderBottom: '4px solid #214738',
                                            borderRadius: '0px 15px 15px 0px',
                                        }}>
                                        <Box sx={{ ml: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Typography sx={{ alignSelf: 'center', fontFamily: 'KoHo', fontWeight: 400, fontSize: '15px', lineHeight: '19.5px', color: colors.color2 }}>{card.title}</Typography>
                                            <Checkbox sx={{color: colors.color2}}/>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <IconButton onClick={handleDecrement} sx={{ border: '3px solid #214738', borderRight: '0px', borderRadius: '20px 0px 0px 20px' }}>
                                                <RemoveIcon />
                                            </IconButton>
                                            <TextField
                                                value={quantity}
                                                onChange={handleChange}
                                                inputProps={{ min: 1, style: { textAlign: 'center', height: '40px', padding: 0, width: '40px' } }}
                                                sx={{
                                                    border: '3px solid #214738',
                                                    maxWidth: '40px',
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            border: 'none',
                                                        },
                                                    },
                                                }}
                                            />
                                            <IconButton onClick={handleIncrement} sx={{ border: '3px solid #214738', borderLeft: '0px', borderRadius: '0px 20px 20px 0px' }}>
                                                <AddIcon />
                                            </IconButton>
                                            <Typography sx={{ ml: 0.5, fontFamily: 'KoHo', fontWeight: 400, fontSize: '15px', lineHeight: '19.5px', color: colors.color2 }}>kg</Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Typography sx={{ alignSelf: 'center', fontFamily: 'KoHo', fontWeight: 700, fontSize: '16px', lineHeight: '20.8px', color: colors.color2 }}>{card.price}</Typography>
                                            <IconButton sx={{ color: colors.color2 }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </>
            <Footer />
        </>
    )
};

export default Sell;