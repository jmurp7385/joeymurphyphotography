import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import PanoPhotos from './PanoPhotos/PanoPhotos';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <PanoPhotos />
    </ThemeProvider>
  );
}
export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
