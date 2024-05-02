import {
  Badge,
  Box,
  Button,
  InputAdornment,
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
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

function AppBar() {
  const [searchValue, setSearchValue] = useState('');


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
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#00a8ff" : "#9c88ff",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            fontSize="small"
            component={iconHeader}
            inheritViewBox
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Start />
          <Templates />
          <Button
            variant="outlined"
            endIcon={<LibraryAddIcon />}
            sx={{ color: "white", border: "none" }}
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Tìm kiếm ..."
          type="Tìm kiếm"
          size="small"
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize= "small"
                sx={{ cursor: 'pointer', color: searchValue ? 'white' : 'transparent' } }
                onClick = {() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldSet": { borderColor: "white" },
              "&:hover fieldSet": { borderColor: "white" },
              "&.Mui-focused fieldSet": { borderColor: "white" },
            },
          }}
        />
        <SelectMode />

        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsIcon sx={{ cursor: "pointer", color: "white" }} />
          </Badge>
        </Tooltip>

        <Tooltip title="Help ?">
          <HelpIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;

