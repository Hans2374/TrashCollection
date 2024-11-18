import React, { useState } from 'react';
import { Box, Grid, Typography, Divider, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';


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

const CustomButton = styled(Button)({
    color: '#214738', // Màu chữ
    border: '2px solid #214738',
    borderRadius: '10px',
    textTransform: 'capitalize', // Không viết hoa chữ
    fontSize: 16, // Cỡ chữ
    fontWeight: 400, // Độ đậm chữ
    fontFamily: 'KoHo',
    width: '176px',
    height: '44px',
    padding: '6px 12px', // Khoảng cách nội dung
    '&:hover': {
        borderColor: '#214738',
        backgroundColor: '#214738', // Màu nền khi hover
        color: 'white',
    },
});

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

    const [visibleOrders, setVisibleOrders] = useState(3);
    const [showMore, setShowMore] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);


    const handleShowMore = () => {
        setVisibleOrders(orders.length);
        setShowMore(false);
    };


    const handleHideOrders = () => {
        setVisibleOrders(3);
        setShowMore(true);
    };

    const handleDialogOpen = (order) => {
        setSelectedOrder(order);
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
        setSelectedOrder(null);
    };
    return (
        <Box sx={{ marginTop: '1%', marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' }, marginBottom: '50px' }}>
            {/* Lặp qua mảng orders và hiển thị thông tin cho mỗi đơn hàng */}
            {orders.slice(0, visibleOrders).map((order, index) => (
                <Box key={order.ID} sx={{ marginBottom: '20px' }}>
                    {/* Header row with date on the left and "Chi tiết" on the right, aligned to the right */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1px' }}>
                        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px' }}>
                            {order.orderDate} | {formatTimeToAMPM(order.orderTime)} | {order.ID}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="primary"
                            sx={{ cursor: 'pointer', marginRight: '16px', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}
                            onClick={() => handleDialogOpen(order)}

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

            {showMore ? (
                <Box sx={{ textAlign: 'center', marginTop: '15px' }}>
                    <CustomButton onClick={handleShowMore}>Xem thêm</CustomButton>
                </Box>
            ) : (
                <Box sx={{ textAlign: 'center', marginTop: '15px' }}>
                    <CustomButton onClick={handleHideOrders}>Ẩn</CustomButton>
                </Box>
            )}

            <div>


                <Dialog
                    open={open}
                    onClose={handleDialogClose}
                    maxWidth="sm"
                    fullWidth
                    PaperProps={{
                        sx: {
                            border: '10px solid #214738',
                            borderRadius: '15px',

                            backgroundColor: '#214738', // Màu nền xanh đậm
                        },
                    }}
                >
                    <DialogTitle sx={{ textAlign: 'center', color: '#ffffff', fontWeight: 'bold' }}>
                        CHI TIẾT ĐƠN
                    </DialogTitle>
                    <DialogContent sx={{ backgroundColor: '#FCF9F3', paddingBottom: 'auto' }}>
                        {selectedOrder && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Mã đơn hàng:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.ID}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Người nhận:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.recipient}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Số điện thoại:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.phoneNumber}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Địa chỉ:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.address}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Tình trạng:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.status}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '600', lineHeight: '26px', color: '#214738' }}>Sản phẩm:</Typography>
                                    <Typography sx={{ fontWeight: 'normal', fontSize: '20px', fontFamily: 'KoHo', fontWeight: '400', lineHeight: '26px', color: '#214738' }}>{selectedOrder.productQuantity}</Typography>
                                </Box>
                            </Box>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </Box>


    );
};

export default ProfileListTable;
