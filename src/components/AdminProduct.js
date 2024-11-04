import React from "react";
import { Box, Button } from "@mui/material";
import AdminTable1 from "./Table/AdminTable1";
import { useState } from "react";
import styles from "./Admin.module.css";
import FilterBar from "./AdminProductFilterBar";

const AdminProductPage = () => {
  const [activeButton, setActiveButton] = useState("Sản phẩm");
  return (
    <>
      {/* Button Product/ Material */}
      <Box display="flex" gap={2} sx={{padding:"40px 20px 20px 20px"}}>
        <Button
          onClick={() => setActiveButton("Sản phẩm")}
          className={
            activeButton === "Sản phẩm"
              ? styles.activeButton
              : styles.inactiveButton
          }
        >
          Sản phẩm
        </Button>
        <Button
          onClick={() => setActiveButton("Vật liệu")}
          className={
            activeButton === "Vật liệu"
              ? styles.activeButton
              : styles.inactiveButton
          }
        >
          Vật liệu
        </Button>
      </Box>

      <FilterBar />
          
      <Box sx={{ padding: "20px 0 20px 0", fontFamily: "KoHo" }}>
        <AdminTable1 />
      </Box>
    </>
  );
};

export default AdminProductPage;
