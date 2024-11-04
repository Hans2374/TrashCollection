import React from "react";
import { Box, Button } from "@mui/material";
import { Header1 } from "../../components/Header1";

import { useState } from "react";
import styles from "../../components/Admin.module.css";

import { AdminHeader } from "../../components/AdminHeader";

import AdminOrderFilterBar from "../../components/AdminOrderFilterBar";
import AdminOrderTable from "../../components/Table/AdminOrderTable";

const AdminOrderPage = () => {
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
            Đơn mua
          </Button>
          <Button
            onClick={() => setActiveButton("Vật liệu")}
            className={
              activeButton === "Vật liệu"
                ? styles.activeButton
                : styles.inactiveButton
            }
          >
            Đơn bán
          </Button>
        </Box>

        <AdminOrderFilterBar />

        <Box sx={{ padding: "20px 0 20px 0", fontFamily: "KoHo" }}>
          <AdminOrderTable />
        </Box>
      </>
    </div>
  );
};

export default AdminOrderPage;
