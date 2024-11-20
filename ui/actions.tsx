import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { EditIcon, EyeIcon, TrashIcon } from "@/public/assets/icons";

function Actions() {
  return (
    <Stack direction="row" spacing={1}>
      <Button sx={{ padding: "10px" }} variant="contained" color="success">
        <EyeIcon />
      </Button>
      <Button sx={{ padding: "10px" }} variant="contained" color="info">
        <EditIcon />
      </Button>
      <Button sx={{ padding: "10px" }} variant="contained" color="error">
        <TrashIcon />
      </Button>
    </Stack>
  );
}

export default Actions;
