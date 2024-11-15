import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import colors from '../../colors';

const orders = [
    {
        ID: "DH001",
        orderTime: "10:30",
        orderDate: "13/11/2024",
        productQuantity: 5,
        address: "123 Đường A, Quận 1, TP. HCM",
        status: "Đã giao",
        recipient: "Nguyễn Văn A",
        phoneNumber: "0901234567",
        itemPrice: 500000,
        bonusPoint: 2000,
        shippingFee: 20000,
        discount: 50000,
        img: "/images/sec1.png"
    },
    {
        ID: "DH002",
        orderTime: "14:15",
        orderDate: "12/11/2024",
        productQuantity: 2,
        address: "456 Đường B, Quận 3, TP. HCM",
        status: "Đang xử lý",
        recipient: "Trần Thị B",
        phoneNumber: "0902345678",
        itemPrice: 300000,
        bonusPoint: 1000,
        shippingFee: 15000,
        discount: 20000,
        img: "/images/sec2.png"
    },
    {
        ID: "DH003",
        orderTime: "09:45",
        orderDate: "11/11/2024",
        productQuantity: 3,
        address: "789 Đường C, Quận 5, TP. HCM",
        status: "Chưa giao",
        recipient: "Lê Văn C",
        phoneNumber: "0903456789",
        itemPrice: 450000,
        bonusPoint: 0,
        shippingFee: 25000,
        discount: 30000,
        img: "/images/sec3.png"
    },
    {
        ID: "DH004",
        orderTime: "16:00",
        orderDate: "10/11/2024",
        productQuantity: 1,
        address: "101 Đường D, Quận 7, TP. HCM",
        status: "Đã hủy",
        recipient: "Phạm Thị D",
        phoneNumber: "0904567890",
        itemPrice: 200000,
        bonusPoint: 1500,
        shippingFee: 10000,
        discount: 0,
        img: "/images/sec4.png"
    }
];

const formatTimeToAMPM = (time24) => {
    const [hours, minutes] = time24.split(':').map(Number);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Nếu giờ là 0 (12 AM), chuyển thành 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours12}:${minutesFormatted} ${ampm}`;
};

const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN') + 'đ';
}

const ProfileListTable = () => {
    return (
        <Box sx={{ marginTop: '1%', marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' }, marginBottom: '50px' }}>
            {/* Lặp qua mảng orders và hiển thị thông tin cho mỗi đơn hàng */}
            {orders.map((order, index) => (
                <Box key={order.ID} sx={{ marginBottom: '20px' }}>
                    {/* Header row with date on the left and "Chi tiết" on the right, aligned to the right */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px' }}>
                            {order.orderDate} | {formatTimeToAMPM(order.orderTime)} | {order.ID}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="primary"
                            sx={{ cursor: 'pointer', marginRight: '16px', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: colors.color2 }}
                        >
                            Chi tiết
                        </Typography>
                    </Box>

                    {/* Main content box */}
                    <Box
                        sx={{
                            border: `5px solid ${colors.color2}`,
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
                            src={order.img} // Sử dụng ảnh từ đối tượng order
                            sx={{
                                width: 212,
                                height: 198,
                                borderLeft: `4px solid ${colors.color2}`,
                                borderRight: `4px solid ${colors.color2}`,
                                borderTop: `4px solid ${colors.color2}`,
                                borderBottom: `4px solid ${colors.color2}`,
                                borderTopLeftRadius: '20px',       // Rounded corner on top-left
                                borderBottomLeftRadius: '20px',    // Rounded corner on bottom-left
                                borderTopRightRadius: '3px',       // No rounded corner on top-right
                                borderBottomRightRadius: '3px',    // No rounded corner on bottom-right
                                marginRight: '16px',
                                marginLeft: '-20px',
                            }}
                        />

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2} sx={{ marginTop: '1px', marginBottom: '1px' }}>
                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        Số lượng sản phẩm:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'right', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        {order.productQuantity}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        Tổng:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'right', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        {formatCurrency(order.itemPrice - order.discount + order.shippingFee)} <span>| {order.bonusPoint}🌱 </span>
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        Địa chỉ:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'right', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        {order.address}
                                    </Typography>
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'left', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        Tình trạng:
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" sx={{ textAlign: 'right', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', color: colors.color2 }}>
                                        {order.status}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default ProfileListTable;
