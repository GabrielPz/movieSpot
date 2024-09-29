import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    lmd: true;
  }
}

export const theme = {
  colors: {
    white: "#fff",
    primary: "#000000",
  },
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#e50813",
    },
    grey: {
      "400": "#414142",
      "500": "#6D6F70",
    },
  },
  components: {
    // MuiTableRow: {
    //   styleOverrides: {
    //     root: {
    //       '&:nth-of-type(odd)': {
    //         backgroundColor: '#ffff',
    //       },
    //       '&:nth-of-type(even)': {
    //         backgroundColor: '#D8D8D8',
    //       },
    //       height: '56px',
    //     },
    //   },
    // },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#799B28",
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          color: "#fff",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 2,
        },
      },
    },
  },

  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536, lmd: 1024 },
  },

  typography: {
    h6: {
      fontSize: "0.875rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h2: {
      fontSize: "2rem",
      "@media (max-width:600px)": {
        fontSize: "1.875rem",
      },
    },
    h1: {
      fontSize: "2.5rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
  },
});
