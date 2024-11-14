import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

const ProfileListTable = () => {
    return (

        <Box sx={{ marginTop: '1%', marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' } }}>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
                19/10/2024 | 5:00AM | HT830MRV
            </Typography>
            <Box
                sx={{
                    border: '1px solid #c2c2c2',
                    borderRadius: '8px',
                    padding: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '1%',
                    //marginX: '20%',
                    marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' },
                    width: '786',
                    height: '197',
                    borderRadius: '20px',

                }}
            >
                <Box
                    component="img"
                    src="/path/to/your/image.jpg" // Replace with your actual image path
                    alt="Product"
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '4px',
                        marginRight: '16px',
                    }}
                />

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body2" color="textSecondary">
                                19/10/2024 | 5:00AM | HT830MRV
                            </Typography>
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ float: 'right', cursor: 'pointer' }}
                            >
                                Chi tiết
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2">Số lượng sản phẩm:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2">1</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2">Tổng:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2">
                                234.000đ | <span style={{ color: 'green' }}>60.000🍃</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2">Địa chỉ:</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography variant="body2">
                                HCM, Q.Bình Thạnh, P.13, Đ.ABC, số 54
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2">Tình trạng:</Typography>
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
