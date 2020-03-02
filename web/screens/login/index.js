import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  TextField,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import { OutlinedTextInput } from 'components/OutlinedTextInput';
import { AppActions } from 'states/actions/AppActions';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  leftSide: {
    flex: 1,
    padding: '100px',
  },
  rightSide: {
    flex: 1,
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('seriputera2@gmail.com');
  const [password, setPassword] = useState('Enter_123');

  const handleEmailAndPasswordLogin = () => {
    AppActions.loginWithEmailAndPassword(email, password)(dispatch);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.leftSide}>
        <Box className={classes.title}>
          <Typography color="inherit" variant="h3">
            Log in
          </Typography>
        </Box>
        <Box marginTop="20px" maxWidth="400px">
          <OutlinedTextInput
            onChange={handleEmailChange}
            value={email}
            label="Email"
          />
          <OutlinedTextInput
            onChange={handlePasswordChange}
            value={password}
            label="Password"
          />
        </Box>
        <Box marginTop="20px" maxWidth="400px">
          <Button
            onClick={handleEmailAndPasswordLogin}
            fullWidth
            color="secondary"
            variant="contained"
          >
            Log in
          </Button>
        </Box>
      </Box>
      <Box className={classes.rightSide}></Box>
    </Box>
  );
};

export default Login;
