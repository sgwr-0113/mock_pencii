import React from 'react';
import { Routing } from './routes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3563b1',
    },
    secondary: {
      main: '#00bcd4',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
};
