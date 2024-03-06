import { createTheme } from "@mui/material";

const themeApp = createTheme({
  palette: {
    primary: {
      main: "#F7F7F7",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    // Define typography options here
    fontFamily: "Roboto, sans-serif",
  },
  // Add more theme options as needed
});

export default themeApp;
