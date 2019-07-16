import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      backgroundColor: theme.palette.background.default,
    },
    pano: {
      width: window.innerWidth / 3,
      height: window.innerHeight / 3,
    },
  }),
);

function PanoPhotos(props: any) {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <iframe src="http://localhost:8081/index.html" className={classes.pano} />
    </div>
  );
}

export default PanoPhotos;
