import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { id: 0, value: 23, label: "Thủy tinh" },
  { id: 1, value: 30, label: "Nhựa" },
  { id: 2, value: 20, label: "Điện tử" },
  { id: 3, value: 25, label: "Giấy" },
];

const COLORS = ["#FBD178", "#F06562", "#66BB6A", "#72B0E0"];

const BasicPie = () => {
  const handleClick = () => { };

  return (
    <Box sx={{ width: "100%", height: "500px", m: "20px 0 0 0" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            paddingAngle={-10}
            dataKey="value"
            nameKey="label"
            onClick={handleClick}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default BasicPie;
