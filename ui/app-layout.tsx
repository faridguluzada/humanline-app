"use client";

import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";

import Header from "./header";
import SideNavbar from "./side-navbar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideNavbar />

      <Box
        sx={{
          width: "100%",
          // height: "100vh",
          background: grey[50],
          padding: "32px",
        }}
      >
        <Box
          sx={
            (theme: Theme) => theme.mixins.toolbar
            // { marginTop: "70px" }
          }
        ></Box>
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
