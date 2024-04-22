// import Button from "@mui/material/Button";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
// import HomeIcon from "@mui/icons-material/Home";
// import { pink } from "@mui/material/colors";
// import Typography from "@mui/material/Typography";
 import { useColorScheme } from "@mui/material/styles";
//import useMediaQuery from "@mui/material/useMediaQuery";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function SelectMode() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    const selectMode = event.target.value;
    setMode(selectMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-light-mode">Mode</InputLabel>
      <Select
        labelId="select-light-mode"
        id="select-dark-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}



function App() {
  return (
    <>
      <SelectMode />
      <hr></hr>
      
    </>
  );
}

export default App;
