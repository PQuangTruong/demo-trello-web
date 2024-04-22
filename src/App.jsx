import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from "@mui/material/Container";

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
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: "100vh", backgroundColor: "primary.main" }}
      >
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: (theme) => theme.size.navBarHeight, 
            display: "flex",
            alignItems: "center",
          }}
        >
          NavBar <SelectMode />
        </Box>

        <Box
          sx={{
            backgroundColor: "primary.dark",
            width: "100%",
            height: (theme) => theme.size.boardBarHeight,
            display: "flex",
            alignItems: "center",
          }}
        > 
          Board Bar
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            height: (theme) =>`calc(100% - (${theme.size.navBarHeight} + ${theme.size.boardBarHeight}))`,
            display: "flex",
            alignItems: "center",
            textAlign:'center'
          }}
        >
          Contentt
        </Box>
        <Box></Box>
      </Container>
    </>
  );
}

export default App;
