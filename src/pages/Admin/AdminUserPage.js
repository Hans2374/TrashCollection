import React from "react";
import { Box, Button } from "@mui/material";
import { Header1 } from "../../components/Header1";
import { useState } from "react";
import styles from "../../components/Admin.module.css";
import FilterBar from "../../components/AdminProductFilterBar";
import { AdminHeader } from "../../components/AdminHeader";
import AdminUserTable from "../../components/Table/AdminUserTable";
import AdminUserFilterBar from "../../components/AdminUserFilterBar";

const AdminUserPage = () => {
  const [activeButton, setActiveButton] = useState("Người mua");
  return (
    <div>
      <>
        <Header1 />
        <AdminHeader />

        {/* Button Product/ Material */}
        <Box display="flex" gap={2} sx={{ padding: "40px 20px 20px 20px" }}>
          <Button
            onClick={() => setActiveButton("Người mua")}
            className={
              activeButton === "Người mua"
                ? styles.activeButton
                : styles.inactiveButton
            }
          >
            Người mua
          </Button>
          <Button
            onClick={() => setActiveButton("Vựa ve chai")}
            className={
              activeButton === "Vựa ve chai"
                ? styles.activeButton
                : styles.inactiveButton
            }
          >
            Vựa ve chai
          </Button>
        </Box>

        <AdminUserFilterBar />

        <Box sx={{ padding: "20px 0 20px 0", fontFamily: "KoHo" }}>
          <AdminUserTable />
        </Box>
      </>
    </div>
  );
};

export default AdminUserPage;
