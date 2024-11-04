import React from "react";
import { Box, Button } from "@mui/material";
import { Header1 } from "../../components/Header1";
import { useState } from "react";
import styles from "../../components/Admin.module.css";
import { AdminHeader } from "../../components/AdminHeader";
import AdminProductTable from "../../components/Table/AdminProductTable";
import AdminProductFilterBar from "../../components/AdminProductFilterBar";

const AdminProductPage = () => {
  const [activeButton, setActiveButton] = useState("Sản phẩm");
  return (
    <div>
      <>
        <Header1 />
        <AdminHeader />

        {/* Button Product/ Material */}
        <Box display="flex" gap={2} sx={{ padding: "40px 20px 20px 20px" }}>
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

        <AdminProductFilterBar />

        <Box sx={{ padding: "20px 0 20px 0", fontFamily: "KoHo" }}>
          <AdminProductTable />
        </Box>
      </>
    </div>
  );
};

export default AdminProductPage;
