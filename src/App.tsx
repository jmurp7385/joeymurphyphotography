import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import PanoPhotos from './PanoPhotos/PanoPhotos';

const useStyles = makeStyles((theme: Theme) => {
  console.log(theme.palette.type);
  return createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
    panoPhoto: {
      width: window.innerWidth / 3,
      height: window.innerHeight / 3,
    },
  });
});

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
