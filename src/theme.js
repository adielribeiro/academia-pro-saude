import { createTheme, alpha } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#063F63',
      light: '#0A76A8',
      dark: '#032437',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#B9E500',
      light: '#D9FF37',
      dark: '#84A400',
      contrastText: '#05283F',
    },
    success: {
      main: '#1DB954',
    },
    background: {
      default: '#F5FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#10212E',
      secondary: '#526574',
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.055em',
      lineHeight: 0.95,
    },
    h2: {
      fontWeight: 850,
      letterSpacing: '-0.035em',
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 780,
    },
    h6: {
      fontWeight: 760,
    },
    button: {
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '11px 22px',
          boxShadow: 'none',
        },
        containedSecondary: {
          boxShadow: `0 18px 38px ${alpha('#B9E500', 0.28)}`,
          '&:hover': {
            boxShadow: `0 22px 45px ${alpha('#B9E500', 0.34)}`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          boxShadow: `0 22px 70px ${alpha('#063F63', 0.1)}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 800,
          borderRadius: 999,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 18,
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
});
