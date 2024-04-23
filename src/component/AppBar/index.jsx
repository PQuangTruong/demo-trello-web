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

function AppBar() {
  return (
    <Box px={2} sx={{ width: "100%",height: (theme) => theme.size.navBarHeight,display: "flex", alignItems: "center",justifyContent: "space-between"}} >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon component={iconHeader} inheritViewBox sx={{ color: "primary.main" }} />
          <Typography variant="span" sx={{ color: "primary.main", fontSize: "1.2rem", fontWeight: "bold", }} >
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Start />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          size="small"
        />
        <SelectMode />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Help ?">
          <HelpIcon sx={{ cursor: "pointer" }} />
        </Tooltip>

        <Profile/>
      </Box>
    </Box>
  );
}

export default AppBar;
