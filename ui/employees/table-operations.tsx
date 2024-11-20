import Grid from "@mui/material/Unstable_Grid2";

import Select from "@/ui/select";
import Search from "./search";

import { getOffices } from "@/services/apiOffice";
import { getJobs } from "@/services/apiJob";
import { statusOptions } from "@/constants";

import { transformToSelectOptions } from "@/lib/utils";

export default async function TableOperations() {
  const [offices, jobs] = await Promise.all([getOffices(), getJobs()]);

  const formattedOffices = transformToSelectOptions(offices);
  const formattedJobs = transformToSelectOptions(jobs);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid xs={6}>
        <Search label="Search Employee" />
      </Grid>
      <Grid xs={2}>
        <Select
          filterField="office"
          label="Office"
          options={formattedOffices}
        />
      </Grid>
      <Grid xs={2}>
        <Select filterField="job" label="Jobs" options={formattedJobs} />
      </Grid>
      <Grid xs={2}>
        <Select filterField="status" label="Status" options={statusOptions} />
      </Grid>
    </Grid>
  );
}
