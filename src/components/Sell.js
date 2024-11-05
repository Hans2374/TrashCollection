import React, { useState } from 'react';
import { Header1 } from './Header1';
import { Header2 } from './Header2';
import { ScrollToTop } from './ScrollToTop';
import { Footer } from './Footer';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Checkbox,
    FormControlLabel,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    Select,
    MenuItem,
} from '@mui/material';
import colors from '../colors';
import Grid from '@mui/material/Grid2';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const cardData = [
    {
        id: 1,
        title: "Nhựa",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card1.png`,
    },
    {
        id: 2,
        title: "Cao su",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card2.png`,
    },
    {
        id: 3,
        title: "Giấy",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card3.png`,
    },
    {
        id: 4,
        title: "Thuỷ tinh",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card4.png`,
    },
    {
        id: 5,
        title: "Kim loại",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card5.png`,
    },
    {
        id: 6,
        title: "Nilon",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card6.png`,
    },
    {
        id: 7,
        title: "Đồ điện",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card7.png`,
    },
    {
        id: 8,
        title: "Vải",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card8.png`,
    },
    {
        id: 9,
        title: "Củi khô",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card9.png`,
    },
    {
        id: 10,
        title: "Cát sỏi",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card10.png`,
    },
    {
        id: 11,
        title: "Rác hữu cơ",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card11.png`,
    },
    {
        id: 12,
        title: "Rác vô cơ tổng hợp",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card12.png`,
    },
    {
        id: 13,
        title: "Cát sỏi",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card10.png`,
    },
    {
        id: 14,
        title: "Rác hữu cơ",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card11.png`,
    },
    {
        id: 15,
        title: "Rác vô cơ tổng hợp",
        price: "60.000đ",
        image: `${process.env.PUBLIC_URL}/images/card12.png`,
    },
];

const Sell = () => {
    const [quantities, setQuantities] = useState(cardData.reduce((acc, card) => {
        acc[card.id] = 1;
        return acc;
    }, {}));
    const [selectedCards, setSelectedCards] = useState(cardData.reduce((acc, card) => {
        acc[card.id] = false;
        return acc;
    }, {}));
    const [selectAll, setSelectAll] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleIncrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };

    const handleDecrement = (id) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };

    const handleChange = (id, event) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [id]: value,
            }));
        }
    };

    const handleSelectAllChange = (event) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        setSelectedCards(cardData.reduce((acc, card) => {
            acc[card.id] = checked;
            return acc;
        }, {}));
    };

    const handleCheckboxChange = (id) => (event) => {
        setSelectedCards(prevSelectedCards => ({
            ...prevSelectedCards,
            [id]: event.target.checked,
        }));
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
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
                <Box sx={{ p: 10, pt: 3, pb: 0 }}>
                    <Box sx={{ height: '500px', overflowY: 'auto', '&::-webkit-scrollbar': { width: '8px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: '#214738', borderRadius: '10px' }, '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' } }}>
                        <Grid container spacing={2} >
                            {cardData.map((card, index) => (
                                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box
                                        sx={{
                                            width: '200px',
                                            height: '200px',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
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
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                width: '1000px',
                                                pl: '10px',
                                                boxSizing: 'border-box',
                                                borderTop: '4px solid #214738',
                                                borderRight: '4px solid #214738',
                                                borderBottom: '4px solid #214738',
                                                borderRadius: '0px 0px 15px 0px',
                                            }}>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                                                <Typography sx={{ alignSelf: 'center', fontFamily: 'KoHo', fontWeight: 400, fontSize: '15px', lineHeight: '19.5px', color: colors.color2 }}>{card.title}</Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <IconButton onClick={() => handleDecrement(card.id)} sx={{ border: '3px solid #214738', borderRight: '0px', borderRadius: '20px 0px 0px 20px' }}>
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    <TextField
                                                        value={quantities[card.id]}
                                                        onChange={(event) => handleChange(card.id, event)}
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
                                                    <IconButton onClick={() => handleIncrement(card.id)} sx={{ border: '3px solid #214738', borderLeft: '0px', borderRadius: '0px 20px 20px 0px' }}>
                                                        <AddIcon />
                                                    </IconButton>
                                                </Box>
                                                <Typography sx={{ alignSelf: 'center', fontFamily: 'KoHo', fontWeight: 700, fontSize: '16px', lineHeight: '20.8px', color: colors.color2 }}>{card.price}</Typography>
                                            </Box>
                                            <Typography sx={{ ml: 0.5, alignSelf: 'center', fontFamily: 'KoHo', fontWeight: 400, fontSize: '15px', lineHeight: '19.5px', color: colors.color2 }}>kg</Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <Checkbox
                                                    checked={selectedCards[card.id]}
                                                    onChange={handleCheckboxChange(card.id)}
                                                    sx={{
                                                        color: colors.color2,
                                                        '&.Mui-checked': {
                                                            color: colors.color2,
                                                        },
                                                        '& .MuiSvgIcon-root': { fontSize: 40 },
                                                        mr: -2.1,
                                                        mt: -2.1
                                                    }} />
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
                </Box>

                {/* Form Section */}
                <Box sx={{ pl: 10, pr: 10, pt: 3, mt: 0, display: 'flex', justifyContent: 'flex-start' }}>
                    <FormControlLabel
                        control={<Checkbox checked={selectAll} onChange={handleSelectAllChange}
                            sx={{
                                color: colors.color2,
                                '&.Mui-checked': {
                                    color: colors.color2,
                                },
                                '& .MuiSvgIcon-root': { fontSize: 30 },
                            }} />}
                        label="Chọn tất cả"
                        labelPlacement='start'
                        sx={{
                            fontFamily: 'KoHo',
                            fontWeight: 400,
                            fontSize: '15px',
                            lineHeight: '19.5px',
                            color: colors.color2,
                        }} />
                </Box>
                <Box sx={{ pl: 10, pr: 10, pt: 1, pb: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography
                        sx={{
                            fontFamily: 'KoHo',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '31.2px',
                            color: colors.color2,
                            p: 1,
                            border: '4px solid #214738',
                            borderRadius: '10px',
                        }}>
                        Tổng: 240.000đ
                    </Typography>
                    <Button variant='contained'
                        sx={{
                            bgcolor: colors.color2,
                            p: 1,
                            pl: 5,
                            pr: 5,
                            borderRadius: '10px',
                            color: colors.color1,
                            fontFamily: 'KoHo',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '31.2px',
                        }}
                        onClick={handleClickOpen}
                    >
                        Bán
                    </Button>
                </Box>

                {/* Popup form */}
                <Dialog open={open} onClose={handleClose} maxWidth='915px'>
                    <DialogTitle
                        align='center'
                        sx={{
                            fontFamily: 'KoHo',
                            fontWeight: 700,
                            fontSize: '30px',
                            lineHeight: '39px',
                            color: colors.color1,
                            bgcolor: colors.color2,
                        }}>
                        THANH TOÁN
                    </DialogTitle>
                    <Box sx={{ p: 5, pt: 0, border: '4px solid #214738' }}>
                        <DialogContent>
                            {/* Add your form fields here */}
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 5 }}>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Người bán"
                                        type="text"
                                        sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        label="Số điện thoại"
                                        type="text"
                                        sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                    />
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        displayEmpty
                                        sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Tỉnh/Thành phố
                                        </MenuItem>
                                        <MenuItem value="option1">TP. Hồ Chí Minh</MenuItem>
                                        <MenuItem value="option2">TP. Hà Nội</MenuItem>
                                        <MenuItem value="option3">TP. Huế</MenuItem>
                                    </Select>
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        displayEmpty
                                        sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Quận huyện
                                        </MenuItem>
                                        <MenuItem value="option1">Q1</MenuItem>
                                        <MenuItem value="option2">Q12</MenuItem>
                                        <MenuItem value="option3">Q2</MenuItem>
                                    </Select>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
                                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <Select
                                            value={selectedOption}
                                            onChange={handleSelectChange}
                                            displayEmpty
                                            sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                        >
                                            <MenuItem value="" disabled>
                                                Phường/Xã
                                            </MenuItem>
                                            <MenuItem value="option1">Tân Hưng Thuận</MenuItem>
                                            <MenuItem value="option2">Tân Bình</MenuItem>
                                            <MenuItem value="option3">Tân Phú</MenuItem>
                                        </Select>
                                        <TextField
                                            margin="dense"
                                            label="Tên đường, số nhà"
                                            type="text"
                                            sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                        />
                                    </Box>
                                    <Box sx={{ width: '324px', height: '150px', border: '3px solid #214738', borderRadius: '5px', justifyContent: 'center', alignContent: 'center', p: 1 }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', gap: 5, p: '0px 5px' }}>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>Tiền hàng</Typography>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '20px', lineHeight: '26px', alignSelf: 'center' }}>60.000đ</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', gap: 5, p: '0px 5px' }}>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>Vận chuyển</Typography>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '20px', lineHeight: '26px', alignSelf: 'center' }}>15.000đ</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', gap: 5, p: '0px 5px' }}>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '16px', lineHeight: '20.8px', alignSelf: 'flex-start' }}>Ước tính</Typography>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '16px', lineHeight: '20.8px', alignSelf: 'flex-start' }}>2-3 ngày</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', gap: 5, p: '0px 5px' }}>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}>Tổng nhận</Typography>
                                            <Typography sx={{ fontFamily: 'KoHo', fontWeight: 700, fontSize: '20px', lineHeight: '26px', alignSelf: 'center' }}>75.000đ</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 5}}>
                                    <Select
                                        value={selectedOption}
                                        onChange={handleSelectChange}
                                        displayEmpty
                                        sx={{ width: '324px', height: '50px', fontFamily: 'KoHo', fontWeight: 400, fontSize: '24px', lineHeight: '31.2px' }}
                                    >
                                        <MenuItem value="" disabled>
                                            Phương thức vận chuyển
                                        </MenuItem>
                                        <MenuItem value="option1">TÊN Đến lấy</MenuItem>
                                        <MenuItem value="option2">Đem đến cho TÊN</MenuItem>
                                    </Select>
                                    <Button variant='contained' onClick={handleClose}
                                        sx={{
                                            bgcolor: colors.color2,
                                            color: colors.color1,
                                            fontFamily: 'KoHo',
                                            fontWeight: 700,
                                            fontSize: '20px',
                                            lineHeight: '26px',
                                            height: '50px',
                                            width: '324px',
                                        }}>
                                        Tạo đơn hàng
                                    </Button>
                                </Box>
                            </Box>
                        </DialogContent>
                    </Box>
                </Dialog>
            </>
            <Footer />
        </>
    )
};

export default Sell;