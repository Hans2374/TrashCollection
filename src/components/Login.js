import React from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import colors from '../colors';

const Login = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between" sx={{ height: '100vh' }}>
            {/* Left Box */}
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flex={1}
                sx={{ backgroundColor: colors.color2, width: '30vw', flex: '0 0 30vw' }}
            >
                {/* Invisible Inner Box */}
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: 'transparent', width: '60%', height: '80%' }}
                >
                    <Typography variant="h6" style={{ color: colors.color1, fontSize: '32px', fontWeight: 700, marginBottom: '40px' }}>LOGO/TÊN</Typography>
                    <Typography variant="h6" style={{ color: colors.color1, fontSize: '30px', fontWeight: 600, marginBottom: '10px' }}>Chào mừng trở lại!</Typography>
                    <Typography variant="h6" style={{ color: colors.color1, fontSize: '20px', fontWeight: 400, marginBottom: '50px' }}>Cùng chung tay bảo vệ môi trường với những sản phẩm tái chế và dịch vụ của chúng tôi. Hãy bắt đầu ngay để biến những điều cũ thành mới!</Typography>
                    <Typography variant="h6" style={{ color: colors.color1, fontSize: '15px', fontWeight: 400 }}>Chưa có tài khoản?</Typography>
                    <Button variant="contained" style={{ backgroundColor: colors.color1, color: colors.color2, fontSize: '20px', fontWeight: 400, width: '100%', borderRadius: '20px' }}>Đăng ký</Button>
                </Box>
            </Box>

            {/* Right Box */}
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flex={1}
                p={2}
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/main.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Typography variant="h4" style={{ color: colors.color2 }}>Đăng nhập</Typography>
                <TextField label="Tên người dùng" variant="outlined" margin="normal" fullWidth />
                <TextField label="Mật khẩu" type="password" variant="outlined" margin="normal" fullWidth />
                <Button style={{ color: colors.color2 }}>Quên mật khẩu?</Button>
                <Box display="flex" justifyContent="center" mt={2}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <GoogleIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;