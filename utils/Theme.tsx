import { createTheme } from "@mui/material";

const themeApp = createTheme({
  
    palette: {
      primary: {
        main: '#F7F7F7', // Example primary color
      },
      secondary: {
        main: '#f50057', // Example secondary color
      },
    },
    typography: {
      // Define typography options here
      fontFamily: 'Roboto, sans-serif',
    },
    // Add more theme options as needed
  });