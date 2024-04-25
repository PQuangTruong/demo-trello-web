import { cyan, deepOrange, orange, teal} from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  size: {
    navBarHeight: "60px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        //https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          /* Handle */
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "10px",
            cursor:'pointer'
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#16a085",
          },
          "*::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 5px grey",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            colors: theme.palette.primary.main,
            fontSize: "0.9rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
            "& fieldset": {
              borderWidth: "2px",
            },
          };
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: "0.8rem",
        }),
      },
    },
  },
});

export default theme;

