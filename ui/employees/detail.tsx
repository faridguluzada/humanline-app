"use client";

import { useState } from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import EmployeeOverview from "./overview";
import Heading from "@/ui/heading";
import TabPanel from "@/ui/tab-panel";

import { LeftIcon, EditIcon2 } from "@/public/assets/icons";
import { grey } from "@mui/material/colors";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function EmployeeDetail() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column" gap={6}>
      <Grid>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <Button sx={{ padding: "5px" }}>
            <LeftIcon />
          </Button>
          <Heading title="Detail Employee" />
        </Stack>
      </Grid>

      <Grid container direction="row" gap={5}>
        {/* FIRST */}
        <Grid
          xs={3}
          sx={{
            background: "#fff",
            borderRadius: "16px",
            padding: "24px",
            alignSelf: "start",
          }}
        >
          <EmployeeOverview />
        </Grid>

        {/* SECOND */}
        <Grid
          xs={8}
          sx={{
            background: "#fff",
            borderRadius: "16px",
            flexGrow: 1,
            padding: "24px",
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label="General"
                {...a11yProps(0)}
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
              <Tab
                label="Job"
                {...a11yProps(1)}
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
              <Tab
                label="Payroll"
                {...a11yProps(2)}
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
              <Tab
                label="Documents"
                {...a11yProps(3)}
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
              <Tab
                label="Setting"
                {...a11yProps(4)}
                sx={{ textTransform: "capitalize", fontWeight: 700 }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container direction="column" gap={3}>
              <Grid
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: `1px solid ${grey[200]} `,
                }}
              >
                <Stack
                  rowGap={2}
                  divider={<Divider orientation="horizontal" flexItem />}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems={"center"}
                  >
                    <Typography variant="h6" component="h4">
                      Personal Info
                    </Typography>
                    <Button sx={{ p: "10px" }}>
                      <EditIcon2 />
                    </Button>
                  </Stack>
                  <Stack>
                    <List>
                      <ListItem>
                        <ListItemText primary="Full Name" />
                        Salam
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Date of Birth" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Nationality" />
                      </ListItem>
                    </List>
                  </Stack>
                </Stack>
              </Grid>
              <Grid>ELEYKUm</Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Three
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EmployeeDetail;
