import React from 'react';
import { Box, Typography } from '@mui/material';

const TotalOrderBox = ({ title, value, percentage, isIncreasing }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2F4F4F',
        color: '#fff',
        padding: 4,
        borderRadius: 2,
        height: '100%',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {value}
      </Typography>
      <Typography variant="body1" color={isIncreasing ? 'success.main' : 'error.main'}>
        {isIncreasing ? `+${percentage}%` : `${percentage}%`}
      </Typography>
    </Box>
  );
};

export default function TotalOrderSection() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 4,
      }}
    >
      <TotalOrderBox title="TỔNG ĐƠN" value="6493" percentage="6.7%" isIncreasing />
      <TotalOrderBox title="TỔNG THU" value="6.340.000d" percentage="5%" isIncreasing />
      <TotalOrderBox title="KHỐI LƯỢNG" value="65kg" percentage="12%" isIncreasing={false} />
    </Box>
  );
}