import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const data = [
  { name: 'Hồ Chí Minh', value: 180 },
  { name: 'Hà Nội', value: 158 },
  { name: 'Bà Rịa - Vũng Tàu', value: 80 },
  { name: 'Cần Thơ', value: 55 },
  { name: 'Đà Nẵng', value: 25 },
];

const chartSetting = {
  width: 1400,
  height: 400,
};

export default function BarChart2() {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <BarChart
    sx={{textAlign:'left'}}
      dataset={data}
      yAxis={[{ scaleType: 'band', dataKey: 'name'}]}
      series={[{ dataKey: 'value', label: 'đơn vị' , color: '#9CCAE0'}]}
      layout="horizontal"
      
      slotProps={{ legend: { hidden: isHidden } }}
      {...chartSetting}
    />
  );
}