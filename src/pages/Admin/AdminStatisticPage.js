import React from "react";
import { Box, Button, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { Header1 } from "../../components/Header1";
import { AdminHeader } from "../../components/AdminHeader";
import TotalOrderSection from "../../components/TotalOrderBox";
import MyChart from "../../components/AdminChart/Chart1";
import BasicPie from "../../components/AdminChart/PieChart";
import BarChart2 from "../../components/AdminChart/Barchart2";

const AdminStatisticPage = () => {
  return (
    <div>
      <>
        <Header1 />
        <AdminHeader />
        <Box sx={{ height:"100px", }}>
    <FormControl
        size="small"
        sx={{ minWidth: 140, margin: "5px", borderRadius: 2 ,color:"#2F4F4F", top:"25px", right: "665px"}}
      >
        <InputLabel>2024</InputLabel>
        <Select
          label="2024"
        >
          <MenuItem value="type1">2023</MenuItem>
          <MenuItem value="type2">2022</MenuItem>
          <MenuItem value="type1">2021</MenuItem>
          <MenuItem value="type2">2020</MenuItem>
          <MenuItem value="type1">2019</MenuItem>
          <MenuItem value="type2">...</MenuItem>
        </Select>
      </FormControl>
      </Box>

      <Box sx={{bgcolor:"#F8F3E7", height:"270px", }}>
        <Typography sx={{fontSize:"25px", padding:"20px", color:"#2F4F4F", textAlign:"left", marginLeft:"95px", fontFamily: "KoHo", fontWeight:"bold" }}>Tổng quan</Typography>
        <TotalOrderSection />
      </Box>

      <Box sx={{bgcolor:"#FCF9F3", height:"600px", }}>
        <Typography sx={{fontSize:"25px", padding:"20px", color:"#2F4F4F", textAlign:"left", marginLeft:"95px",paddingTop:"50px", fontFamily: "KoHo", fontWeight:"bold" }}>Doanh số theo thời gian</Typography>
        <MyChart />
      </Box>
       
      <Box sx={{bgcolor:"#F8F3E7", height:"750px", alignContent:"center", alignItems:"center"}}>
      <Typography sx={{fontSize:"25px", color:"#2F4F4F", textAlign:"left", marginLeft:"115px", fontFamily: "KoHo", fontWeight:"bold" }}>Doanh số theo hàng hóa</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center' }}>
        <BasicPie/>
        </Box>
      </Box>

      <Box sx={{bgcolor:"#FCF9F3", height:"500px"}}>
      <Typography sx={{fontSize:"25px", padding:"20px", color:"#2F4F4F", textAlign:"left", marginLeft:"95px",paddingTop:"50px", fontFamily: "KoHo", fontWeight:"bold" }}>Doanh số theo đơn vị</Typography>
      <Box sx={{display:'flex', marginLeft:"50px"}}>
      <BarChart2/>
      </Box>
      </Box>
      </>
    </div>
  );
};

export default AdminStatisticPage;