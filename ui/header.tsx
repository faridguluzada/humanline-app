import { Theme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";

import { MessageIcon } from "@/public/assets/icons";

function Header() {
  return (
    <AppBar
      sx={{
        width: `calc(100% - 280px)`,
        background: (theme: Theme) => theme.palette.common.white,
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "flex-end", gap: "24px" }}>
        <MessageIcon />
        <Avatar src="/avatar.png" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   width: `calc(100% - 280px)`,
//   background: theme.palette.common.white,
//   borderBottom: `1px solid ${theme.palette.grey[300]}`,
// }));

// const StyledToolbar = styled(Toolbar)`
//   justify-content: flex-end;
//   gap: 2.4rem;
// `;
