import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Status from "@/ui/status";

import { GlobalIcon, MailIcon, PhoneIcon } from "@/public/assets/icons";

function EmployeeOverview() {
  return (
    <Stack
      direction="column"
      rowGap={3}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack direction="column" gap={2} alignItems="center">
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/0e5d/8279/8e2becda16e2f3abc85e162b63a8d214?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O2sKyT~pl0NTdGtj6vUrhsOtdBizXokKiNXfQJL2D6qccpge999GZ3G4NkGP8TeiQVrpp9pbSmigQIzCGKULNw7N1nOj6VnMlBWuH8NvoAN9aT-AJfidtByQFUskfqpHP4xSTythtuaoPBUl3CbEjhrywU1fXXS18tB3gEGIYVORMPrDAgM8iHsofzlBgI5mlFMj4QZDS8N7xOsMgJ72-oHWyICb4~opyYPdCPOHpY64NEhgYqlL6X8HrA6ZVSaF5QkyEEwuiuYJXhyF1BqWqzYH-VCQ02GeLBNiqc4BAa0rXpKCWkzJ3k9O1SplylAs4UhyXsf2gAEVCHSVDG328A__"
          sx={{ width: 100, height: 100 }}
        />
        <Typography variant="h5" component="h2">
          Pristia Candra
        </Typography>

        <Typography variant="subtitle1" color="textSecondary">
          3D Designer
        </Typography>
        <Status status="ACTIVE" />
      </Stack>
      <Stack direction="column" gap={2}>
        <Stack direction="row" spacing={1}>
          <MailIcon />
          <Typography variant="subtitle2">lincoln@gmail.com</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <PhoneIcon />
          <Typography variant="subtitle2">089318298493</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <GlobalIcon />
          <Typography variant="subtitle2">GMT +07:00</Typography>
        </Stack>
      </Stack>
      <Stack direction="column" gap={2}>
        <Stack direction="column" gap={1}>
          <Typography variant="body2" color="textSecondary">
            Departement
          </Typography>
          <Typography variant="subtitle2">Designer</Typography>
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body2" color="textSecondary">
            Office
          </Typography>
          <Typography variant="subtitle2">Unpixel Studio</Typography>
        </Stack>
        <Stack direction="column" gap={1}>
          <Typography variant="body2" color="textSecondary">
            Line Manager
          </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            <Avatar src="/avatar.png" />
            <Typography variant="subtitle2">Skylar Calzoni</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default EmployeeOverview;
