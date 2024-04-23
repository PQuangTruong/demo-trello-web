import { Box } from '@mui/material';
import SelectMode from '../SelectMode';

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.size.navBarHeight,
        display: "flex",
        alignItems: "center",
      }}
    >
      NavBar Hello<SelectMode />
    </Box>
  );
}

export default AppBar;
