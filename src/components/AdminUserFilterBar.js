import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState } from "react";

export default function AdminUserFilterBar() {
  const [status, setStatus] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [material, setMaterial] = React.useState("");
  const [category, setCategory] = React.useState("");

  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      sx={{ padding: "8px", margin: "20px 20px 0 20px" }}
    >
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Tìm kiếm"
        size="small"
        sx={{ backgroundColor: "white", borderRadius: 2, minWidth: 400 }}
      />
      {/* Sort Dropdown */}
      <FormControl
        size="small"
        sx={{ minWidth: 100, margin: "5px", borderRadius: 2 }}
      >
        <InputLabel>A - Z</InputLabel>
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="A - Z"
        >
          <MenuItem value="asc">A - Z</MenuItem>
          <MenuItem value="desc">Z - A</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        size="small"
        sx={{ minWidth: 130, margin: "5px", borderRadius: 2 }}
      >
        <InputLabel>Mua nhiều</InputLabel>
        <Select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          label="Mua nhiều"
        >
        </Select>
      </FormControl>

      {/* Category Dropdown */}
      <FormControl
        size="small"
        sx={{ minWidth: 140, margin: "5px", borderRadius: 2 }}
      >
        <InputLabel>Trạng thái</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Trạng thái"
        >
          <MenuItem value="type1">Hoạt động</MenuItem>
          <MenuItem value="type2">Đã chặn</MenuItem>
        </Select>
      </FormControl>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            bgcolor: "#2F4F4F",
            fontFamily: "KoHo",
            fontSize: "25px",
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Thêm Hàng Mới
        </DialogTitle>
        <DialogContent sx={{m:"20px 0 0 0"}}>
          <TextField
            autoFocus
            margin="dense"
            label="Tên"
            type="text"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Đơn giá"
            type="number"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Tồn kho"
            type="number"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Chất liệu"
            type="text"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Phân loại"
            type="text"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Hình ảnh"
            type="file"
            fullWidth
            variant="standard"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleImageChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              border: "2px solid #2F4F4F",
              padding: "5px 30px 5px 30px",
              fontFamily: "KoHo",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 10px 10px 10px",
              borderRadius: "5px",
              color: "#2F4F4F",
            }}
          >
            HỦY
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              border: "1px solid black",
              padding: "5px 30px 5px 30px",
              fontFamily: "KoHo",
              fontSize: "14px",
              fontWeight: "bold",
              margin: "0 10px 10px 10px",
              borderRadius: "5px",
              backgroundColor: "#2F4F4F",
              color: "#fff",
            }}
          >
            THÊM
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
