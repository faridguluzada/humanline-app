import { EmployeeStatus } from "@prisma/client";

import Typography from "@mui/material/Typography";
import { amber, green, purple, red } from "@mui/material/colors";

function Status({ status }: { status: EmployeeStatus }) {
  const statusToTagName = {
    "ACTIVE": green,
    "PROBATION": purple,
    "ON_BOARDING": amber,
    "ON_LEAVE": red,
  };

  return (
    <Typography
      variant="body2"
      sx={{
        background: statusToTagName[status][50],
        width: "114px",
        padding: "4px 16px",
        color: statusToTagName[status][600],
        fontWeight: 700,
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "12px",
      }}
    >
      {status.replace("_", " ")}
    </Typography>
  );
}

export default Status;
