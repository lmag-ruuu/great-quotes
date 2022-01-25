import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const col = Math.floor(Math.random() * 13);

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#66a80f",
    },
    secondary: {
      main: "#adb5bd",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
    background: {
      paper: "#e7f5ff",
    },
  },
});

export default theme;
