import { createTheme } from '@mui/material/styles';
import { red, yellow } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: yellow[200],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
        secondary: red[500]
    }
  },
});

export default theme;