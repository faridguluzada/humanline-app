"use client";

import { useFormStatus } from "react-dom";

import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useSidebar } from "@/context/SidebarContext";
import { ISidebar } from "@/types";

function SidebarForm({ heading, anchor, action, children, ref }: ISidebar) {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <Drawer
      anchor="right"
      open={isOpen[anchor]}
      onClose={toggleSidebar(anchor, false)}
      sx={{
        width: "396px",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "396px",
          padding: "36px",
        },
      }}
    >
      <Typography variant="h4">{heading}</Typography>

      <form ref={ref} action={action}>
        <Stack marginTop={4} spacing={4}>
          {/* Content of the Sidebar */}

          {children}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: "20px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Button
            onClick={toggleSidebar(anchor, false)}
            variant="outlined"
            color="greyScale"
            sx={{ flex: 1 }}
            type="button"
          >
            Cancel
          </Button>

          <CreateButton />
        </Stack>
      </form>
    </Drawer>
  );
}

function CreateButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      color="greyScale"
      variant="contained"
      sx={{ flex: 1 }}
      disabled={pending}
    >
      {pending ? "Creating..." : "Create"}
    </Button>
  );
}

export default SidebarForm;
