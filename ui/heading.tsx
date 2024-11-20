import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

function Heading({ title, subheader }: { title: string; subheader?: string }) {
  return (
    <Stack direction="column" spacing={1}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
      {subheader && (
        <Typography variant="subtitle1" color="textSecondary">
          {subheader}
        </Typography>
      )}
    </Stack>
  );
}

export default Heading;
