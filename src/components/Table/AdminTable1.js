import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TablePagination, IconButton
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from './AdminTable1.module.css';

const data = [
  { id: 1, name: 'John Doe', phone: '1234567890', orders: 5, status: 'Active', address: '123 Street' },
  { id: 2, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 3, name: 'Iron Mike', phone: '0987654321', orders: 3, status: 'Active', address: '21 Jump Street' },
  { id: 4, name: 'Will Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 5, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 6, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 7, name: 'John Doe', phone: '1234567890', orders: 5, status: 'Active', address: '123 Street' },
  { id: 8, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 9, name: 'Iron Mike', phone: '0987654321', orders: 3, status: 'Active', address: '21 Jump Street' },
  { id: 10, name: 'Will Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 11, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  { id: 12, name: 'Jane Smith', phone: '0987654321', orders: 3, status: 'Inactive', address: '456 Avenue' },
  // Add more rows as needed
];

export default function AdminTable1() {
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
            <TableCell className={styles.tablecell}>Số điện thoại</TableCell>
            <TableCell className={styles.tablecell}>Tổng đơn hàng</TableCell>
            <TableCell className={styles.tablecell}>Trạng thái</TableCell>
            <TableCell className={styles.tablecell}>Địa chỉ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={row.id}>
                <TableCell >{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.orders}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.address}</TableCell>
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
