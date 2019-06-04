import React from 'react';
import { Link } from '@reach/router';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import OrganizationTable from '../OrganizationTable';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 10,
  },
  heading: {
    paddingBottom: theme.spacing.unit * 5,
  },
});

const ViewOrganizations = ({ classes, theme }) => {
  return (
    <main className={classes.content}>
      <Typography className={classes.heading} variant="h4">
        Current System Organisations
      </Typography>
      <OrganizationTable />
    </main>
  );
};

export default withStyles(styles)(ViewOrganizations);
