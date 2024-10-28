import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, Box } from '@mui/material';
import { Add } from '@mui/icons-material';

export default function FilterBar() {
  const [status, setStatus] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [sort, setSort] = React.useState('');
  const [material, setMaterial] = React.useState('');
  const [category, setCategory] = React.useState('');

  return (
    <Box display="flex" alignItems="center" gap={1} sx={{ padding: '8px', margin:"20px 20px 0 20px"}}>
      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Tìm kiếm"
        size="small"
        sx={{ backgroundColor: 'white', borderRadius: 2, minWidth:400 }}
      />

      {/* Status Dropdown */}
      <FormControl size="small" sx={{ minWidth: 100, margin:'5px', borderRadius: 2}}>
        <InputLabel>Tồn</InputLabel>
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          label="Tồn"
        >
          <MenuItem value="available">Còn hàng</MenuItem>
          <MenuItem value="outOfStock">Hết hàng</MenuItem>
        </Select>
      </FormControl>

      {/* Price Dropdown */}
      <FormControl size="small" sx={{ minWidth: 100, margin:'5px', borderRadius: 2}}>
        <InputLabel>Giá</InputLabel>
        <Select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label="Giá"
        >
          <MenuItem value="lowToHigh">Thấp đến Cao</MenuItem>
          <MenuItem value="highToLow">Cao đến Thấp</MenuItem>
        </Select>
      </FormControl>

      {/* Sort Dropdown */}
      <FormControl size="small" sx={{ minWidth: 100, margin:'5px', borderRadius: 2}}>
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

      {/* Material Dropdown */}
      <FormControl size="small" sx={{ minWidth: 150, margin:'5px', borderRadius: 2}}>
        <InputLabel>Chất liệu</InputLabel>
        <Select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          label="Chất liệu"
        >
          <MenuItem value="wood">Giấy</MenuItem>
          <MenuItem value="metal">Nhựa</MenuItem>
          <MenuItem value="wood">...</MenuItem>
          <MenuItem value="metal">Tổng hợp</MenuItem>
        </Select>
      </FormControl>

      {/* Category Dropdown */}
      <FormControl size="small" sx={{ minWidth: 200, margin:'5px', borderRadius: 2 }}>
        <InputLabel>Phân loại</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Phân loại"
        >
          <MenuItem value="type1">Đồ gia dụng</MenuItem>
          <MenuItem value="type2">Thời trang</MenuItem>
          <MenuItem value="type1">...</MenuItem>
          <MenuItem value="type2">...</MenuItem>
        </Select>
      </FormControl>

      {/* Add Button */}
      <Button variant="contained" size="small" sx={{ minWidth: 40, padding: '10px', backgroundColor: '#2F4F4F', borderRadius: 50}}>
        <Add />
      </Button>
    </Box>
  );
}
