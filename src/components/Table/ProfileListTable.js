import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Dialog, DialogContent, DialogTitle, Icon, Divider, } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../colors';
import SearchIcon from '@mui/icons-material/Search';


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
        itemPrice: 1630000,
        bonusPoint: 295,
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
        itemPrice: 700000,
        bonusPoint: 128,
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
        itemPrice: 1150000,
        bonusPoint: 184,
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
        itemPrice: 360000,
        bonusPoint: 40,
        shippingFee: 10000,
        discount: 0,
        img: "/images/sec4.png"
    }
];

const products = [
    {
        productId: "P12345",
        orderId: "DH001",
        productName: "Product A",
        quantity: 2,
        price: 150000,
        bonusPoint: 30,
        image: "/images/sec1.png"
    },
    {
        productId: "P12346",
        orderId: "DH001",
        productName: "Product B",
        quantity: 1,
        price: 250000,
        bonusPoint: 50,
        image: "/images/sec3.png"
    },
    {
        productId: "P12347",
        orderId: "DH001",
        productName: "Product C",
        quantity: 5,
        price: 120000,
        bonusPoint: 20,
        image: "/images/sec2.png"
    },
    {
        productId: "P12348",
        orderId: "DH001",
        productName: "Product D",
        quantity: 3,
        price: 80000,
        bonusPoint: 15,
        image: "/images/sec4.png"
    },
    {
        productId: "P12349",
        orderId: "DH001",
        productName: "Product E",
        quantity: 4,
        price: 60000,
        bonusPoint: 10,
        image: "/images/sec1.png"
    },
    {
        productId: "P12350",
        orderId: "DH002",
        productName: "Product F",
        quantity: 6,
        price: 50000,
        bonusPoint: 8,
        image: "/images/sec3.png"
    },
    {
        productId: "P12351",
        orderId: "DH002",
        productName: "Product G",
        quantity: 2,
        price: 200000,
        bonusPoint: 40,
        image: "/images/sec3.png"
    },
    {
        productId: "P12352",
        orderId: "DH003",
        productName: "Product H",
        quantity: 7,
        price: 70000,
        bonusPoint: 12,
        image: "/images/sec4.png"
    },
    {
        productId: "P12353",
        orderId: "DH003",
        productName: "Product I",
        quantity: 1,
        price: 300000,
        bonusPoint: 60,
        image: "/images/sec1.png"
    },
    {
        productId: "P12354",
        orderId: "DH003",
        productName: "Product J",
        quantity: 8,
        price: 45000,
        bonusPoint: 5,
        image: "/images/sec1.png"
    },
    {
        productId: "P12354",
        orderId: "DH004",
        productName: "Product J",
        quantity: 8,
        price: 45000,
        bonusPoint: 5,
        image: "/images/sec3.png"
    }
];




const CustomButton = styled(Button)({
    color: `${colors.color2}`, // Màu chữ
    border: `2px solid ${colors.color2}`,
    borderRadius: '10px',
    textTransform: 'capitalize', // Không viết hoa chữ
    fontSize: 16, // Cỡ chữ
    fontWeight: 400, // Độ đậm chữ
    fontFamily: 'KoHo',
    width: '176px',
    height: '44px',
    padding: '6px 12px', // Khoảng cách nội dung
    '&:hover': {
        borderColor: `${colors.color2}`,
        backgroundColor: `${colors.color2}`, // Màu nền khi hover
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
        const orderProducts = products.filter(product => product.orderId === order.ID);  // Lọc sản phẩm theo ID đơn hàng
        setSelectedOrder({ ...order, orderProducts }); // Thêm sản phẩm vào order
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
        setSelectedOrder(null);
    };

    const handleQuantityChange = (e, productId) => {
        const updatedProducts = selectedOrder.orderProducts.map((product) =>
            product.productId === productId
                ? { ...product, quantity: e.target.value } // Cập nhật số lượng
                : product
        );
        setSelectedOrder((prev) => ({ ...prev, orderProducts: updatedProducts }));
    };

    // Filter products based on selected order ID (assuming you have a products array)
    const filteredProducts = selectedOrder
        ? products.filter(product => product.orderId === selectedOrder.ID)
        : [];


    return (
        <Box sx={{ marginTop: '1%', marginX: { xs: '5%', sm: '10%', md: '15%', lg: '20%' }, marginBottom: '50px' }}>
            <Divider sx={{ my: 4, marginBottom: '50px' }} />
            <Typography
                sx={{
                    fontFamily: 'KoHo',
                    fontSize: { xs: '24px', sm: '32px' }, 
                    fontWeight: 600,
                    lineHeight: { xs: '30px', sm: '46.8px' }, 
                    color: colors.color2,
                    textAlign: 'center',
                    marginBottom: '50px',
                }}
            >
                Lịch sử giao dịch
            </Typography>
            <Box sx={{ position: "relative", width: "500px", marginBottom: "30px" }}>
                <input
                    type="text"
                    placeholder="Tìm kiếm đơn hàng?"
                    style={{
                        backgroundColor: colors.color1,
                        border: `2px solid ${colors.color2}`,
                        width: "100%",
                        borderRadius: "5px",
                        fontFamily: "KoHo",
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "26px",
                        outline: "none",
                        padding: "10px 40px",
                    }}
                />
                <Icon
                    sx={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#888",
                    }}
                >
                    <SearchIcon />
                </Icon>
            </Box>
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
                            border: `10px solid ${colors.color2}`,
                            borderRadius: "15px",
                            backgroundColor: `${colors.color2}`,
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            textAlign: "center",
                            color: "#ffffff",
                            fontWeight: "bold",
                        }}
                    >
                        CHI TIẾT ĐƠN
                    </DialogTitle>
                    <DialogContent
                        sx={{
                            backgroundColor: `${colors.color1}`,
                            paddingBottom: "16px",
                        }}
                    >
                        {selectedOrder && (
                            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                {/* Thông tin đơn hàng */}
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Mã đơn hàng:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {selectedOrder.ID}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Người nhận:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {selectedOrder.recipient}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Số điện thoại:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {selectedOrder.phoneNumber}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Địa chỉ:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {selectedOrder.address}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Tình trạng:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {selectedOrder.status}
                                    </Typography>
                                </Box>
                                {/* Tính tổng số lượng sản phẩm */}
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "#214738",
                                        }}
                                    >
                                        Sản phẩm:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {/* Tính tổng số lượng sản phẩm cho OrderID hiện tại */}
                                        {products
                                            .filter(product => product.orderId === selectedOrder.ID) // Lọc theo OrderID
                                            .reduce((total, product) => total + product.quantity, 0)} {/* Tính tổng số lượng sản phẩm */}
                                    </Typography>
                                </Box>
                                {/* Danh sách sản phẩm */}
                                <Box sx={{ maxHeight: "264px", overflowY: "auto", border: "6px solid #214738", borderRadius: "8px", padding: "8px" }}>
                                    {products
                                        .filter(product => product.orderId === selectedOrder.ID) // Lọc theo OrderID
                                        .map((product, index) => (
                                            <Grid container key={product.productId} alignItems="center" sx={{ borderBottom: index < products.length - 1 ? "3px solid #214738" : "none", padding: "8px 0" }}>
                                                <Grid item xs={3}>
                                                    <img src={product.image} alt={product.productName} style={{ width: "60px", height: "60px", borderRadius: "4px" }} />
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography>{product.productName}</Typography>
                                                    <Typography>x {product.quantity}</Typography>
                                                </Grid>
                                                <Typography sx={{ fontWeight: "bold" }}>
                                                    {product.quantity * product.price} đ
                                                </Typography>
                                            </Grid>
                                        ))}
                                </Box>
                                {/* Tiền hàng */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#214738" }}>
                                        Tiền hàng:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {/* Tính tổng giá các sản phẩm */}
                                        {products
                                            .filter(product => product.orderId === selectedOrder.ID) // Lọc theo OrderID
                                            .reduce((total, product) => total + product.quantity * product.price, 0)
                                            .toLocaleString()} đ
                                        {" | "}
                                        {/* Tính tổng bonus points */}
                                        {products
                                            .filter(product => product.orderId === selectedOrder.ID) // Lọc theo OrderID
                                            .reduce((total, product) => total + product.bonusPoint * product.quantity, 0)}🌱
                                    </Typography>
                                </Box>

                                {/* Phí vận chuyển */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#214738" }}>
                                        Phí vận chuyển:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {/* Lấy giá trị phí vận chuyển từ đơn hàng */}
                                        {selectedOrder.shippingFee.toLocaleString()} đ
                                    </Typography>
                                </Box>

                                {/* Giảm giá */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px" }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: "18px", color: "#214738" }}>
                                        Giảm giá:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {/* Lấy giá trị giảm giá từ đơn hàng */}
                                        {selectedOrder.discount.toLocaleString()} đ
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "16px", fontWeight: "bold" }}>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        Tổng:
                                    </Typography>
                                    <Typography sx={{ fontSize: "18px", color: "#214738" }}>
                                        {/* Tính tổng = Tiền hàng + Phí vận chuyển - Giảm giá */}
                                        {(
                                            products
                                                .filter(product => product.orderId === selectedOrder.ID)
                                                .reduce((total, product) => total + product.quantity * product.price, 0) // Tiền hàng
                                            + selectedOrder.shippingFee // Phí vận chuyển
                                            - selectedOrder.discount // Giảm giá
                                        ).toLocaleString()} đ
                                    </Typography>
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
