import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  SvgIcon,
  InputBase,
  Button,
  Typography,
  Badge,
  Icon,
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { LinearProgress } from './LinearProgress';
import { AppActions } from '../states/actions/AppActions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const router = useRouter();
  const state = useSelector(s => s.app.user);

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img width={200} src={require('assets/images/ProxyPayLogo.png')} />
          </IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.root} />
          {state.authenticated ? (
            <div className={classes.sectionDesktop}>
              <IconButton color="secondary">
                <Badge>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton color="secondary">
                <Badge>
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="secondary">
                <AccountCircle />
              </IconButton>
            </div>
          ) : (
            <Button onClick={handleLogin} variant="outlined" color="secondary">
              Login
            </Button>
          )}
        </Toolbar>
      </MuiAppBar>
      <LinearProgress />
    </>
  );
};

export { AppBar };
