import {
  createTheme,
  ThemeOptions,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    greyScale: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    greyScale: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) =>
  augmentColor({ color: { main: mainColor } });

const mode = "light";

const themeOptions: ThemeOptions = {
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: "Manrope",
    fontSize: 14,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: 48,
      fontWeight: 700,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontSize: 24,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
    },
    h6: {
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 14,
    },
  },
  palette: {
    greyScale: createColor("#111827"),
    // palette values for light mode
    primary: {
      main: "#27A376",
      light: "#3cbf7f",
      dark: "#087a43",
      contrastText: "#fff",
    },

    text: {
      primary: "#111827",
      secondary: "#687588",
      disabled: "#A0AEC0",
    },
    success: {
      main: "#0CAF60",
      light: "#3cbf7f",
      dark: "#087a43",
      contrastText: "#fff",
    },
    info: {
      main: "#2F78EE",
    },
    error: {
      main: "#E03137",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: "12px 18px",
          textTransform: "capitalize",
          fontWeight: 700,
          minWidth: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            fontSize: "14px",
          },
          "& .MuiInputLabel-root": {
            color: "#A0AEC0",
          },

          background: "#fff",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            fontSize: "14px", // Set the font size for the select value
            padding: "15px", // Adjust the padding for the select value
          },
          "& .MuiSelect-icon": {
            top: "calc(50% - 12px)", // Adjust the vertical alignment of the select icon
          },
          background: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
