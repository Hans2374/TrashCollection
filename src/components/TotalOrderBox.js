import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import colors from "../colors";

const TotalOrderBox = ({ title, value, percentage, isIncreasing }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        backgroundColor: colors.color2,
        color: "#fff",
        padding: 3,
        borderRadius: 2,
        height: "100%",
        width: "440px"
      }}
    >
      <Typography variant="h9">
        {title}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "KoHo", marginTop: "20px", letterSpacing: "2px" }}>
          {value}
        </Typography>
        <Box sx={{ position: "absolute", marginLeft: "300px" }}>
          <Typography
            variant="h5"
            color="#fff"
            sx={{ m: "30px 0 0 0px", fontFamily: "KoHo", fontWeight: "bold" }}
          >
            {isIncreasing ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUpIcon sx={{ color: 'green', marginRight: 1 }} /> {/* Change color as needed */}
                <span>{percentage}%</span>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TrendingDownIcon sx={{ color: 'red', marginRight: 1 }} /> {/* Change color as needed */}
                <span>{percentage}%</span>
              </Box>
            )}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function TotalOrderSection() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 10,
        margin: "0 115px 0 115px",
        textAlign: "left",
      }}
    >
      <TotalOrderBox
        title={<span style={{ fontSize: '24px', fontFamily: "KoHo" }}>TỔNG ĐƠN</span>}
        value="6493"
        percentage="6.7"
        isIncreasing
      />
      <TotalOrderBox
        title={<span style={{ fontSize: '24px', fontFamily: "KoHo" }}>TỔNG THU</span>}
        value="6.340.000đ"
        percentage="5"
        isIncreasing
      />
      <TotalOrderBox
        title={<span style={{ fontSize: '24px', fontFamily: "KoHo" }}>KHỐI LƯỢNG</span>}
        value="65kg"
        percentage="12"
        isIncreasing={false}
      />
    </Box>
  );
}
