import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Divider } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  leftSide: {
    flex: 1,
    padding: '30px',
  },
  rightSide: {
    flex: 1,
  },
  title: {
    color: theme.palette.secondary.light,
    marginTop: '20px',
  },
  subtitle: {
    color: theme.palette.secondary.light,
    marginTop: '20px',
  },
  bold: {
    fontWeight: 'bolder',
  },
  actionGrid: {
    marginTop: '40px',
    width: 'fit-content',
    padding: '6px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftSide}>
        <Box className={classes.title}>
          <Typography color="inherit" variant="h4">
            THE SAFEST WAY TO BUY <br /> AND SELL ONLINE
          </Typography>
        </Box>
        <Box className={classes.subtitle}>
          <Typography variant="p" color="inherit">
            The <span className={classes.bold}>ProxyPay</span> escrow protection
            guarantees the highest security when conduction transactions among
            strangers.
          </Typography>
        </Box>
        <Grid container alignItems="center" className={classes.actionGrid}>
          <Button variant="contained" color="secondary">
            I'm selling
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button variant="contained" color="secondary">
            I've received an invite
          </Button>
        </Grid>
      </Box>
      <Box className={classes.rightSide}></Box>
    </Box>
  );
};

export default HomePage;
