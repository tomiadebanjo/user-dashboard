import React from 'react';
import { Router } from '@reach/router';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Login from './pages/Login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      light: '#ffffff',
      main: '#ff9100',
      contrastText: '#ffffff',
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = {
  layout: {
    width: 'auto',
    flex: 1,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

const Routes = ({ classes }) => (
  <Router className={classes.layout}>
    <Login path="/" />
  </Router>
);

const StyledRoutes = withStyles(styles)(Routes);

const AppRouting = () => (
  <MuiThemeProvider theme={theme}>
    <NavBar />
    <StyledRoutes />
  </MuiThemeProvider>
);

export default AppRouting;
