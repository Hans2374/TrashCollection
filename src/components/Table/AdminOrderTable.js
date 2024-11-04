import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, TablePagination, IconButton
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from './AdminTable1.module.css';

const data = [
  { id: 1, productid:'DH001' , name: 'John Doe', phone: '1234567890',value:'100.000VND', pay:'100.000VND' , status: 'Hoạt động',info: 'Chi tiết ->'},
  { id: 2, productid: 'DH002',name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 3, productid:'DH003', name: 'Iron Mike', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Hoạt động',info: 'Chi tiết ->'},
  { id: 4, productid:'DH004', name: 'Will Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 5, productid:'DH005', name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 6, productid:'DH006',name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 7, productid:'DH007', name: 'John Doe', phone: '1234567890',value:'100.000VND',pay:'100.000VND' , status: 'Hoạt động',info: 'Chi tiết ->'},
  { id: 8, productid:'DH008', name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->' },
  { id: 9, productid:'DH009', name: 'Iron Mike', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Hoạt động',info: 'Chi tiết ->'},
  { id: 10, productid:'DH010', name: 'Will Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 11, productid:'DH011', name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' ,  status: 'Không hoạt động',info: 'Chi tiết ->'},
  { id: 12, productid:'DH012', name: 'Jane Smith', phone: '0987654321',value:'100.000VND',pay:'100.000VND' , status: 'Không hoạt động',info: 'Chi tiết ->'},
  // Add more rows as needed
];

export default function AdminOrderTable() {
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
            <TableCell className={styles.tablecell}>Mã đơn hàng</TableCell>
            <TableCell className={styles.tablecell}>Người nhận</TableCell>
            <TableCell className={styles.tablecell}>Số điện thoại</TableCell>
            <TableCell className={styles.tablecell}>Giá trị</TableCell>
            <TableCell className={styles.tablecell}>Thanh toán</TableCell>
            <TableCell className={styles.tablecell}>Trạng thái</TableCell>
            <TableCell className={styles.tablecell}>Chỉnh sửa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={row.id}>
                <TableCell >{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell>{row.productid}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.value}</TableCell>
                <TableCell>{row.pay}</TableCell>
                <TableCell>{row.status}</TableCell>
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
