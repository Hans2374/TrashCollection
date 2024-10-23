import React, { useState } from 'react';
import { Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import colors from '../colors';
import './Login.css'; // Import the CSS file for animations

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '' });
    const [isRegister, setIsRegister] = useState(false);
    const [animate, setAnimate] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const validate = () => {
        let tempErrors = { username: '', password: '', confirmPassword: '' };
        let isValid = true;

        if (!username) {
            tempErrors.username = 'Tên username hoặc email không được để trống';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(username)) {
            tempErrors.username = 'Email không đúng định dạng';
            isValid = false;
        }

        if (!password) {
            tempErrors.password = 'Mật khẩu không được để trống';
            isValid = false;
        }

        if (isRegister && password !== confirmPassword) {
            tempErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            // Handle successful validation
        }
    };

    const handleToggle = () => {
        setAnimate(true);
        setTimeout(() => {
            setIsRegister(!isRegister);
            setAnimate(false);
        }, 500); // Duration of the animation
    };

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
                    sx={{ backgroundColor: 'transparent', width: '70%', height: '80%' }}
                >
                    <Typography variant="h6" style={{ color: colors.color3, fontSize: '32px', fontWeight: 700, marginBottom: '40px' }}>LOGO/TÊN</Typography>
                    <Box className="slide-text">
                        <Typography variant="h6" className={animate ? 'slide-up' : 'slide-down'} style={{ color: colors.color1, fontSize: '30px', fontWeight: 600, marginBottom: '10px' }}>
                            {isRegister ? 'Chào mừng gia nhập!' : 'Chào mừng trở lại!'}
                        </Typography>
                    </Box>
                    <Typography variant="h6" style={{ color: colors.color1, fontSize: '20px', fontWeight: 400, marginBottom: '50px' }}>Cùng chung tay bảo vệ môi trường với những sản phẩm tái chế và dịch vụ của chúng tôi. Hãy bắt đầu ngay để biến những điều cũ thành mới!</Typography>
                    <Box className="slide-text">
                        <Typography variant="h6" className={animate ? 'slide-up' : 'slide-down'} style={{ color: colors.color1, fontSize: '15px', fontWeight: 400 }}>
                            {isRegister ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'}
                        </Typography>
                    </Box>
                    <Button variant="contained" style={{ backgroundColor: colors.color1, color: colors.color2, fontSize: '20px', fontWeight: 400, width: '100%', borderRadius: '20px' }} onClick={handleToggle} >
                        {isRegister ? 'Đăng nhập' : 'Đăng ký'}
                    </Button>
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
                <Box p={3} className={animate ? 'form-slide-up' : 'form-slide-down'} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', width: '50%', height: '450px' }}>
                    <Typography variant="h4" style={{ color: colors.color2, marginBottom: '30px' }}>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</Typography>
                    <TextField
                        label={isRegister ? "Tên người dùng" : "Tên username hoặc email"}
                        variant="filled"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                        InputProps={{
                            style: {
                                backgroundColor: colors.color2,
                                borderRadius: '20px 20px 0px 0px',
                                opacity: 0.6,
                                color: colors.color1,
                                border: 'none',
                            },
                        }}
                        InputLabelProps={{
                            style: { color: colors.color1 },
                        }}
                    />
                    <TextField
                        label="Mật khẩu"
                        type={showPassword ? 'text' : 'password'}
                        variant="filled"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        InputProps={{
                            style: {
                                backgroundColor: colors.color2,
                                borderRadius: '20px 20px 0px 0px',
                                opacity: 0.6,
                                color: colors.color1,
                            },
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        sx={{ mr: 0 }}
                                    >
                                        {showPassword ? <VisibilityOff sx={{ color: colors.color1 }} /> : <Visibility sx={{ color: colors.color1 }} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{
                            style: { color: colors.color1 },
                        }}
                    />
                    {isRegister && (
                        <TextField
                            label="Xác nhận mật khẩu"
                            type={showConfirmPassword ? 'text' : 'password'}
                            variant="filled"
                            margin="normal"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            InputProps={{
                                style: {
                                    backgroundColor: colors.color2,
                                    borderRadius: '20px 20px 0px 0px',
                                    opacity: 0.6,
                                    color: colors.color1,
                                    marginBottom: '20px',
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowConfirmPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            sx={{ mr: 0 }}
                                        >
                                            {showConfirmPassword ? <VisibilityOff sx={{ color: colors.color1 }} /> : <Visibility sx={{ color: colors.color1 }} />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                style: { color: colors.color1 },
                            }}
                        />
                    )}
                    <Button
                        variant="contained"
                        style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '100%', borderRadius: '20px' }}
                        sx={{ marginTop: '30px' }}
                        onClick={handleSubmit}
                    >
                        {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                    </Button>
                    {!isRegister && (
                        <Box display="flex" justifyContent='space-between' mt={3}>
                            <Button style={{ color: colors.color2 }}>Quên mật khẩu?</Button>
                            <Box>
                                <IconButton>
                                    <img src={`${process.env.PUBLIC_URL}/images/facebook.png`} alt="Facebook" style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                                <IconButton>
                                    <img src={`${process.env.PUBLIC_URL}/images/gmail.png`} alt="Gmail" style={{ width: '24px', height: '24px' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Login;