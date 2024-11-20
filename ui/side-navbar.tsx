"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

import { EmployeeIcon, LayoutGridIcon } from "@/public/assets/icons";
import { menuItems } from "@/constants";
import { useState } from "react";

function SideNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Drawer
      sx={{
        width: "280px",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "280px",
          padding: "24px 32px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ cursor: "pointer", textAlign: "center" }}>
        <Image src="/logo.svg" width={157} height={24} alt="Humanline Logo" />
      </Box>

      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{
          margin: "24px 0",
        }}
        endIcon={<LayoutGridIcon />}
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </Button>

      <List>
        {menuItems.map((menu) => {
          const Icon = menu.icon;

          return (
            <ListItemButton
              sx={{
                borderRadius: "10px",
                backgroundColor: (theme) =>
                  `${pathname === menu.path ? theme.palette.grey[200] : ""}`,
              }}
              key={menu.text}
              onClick={() => router.push(menu.path)}
            >
              <ListItemIcon>
                <Icon isActive={pathname === menu.path} />
              </ListItemIcon>
              <ListItemText
                sx={{
                  fontSize: "14px",
                  color: (theme) => theme.palette.text.primary,
                  fontWeight: (theme) => theme.typography.fontWeightBold,
                }}
                disableTypography={true}
                primary={menu.text}
              />
            </ListItemButton>
          );
        })}
      </List>

      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{ marginTop: "auto" }}
      />
    </Drawer>
  );
}

export default SideNavbar;
