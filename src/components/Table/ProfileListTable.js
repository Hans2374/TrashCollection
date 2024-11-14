import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';

const ProfileListTable = () => {
    return (
        <Box sx={{ marginTop: '1%', marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' }, marginBottom: '50px' }}>
            {/* Header row with date on the left and "Chi tiết" on the right, aligned to the right */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                <Typography variant="body2" color="textSecondary">
                    19/10/2024 | 5:00AM | HT830MRV
                </Typography>
                <Typography
                    variant="body2"
                    color="primary"
                    sx={{ cursor: 'pointer', marginRight: '16px' }}
                >
                    Chi tiết
                </Typography>
            </Box>

            {/* Main content box */}
            <Box
                sx={{
                    border: '1px solid #c2c2c2',
                    borderRadius: '20px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    Width: 786,
                    height: 197,

                }}
            >
                <Box
                    component="img"
                    src="sec1.png" // Replace with your actual image path
                    alt="Product"
                    sx={{
                        width: 212,
                        height: 198,
                        borderRadius: '4px',
                        marginRight: '16px',
                    }}
                />

                <Box sx={{ flexGrow: 1 }}>
                    <Grid >

                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Số lượng sản phẩm:</Typography>
                            <Typography variant="body2" sx={{ textAlign: 'right' }}>1</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Tổng:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2">
                                234.000đ | <span style={{ color: 'green' }}>60.000🍃</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Địa chỉ:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2">
                                HCM, Q.Bình Thạnh, P.13, Đ.ABC, số 54
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" sx={{ textAlign: 'left' }}>Tình trạng:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" color="textSecondary">
                                Đang giao hàng
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileListTable;
