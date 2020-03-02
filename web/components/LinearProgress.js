import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiLinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));

const LinearProgress = () => {
  const classes = useStyles();
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCompleted(true);
    }, 5000);
  }, []);

  if (completed) {
    return null;
  }

  return (
    <div className={classes.root}>
      <MuiLinearProgress variant="indeterminate" color="secondary" />
    </div>
  );
};

export { LinearProgress };
