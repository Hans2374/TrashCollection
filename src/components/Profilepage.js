import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  InputBase,
  InputAdornment,
} from "@mui/material";
import {
  Email,
  LocationOn,
  Phone,
  Settings,
  Lock,
  Edit,
  Search,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Header1 } from "./Header1";
import { Header2 } from "./Header2";
import { ScrollToTop } from "./ScrollToTop";
import colors from "../colors";
import { useSelector } from "react-redux";
import ProfileList from "./Table/ProfileListTable";
import { Footer } from "./Footer";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  TextField,
} from "@mui/material";

const Profilepage = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  const [visibleRows, setVisibleRows] = useState(2);
  const articlesPerRow = 4;

  const scrollContainerRef = useRef(null);

  const [selected, setSelected] = useState("personal");

  const [openDialog, setOpenDialog] = useState(false);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const data = {
    personal: {
      phone: "0123455678",
      address: "HCM, Q.Bình Thạnh, P.13, Đ.ABC, số 67/12",
      email: "Example@gmail.com",
    },
    owner: {
      phone: "0000000000",
      address: "HN, Q.Hoàn Kiếm, P.4, Đ.ABC, số 67/12",
      email: "Example@gmail.com",
    },
  };

  const currentData = data[selected];

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleWardChange = (event) => {
    setWard(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({
          top: 2,
          behavior: "smooth",
        });
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  const [isPasswordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordDialogOpen = () => {
    setPasswordDialogOpen(true);
  };

  const handlePasswordDialogClose = () => {
    setPasswordDialogOpen(false);
    setPasswordError("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("Mật khẩu mới phải có ít nhất 8 ký tự.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError(
        "Mật khẩu mới và xác nhận mật khẩu không khớp. Vui lòng thử lại."
      );
      return;
    }

    console.log("Password changed successfully");
    handlePasswordDialogClose();
  };

  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box
      sx={{
        backgroundColor: `${colors.color1}`,
      }}
    >
      <ScrollToTop />
      <Header1 isLogin={isLogin} />
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/newMain.png)`,
          height: "421px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100%",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: { xs: "278px", sm: "360px" },
            height: { xs: "169px", sm: "190px" },
            backgroundColor: "rgba(252, 249, 243, 0.6)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              padding: "10px 20px 5px 20px",
              fontFamily: "KoHo",
              fontSize: { xs: "24px", sm: "36px" },
              fontWeight: 700,
              lineHeight: { xs: "30px", sm: "46.8px" },
              color: `${colors.color2}`,
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            HỒ SƠ
          </Typography>
          <Typography
            sx={{
              padding: "10px 20px 5px 20px",
              fontFamily: "KoHo",
              fontSize: { xs: "14px", sm: "16px", md: "17px" },
              fontWeight: 400,
              color: `${colors.color2}`,
              textAlign: "center",
            }}
          >
            Dành cho cá nhân hoặc chủ vựa, xem lại lịch sử giao dịch trong thời
            gian vừa qua.
          </Typography>
        </Box>
      </Box>
      <Header2 />

      <Box
        marginBottom="30px"
        marginTop="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
        gap={4}
      >
        <Box textAlign="center">
          <Avatar sx={{ width: 90, height: 90, bgcolor: "#214738" }} />
          <Typography variant="h6" fontWeight="bold" mt={1}>
            USER001
          </Typography>
          <Typography variant="body2">11.000 🌱</Typography>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Card
            sx={{
              backgroundColor: `${colors.color1}`,
              maxWidth: 487,
              borderRadius: 2,
              border: "3px solid #214738",
              height: "197px",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={1}
                position="relative"
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    cursor: "pointer",
                    color: selected === "personal" ? "#214738" : "gray",
                    paddingBottom: selected === "personal" ? "4px" : "0",
                    borderBottom:
                      selected === "personal" ? "2px solid #214738" : "none",
                    marginRight: "16px",
                    fontFamily: "KoHo",
                    fontWeight: "700",
                    fontSize: "24px",
                  }}
                  onClick={() => setSelected("personal")}
                >
                  Cá nhân
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    cursor: "pointer",
                    color: selected === "owner" ? "#214738" : "gray",
                    paddingBottom: selected === "owner" ? "4px" : "0",
                    borderBottom:
                      selected === "owner" ? "2px solid #214738" : "none",
                  }}
                  onClick={() => setSelected("owner")}
                >
                  Chủ vựa
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "darkgreen" }} />

              {/* Nội dung phụ thuộc vào tab */}
              {selected === "personal" ? (
                <Box mt={2}>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Phone color="action" />
                    <Typography
                      sx={{
                        fontFamily: "KoHo",
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "26px",
                      }}
                    >
                      {currentData.phone}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <LocationOn color="action" />
                    <Typography
                      sx={{
                        fontFamily: "KoHo",
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "26px",
                      }}
                    >
                      {currentData.address}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Email color="action" />
                    <Typography
                      sx={{
                        fontFamily: "KoHo",
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "26px",
                        textDecoration: "Underline",
                      }}
                    >
                      {currentData.email}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Box mt={2} textAlign="center">
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="gray"
                    sx={{
                      fontFamily: "KoHo",
                      fontSize: "24px",
                      marginBottom: "18px",
                      marginTop: "10px",
                      lineHeight: "31.2px",
                      textAlign: "center",
                      color: "#214738",
                      fontWeight: "normal",
                    }}
                  >
                    Bạn chưa phải là đối tác của chúng tôi
                  </Typography>
                  <Typography
                    component="span"
                    color="#214738"
                    sx={{
                      fontFamily: "KoHo",
                      fontSize: "26px",
                      cursor: "pointer",
                      fontWeight: "600",
                      lineHeight: "34px",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        left: "50%",
                        right: "50%",
                        position: "absolute",
                        bottom: 0,
                        height: "2px",
                        backgroundColor: colors.color2,
                        transition: "left 0.3s, right 0.3s",
                      },
                      "&:hover": {
                        color: colors.color2,
                        "&::after": {
                          left: 0,
                          right: 0,
                        },
                      },
                    }}
                    onClick={handleDialogOpen}
                  >
                    Đăng ký ngay
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Edit Profile Icon */}
          <Box display="flex" gap={2} mt={1}>
            <IconButton>
              <Settings sx={{ color: "darkgreen" }} />
            </IconButton>
            <IconButton onClick={handlePasswordDialogOpen}>
              <Lock sx={{ color: "darkgreen" }} />
            </IconButton>
            <IconButton onClick={handleDialogOpen}>
              <Edit sx={{ color: "darkgreen" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Dialog for Edit Profile */}
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        maxWidth
        fullWidth
        PaperProps={{
          sx: {
            border: "10px solid #214738",
            borderRadius: "15px",
            backgroundColor: `${colors.color1}`,
            width: "915px",
            height: "418px",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            backgroundColor: `${colors.color2}`,
            color: "white",
            border: "none",
          }}
        >
          Chỉnh sửa thông tin
        </DialogTitle>
        <DialogContent>
          <Box>
            <Grid
              container
              spacing={2}
              sx={{ marginTop: "5px", justifyContent: "center" }}
            >
              {/* First Row */}
              <Grid item xs={6}>
                {/* City Dropdown */}
                <FormControl
                  fullWidth
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <InputLabel>Chọn Thành Phố</InputLabel>
                  <Select
                    value="HCM"
                    sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  >
                    <MenuItem value="HCM">HCM</MenuItem>
                    <MenuItem value="HN">HN</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {/* District Dropdown */}
                <FormControl
                  fullWidth
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <InputLabel>Chọn Quận</InputLabel>
                  <Select
                    value="Bình Thạnh"
                    sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  >
                    <MenuItem value="Bình Thạnh">Bình Thạnh</MenuItem>
                    <MenuItem value="Hoàn Kiếm">Hoàn Kiếm</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Second Row */}
              <Grid item xs={6}>
                {/* Ward Dropdown */}
                <FormControl
                  fullWidth
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <InputLabel>Chọn Phường</InputLabel>
                  <Select
                    value="P.13"
                    sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  >
                    <MenuItem value="P.13">P.13</MenuItem>
                    <MenuItem value="P.4">P.4</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                {/* First Text Field */}
                <TextField
                  sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  label="Số điện thoại"
                  fullWidth
                  value="0123456789"
                />
              </Grid>

              {/* Third Row */}
              <Grid item xs={6}>
                {/* Second Text Field */}
                <TextField
                  sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  label="Địa chỉ"
                  fullWidth
                  value="123 ABC Street"
                />
              </Grid>
              <Grid item xs={6}>
                {/* Third Text Field */}
                <TextField
                  sx={{ marginTop: "5px", width: "100%", height: "49px" }}
                  label="Ghi chú"
                  fullWidth
                  value="Some notes"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleDialogClose}
            sx={{
              border: "1px solid #214738",
              fontFamily: "KoHo",
              fontSize: "16px",
              color: "#214738",
              transition: "all 0.3s ease-in-out", // Tạo hiệu ứng mượt mà
              "&:hover": {
                backgroundColor: `${colors.color2}`, // Màu nền khi hover
                color: "#ffffff", // Màu chữ khi hover
                borderColor: "#214738", // Màu viền khi hover
              },
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handleDialogClose}
            sx={{
              border: "1px solid #214738",
              fontFamily: "KoHo",
              fontSize: "16px",
              color: "#214738",
              transition: "all 0.3s ease-in-out", // Tạo hiệu ứng mượt mà
              "&:hover": {
                backgroundColor: `${colors.color2}`, // Màu nền khi hover
                color: "#ffffff", // Màu chữ khi hover
                borderColor: "#214738", // Màu viền khi hover
              },
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isPasswordDialogOpen}
        onClose={handlePasswordDialogClose}
        maxWidth
        fullWidth
        PaperProps={{
          sx: {
            border: "10px solid #214738",
            borderRadius: "15px",
            backgroundColor: `${colors.color1}`,
            width: "600px",
            height: "400px",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            color: "white",
            backgroundColor: `${colors.color2}`,
            border: "none",
          }}
        >
          Đổi Mật Khẩu
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              marginTop: "20px",
              borderRadius: "15px",
            }}
          >
            {passwordError && (
              <Typography
                color="error"
                textAlign="center"
                sx={{ marginBottom: 2 }}
              >
                {passwordError}
              </Typography>
            )}
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Ô nhập mật khẩu hiện tại */}
              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField
                  label="Mật khẩu hiện tại"
                  type={showCurrentPassword ? "text" : "password"}
                  fullWidth
                  variant="outlined"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  InputLabelProps={{ style: { color: "#214738" } }}
                  InputProps={{
                    style: { color: "#214738" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowCurrentPassword}>
                          {showCurrentPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#214738",
                      },
                      "&:hover fieldset": {
                        borderColor: "#214738",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#214738",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Ô nhập mật khẩu mới */}
              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField
                  label="Mật khẩu mới"
                  type={showNewPassword ? "text" : "password"}
                  fullWidth
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)} // Cập nhật state newPassword
                  InputLabelProps={{ style: { color: "#214738" } }}
                  InputProps={{
                    style: { color: "#214738" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowNewPassword}>
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#214738",
                      },
                      "&:hover fieldset": {
                        borderColor: "#214738",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#214738",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Ô xác nhận mật khẩu mới */}
              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField
                  label="Xác nhận mật khẩu mới"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  value={confirmPassword} // Liên kết state confirmPassword
                  onChange={(e) => setConfirmPassword(e.target.value)} // Cập nhật state confirmPassword
                  InputLabelProps={{ style: { color: "#214738" } }}
                  InputProps={{
                    style: { color: "#214738" },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowConfirmPassword}>
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#214738",
                      },
                      "&:hover fieldset": {
                        borderColor: "#214738",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#214738",
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handlePasswordDialogClose}
            sx={{
              border: "1px solid #214738",
              fontFamily: "KoHo",
              fontSize: "16px",
              color: "#214738",
              transition: "all 0.3s ease-in-out", // Tạo hiệu ứng mượt mà
              "&:hover": {
                backgroundColor: `${colors.color2}`, // Màu nền khi hover
                color: "#ffffff", // Màu chữ khi hover
                borderColor: "#214738", // Màu viền khi hover
              },
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={handlePasswordChange}
            sx={{
              border: "1px solid #214738",
              fontFamily: "KoHo",
              fontSize: "16px",
              color: "#214738",
              transition: "all 0.3s ease-in-out", // Tạo hiệu ứng mượt mà
              "&:hover": {
                backgroundColor: `${colors.color2}`, // Màu nền khi hover
                color: "#ffffff", // Màu chữ khi hover
                borderColor: "#214738", // Màu viền khi hover
              },
            }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
      <ProfileList />
      <Footer />
    </Box>
  );
};

export default Profilepage;
