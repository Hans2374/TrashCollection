import React from "react";
import { Box, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Header1 } from "../../components/Header1";
import { useState } from "react";
import styles from "../../components/Admin.module.css";
import { AdminHeader } from "../../components/AdminHeader";
import AdminProductTable from "../../components/Table/AdminProductTable";
import AdminProductFilterBar from "../../components/AdminProductFilterBar";
import TotalOrderSection from "../../components/TotalOrderBox";

const AdminStatisticPage = () => {
  const [activeButton, setActiveButton] = useState("Sản phẩm");
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

      <Box sx={{bgcolor:"#F8F3E7", height:"100px"}}>
<TotalOrderSection />
      </Box>
       
      </>
    </div>
  );
};

export default AdminStatisticPage;