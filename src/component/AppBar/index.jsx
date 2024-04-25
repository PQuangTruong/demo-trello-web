import {
  Badge,
  Box,
  Button,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import SelectMode from "~/component/SelectMode";
import AppsIcon from "@mui/icons-material/Apps";
import { ReactComponent as iconHeader } from "~/assets/icon.svg";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Start from "./Menus/Start";
import Templates from "./Menus/Templates";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tooltip from "@mui/material/Tooltip";
import HelpIcon from "@mui/icons-material/Help";
import Profile from "./Menus/Profile";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.size.navBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: 'auto'
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            fontSize="small"
            component={iconHeader}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              color: "primary.main",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{display: {xs:'none', md:'flex'} , gap:1}}>
          <Workspaces />
          <Recent />
          <Start />
          <Templates />
          <Button variant="outlined" endIcon={<LibraryAddIcon/>}>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Tìm kiếm ..."
          type="Tìm kiếm"
          size="small"
          sx={{minWidth:'120px'}}
        />
        <SelectMode />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsIcon
              sx={{ cursor: "pointer", color: "primary.main" }}
            />
          </Badge>
        </Tooltip>

        <Tooltip title="Help ?">
          <HelpIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;

