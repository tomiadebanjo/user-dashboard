import React from 'react';
import { Router } from '@reach/router';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import Login from './pages/Login';
import CreateOrganization from '../components/OrganizationAdmin/CreateOrganization';
import ViewOrganizations from '../components/OrganizationAdmin/ViewOrganizations';
import CreateApi from '../components/Api/CreateApi';
import ViewApi from '../components/Api/ViewApi';
import GenerateReport from '../components/Reports/GenerateReport';
import Dashboard from './pages/Dashboard';

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
    // [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
    //   width: 1200,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
};

const Routes = ({ classes }) => (
  <Router className={classes.layout}>
    <Login path="/" />
    <Dashboard path="dashboard">
      <ViewOrganizations path="/" />
      <CreateOrganization path="admin/create" />
      <ViewApi path="api" />
      <CreateApi path="api/create" />
      <GenerateReport path="reports/generate" />
    </Dashboard>
  </Router>
);

const StyledRoutes = withStyles(styles)(Routes);

const AppRouting = () => (
  <MuiThemeProvider theme={theme}>
    <StyledRoutes />
  </MuiThemeProvider>
);

export default AppRouting;
