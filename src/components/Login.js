import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton, Icon } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import colors from '../colors';
import styles from './Login.module.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { routes } from '../routes/routes';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({ username: '', password: '', confirmPassword: '', email: '', verificationCode: '' });
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');
    const [isResetPassword, setIsResetPassword] = useState(false);
    const [updateSuccessMessage, setUpdateSuccessMessage] = useState('');
    const [isYesNo, setIsYesNo] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Hide scroll
        document.body.style.overflow = 'hidden';

        // Cleanup function to reset the overflow style
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    useEffect(() => {
        let messageTimer;
        if (successMessage) {
            messageTimer = setTimeout(() => setSuccessMessage(''), 10000); // Clear message after 10 seconds
        }
        return () => clearTimeout(messageTimer);
    }, [successMessage]);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const validate = () => {
        let tempErrors = { username: '', password: '', confirmPassword: '', email: '', verificationCode: '' };
        let isValid = true;

        if (isForgotPassword) {
            if (!email) {
                tempErrors.email = 'Email không được để trống';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                tempErrors.email = 'Email không đúng định dạng';
                isValid = false;
            }

            if (!verificationCode) {
                tempErrors.verificationCode = 'Mã xác minh không được để trống';
                isValid = false;
            }

            if ((isRegister || isResetPassword) && password !== confirmPassword) {
                tempErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
                isValid = false;
            }
        } else {
            if (!username && !isForgotPassword && !isResetPassword) {
                tempErrors.username = 'Tên username/email không được để trống';
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(username) && !isForgotPassword && !isResetPassword) {
                tempErrors.username = 'Email không đúng định dạng';
                isValid = false;
            }

            if (!password) {
                tempErrors.password = 'Mật khẩu không được để trống';
                isValid = false;
            }

            if ((isRegister || isResetPassword) && password !== confirmPassword) {
                tempErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
                isValid = false;
            }
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            if (isForgotPassword) {
                // Simulate successful verification
                if (verificationCode === '123456') { // Example verification code
                    setAnimate(true);
                    setTimeout(() => {
                        setIsResetPassword(true);
                        setIsForgotPassword(false);
                        // Clear the form state
                        setEmail('');
                        setVerificationCode('');
                        setErrors({ email: '', verificationCode: '' });
                        setAnimate(false);
                    }, 300); // Duration of the animation
                } else {
                    setErrors({ ...errors, verificationCode: 'Mã xác minh không đúng' });
                }
            } else if (isResetPassword) {
                // Handle password reset logic here
                setUpdateSuccessMessage('Mật khẩu đã được cập nhật thành công!');
                setTimeout(() => {
                    setAnimate(true);
                    setTimeout(() => {
                        setIsResetPassword(false);
                        setUsername('');
                        setPassword('');
                        setConfirmPassword('');
                        setErrors({ username: '', password: '', confirmPassword: '' });
                        setUpdateSuccessMessage('');
                        setAnimate(false);
                    }, 300); // Duration of the animation
                }, 5000); // Display success message for 5 seconds
            } else {
                // Handle successful validation for login or register
                if (username === 'customer@gmail.com' && password === 'customer') {
                    setErrors({ username: '', password: '', confirmPassword: '' });
                    navigate(routes.homePage); // Add this line to navigate to the homepage
                } else {
                    setErrors({ ...errors, username: '', password: 'Email/Username hoặc mật khẩu không đúng!' });
                }
            }
        }
    };

    const handleToggle = () => {
        setIsYesNo(true);
        setAnimate(true);
        setTimeout(() => {
            setIsRegister(!isRegister);
            setIsForgotPassword(false); // Reset the forgot password state
            setIsResetPassword(false); // Reset the reset password state
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setEmail('');
            setVerificationCode('');
            setErrors({ username: '', password: '', confirmPassword: '', email: '', verificationCode: '' });
            setAnimate(false);
        }, 300); // Duration of the animation
    };

    const handleForgotPassword = () => {
        setIsYesNo(false);
        setAnimate(true);
        setTimeout(() => {
            setIsForgotPassword(true);
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setErrors({ username: '', password: '', confirmPassword: '', email: '', verificationCode: '' });
            setAnimate(false);
        }, 300); // Duration of the animation
    };

    const handleCancelForgotPassword = () => {
        setAnimate(true);
        setTimeout(() => {
            setIsForgotPassword(false);
            setEmail('');
            setVerificationCode('');
            setErrors({ email: '', verificationCode: '' });
            setAnimate(false);
        }, 300); // Duration of the animation
    };

    const handleCancelResetPassword = () => {
        setAnimate(true);
        setTimeout(() => {
            setIsResetPassword(false);
            setIsForgotPassword(false);
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            setErrors({ username: '', password: '', confirmPassword: '' });
            setAnimate(false);
        }, 300); // Duration of the animation
    };

    const handleSendCode = () => {
        if (!email) {
            setErrors({ ...errors, email: 'Email không được để trống' });
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ ...errors, email: 'Email không đúng định dạng' });
        } else {
            // Implement the logic to send the verification code here
            setCountdown(60);
            setSuccessMessage('Mã xác minh đã được gửi thành công!');
            setErrors({ ...errors, email: '' });
        }
    };

    return (
        <Box className={styles.loginContainer} display="flex" flexDirection="row" sx={{ height: '100vh' }}>
            {/* Left Box */}
            <Box
                className={styles.leftBox}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flex={1}
                sx={{ backgroundColor: colors.color2, width: '30vw', flex: '0 0 30vw', position: 'relative' }}
            >
                {/* Logo */}
                <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt="Logo"
                    className={styles.logo}
                />
                {/* Invisible Inner Box */}
                <Box
                    className={styles.leftContent}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ backgroundColor: 'transparent', width: '70%', height: '80%' }}
                >
                    <Typography className={styles.companyName} variant="h6" style={{ color: colors.color3, fontSize: '32px', fontWeight: 700, marginBottom: '40px', fontFamily: 'KoHo', }}>LOGO/TÊN</Typography>
                    <Box className={styles.slideText}>
                        <Typography variant="h6" className={`${styles.welcome} ${isYesNo ? (animate ? styles.slideUp : styles.slideDown) : ''}`} style={{ color: colors.color1, fontSize: '30px', fontWeight: 600, marginBottom: '10px', fontFamily: 'KoHo', }}>
                            {isRegister ? 'Chào mừng gia nhập!' : 'Chào mừng trở lại!'}
                        </Typography>
                    </Box>
                    <Typography className={styles.leftDescription} variant="h6" style={{ color: colors.color1, fontSize: '20px', fontWeight: 400, marginBottom: '50px', fontFamily: 'KoHo', }}>Cùng chung tay bảo vệ môi trường với những sản phẩm tái chế và dịch vụ của chúng tôi. Hãy bắt đầu ngay để biến những điều cũ thành mới!</Typography>
                    <Box className={styles.slideText}>
                        <Typography variant="h6" className={`${isYesNo ? (animate ? styles.slideUp : styles.slideDown) : ''}`} style={{ color: colors.color1, fontSize: '15px', fontWeight: 400, fontFamily: 'KoHo', }}>
                            {isRegister ? 'Đã có tài khoản?' : 'Chưa có tài khoản?'}
                        </Typography>
                    </Box>
                    <Button className={styles.button} variant="contained" style={{ backgroundColor: colors.color1, color: colors.color2, fontSize: '20px', fontWeight: 400, width: '100%', borderRadius: '20px', fontFamily: 'KoHo', }} onClick={handleToggle} >
                        {isRegister ? 'Đăng nhập' : 'Đăng ký'}
                    </Button>
                </Box>
            </Box>

            {/* Right Box */}
            <Box
                className={styles.rightBox}
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
                <Box p={3} className={`${styles.formContainer} ${animate ? styles.slideUp : styles.slideDown}`} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '10px', width: '50%', height: '410px', position: 'relative' }}>
                    {!isForgotPassword && !isResetPassword && (
                        <>
                            {/* Login or Register Form */}
                            <Typography className={styles.formTitle} variant="h4" style={{ color: colors.color2, marginBottom: '30px', fontFamily: 'KoHo', }}>
                                {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                            </Typography>
                            <Box sx={{
                                position: 'relative', width: '100%'
                            }}>
                                <input
                                    type="text"
                                    placeholder={"Tên username hoặc email"}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        fontFamily: 'KoHo',
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <PersonIcon />
                                </Icon>
                                {errors.username && <span className={styles.errorText}>{errors.username}</span>}
                            </Box>

                            <Box sx={{
                                position: 'relative', marginTop: '30px', width: '100%'
                            }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        fontFamily: 'KoHo',
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <LockIcon />
                                </Icon>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                            </Box>

                            {isRegister && (
                                <Box sx={{
                                    position: 'relative', marginTop: '30px', width: '100%'
                                }}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        placeholder="Xác nhận mật khẩu"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={styles.customInput}
                                        style={{
                                            fontFamily: 'KoHo',
                                            backgroundColor: colors.color2,
                                            opacity: 0.3,
                                            color: colors.color1,
                                            borderRadius: '20px',
                                            border: 'none',
                                            width: '80%',
                                            height: '33px',
                                            margin: 'normal',
                                            padding: '10px 50px',
                                            pl: '40px',
                                            fontSize: '20px',
                                            outline: 'none',
                                        }}
                                    />
                                    <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                        <LockIcon />
                                    </Icon>
                                    <IconButton
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
                                </Box>
                            )}
                            <RouterLink to={routes.homePage} style={{ textDecoration: 'none', color: 'black' }}>
                                <Button
                                    variant="contained"
                                    className={styles.button}
                                    style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '100%', borderRadius: '20px', fontFamily: 'KoHo', }}
                                    sx={{ marginTop: '60px' }}
                                    onClick={handleSubmit}
                                >
                                    {isRegister ? 'Đăng ký' : 'Đăng nhập'}
                                </Button>
                            </RouterLink>
                            {!isRegister && (
                                <Box display="flex" justifyContent='space-between' mt={3}>
                                    <Button style={{ color: colors.color2 }} onClick={handleForgotPassword}>Quên mật khẩu?</Button>
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
                        </>
                    )}

                    {isForgotPassword && (
                        <>
                            {/* Forgot Password Form */}
                            <Typography className={styles.formTitle} variant="h4" style={{ color: colors.color2, marginBottom: '30px', fontFamily: 'KoHo', }}>
                                Quên mật khẩu
                            </Typography>
                            <Box sx={{
                                position: 'relative', marginTop: '50px', width: '100%'
                            }}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <EmailIcon />
                                </Icon>
                                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                            </Box>

                            <Box sx={{
                                position: 'relative', marginTop: '50px', width: '100%'
                            }}>
                                <input
                                    type="text"
                                    placeholder="Mã xác minh"
                                    value={verificationCode}
                                    onChange={(e) => setVerificationCode(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <PasswordIcon />
                                </Icon>
                                <IconButton
                                    onClick={handleSendCode}
                                    disabled={countdown > 0}
                                    sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}
                                >
                                    {countdown > 0 ? `${countdown}s` : 'Gửi'}
                                </IconButton>
                                {errors.verificationCode && <span className={styles.errorText}>{errors.verificationCode}</span>}
                            </Box>

                            {successMessage && (
                                <Typography variant="body2" className={styles.successMessage}>
                                    {successMessage}
                                </Typography>
                            )}

                            <Box display="flex" justifyContent="space-between" mt={10}>
                                <Button
                                    variant="contained"
                                    className={styles.button}
                                    style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '45%', borderRadius: '20px' }}
                                    onClick={handleCancelForgotPassword}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.button}
                                    style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '45%', borderRadius: '20px' }}
                                    onClick={handleSubmit}
                                >
                                    Xác minh
                                </Button>
                            </Box>
                        </>
                    )}

                    {isResetPassword && (
                        <>
                            {/* Reset Password Form */}
                            <Typography className={styles.formTitle} variant="h4" style={{ color: colors.color2, marginBottom: '50px' }}>
                                Đặt lại mật khẩu
                            </Typography>
                            <Box sx={{
                                position: 'relative', marginTop: '50px', width: '100%'
                            }}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <LockIcon />
                                </Icon>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                            </Box>
                            <Box sx={{
                                position: 'relative', marginTop: '50px', width: '100%'
                            }}>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Xác nhận mật khẩu"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={styles.customInput}
                                    style={{
                                        backgroundColor: colors.color2,
                                        opacity: 0.3,
                                        color: colors.color1,
                                        borderRadius: '20px',
                                        border: 'none',
                                        width: '80%',
                                        height: '33px',
                                        margin: 'normal',
                                        padding: '10px 50px',
                                        pl: '40px',
                                        fontSize: '20px',
                                        outline: 'none',
                                    }}
                                />
                                <Icon sx={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}>
                                    <LockIcon />
                                </Icon>
                                <IconButton
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: colors.color1 }}
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                                {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
                            </Box>
                            {updateSuccessMessage && (
                                <Typography variant="body2" className={styles.successMessage}>
                                    {updateSuccessMessage}
                                </Typography>
                            )}
                            <Box display="flex" justifyContent="space-between" mt={10}>
                                <Button
                                    variant="contained"
                                    className={styles.button}
                                    style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '45%', borderRadius: '20px' }}
                                    onClick={handleCancelResetPassword}
                                >
                                    Hủy
                                </Button>
                                <Button
                                    variant="contained"
                                    className={styles.button}
                                    style={{ backgroundColor: colors.color2, color: colors.color1, fontSize: '20px', fontWeight: 400, width: '45%', borderRadius: '20px' }}
                                    onClick={handleSubmit}
                                >
                                    Cập nhật
                                </Button>
                            </Box>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Login;