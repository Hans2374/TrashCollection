import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyChart() {
  return (
    <BarChart
      series={[
        {
          data: [55, 75, 37, 55, 63, 80, 55, 35, 70, 55, 78, 38],
          color: '#B2E4D0',
        },
      ]}
      height={500}
      xAxis={[{
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        scaleType: 'band',
        categoryGapRatio: 0.5,
        barGapRatio: 0.1,
      }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      sx={{ margin: "40px" }}
    />
  );
}