import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TablePagination, IconButton
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from './AdminTable1.module.css';

const data = [
  { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Giấy', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 2, name: 'Jane Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Nhựa', category: 'Thời trang', info: 'Chi tiết ->' },
  { id: 3, name: 'Iron Mike', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Tổng hợp', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 4, name: 'Will Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Nhựa', category: 'Thời trang', info: 'Chi tiết ->' },
  { id: 5, name: 'LeBrone Jame', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Nhựa', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 6, name: 'Jane Doe', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Nhựa', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 7, name: 'John Byzantine', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Giấy', category: 'Thời trang', info: 'Chi tiết ->' },
  { id: 8, name: 'Jane Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Giấy', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 9, name: 'Iron Mike', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Giấy', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  { id: 10, name: 'Will Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Tổng hợp', category: 'Thời trang', info: 'Chi tiết ->' },
  { id: 11, name: 'Jane Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Tổng hợp', category: 'Thời trang', info: 'Chi tiết ->' },
  { id: 12, name: 'Jane Smith', image: 'https://via.placeholder.com/50x50', price: 199000, stock: 100, material: 'Tổng hợp', category: 'Đã gia dụng', info: 'Chi tiết ->' },
  // Add more rows as needed
];

export default function AdminProductTable() {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={styles.tablehead}>
          <TableRow>
            <TableCell className={styles.tablecell}>STT</TableCell>
            <TableCell className={styles.tablecell}>Tên</TableCell>
            <TableCell className={styles.tablecell}>Hình ảnh</TableCell>
            <TableCell className={styles.tablecell}>Đơn giá</TableCell>
            <TableCell className={styles.tablecell}>Tồn kho</TableCell>
            <TableCell className={styles.tablecell}>Chất liệu</TableCell>
            <TableCell className={styles.tablecell}>Phân loại</TableCell>
            <TableCell className={styles.tablecell}>Chỉnh sửa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={row.id}>
                <TableCell >{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.image}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{row.material}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.info}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
        <IconButton
          onClick={() => handleChangePage(null, page - 1)}
          disabled={page === 0}
        >
          <ArrowBack />
        </IconButton>
        {Array.from({ length: Math.ceil(data.length / rowsPerPage) }, (_, index) => (
          <IconButton
            key={index}
            onClick={() => setPage(index)}
            color={page === index ? 'primary' : 'default'}
          >
            {index + 1}
          </IconButton>
        ))}
        <IconButton
          onClick={() => handleChangePage(null, page + 1)}
          disabled={page >= Math.ceil(data.length / rowsPerPage) - 1}
        >
          <ArrowForward />
        </IconButton>
      </div>
    </TableContainer>
  );
}
