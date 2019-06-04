import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ViewUsersTable from './ViewUsersTable';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    paddingTop: theme.spacing.unit * 10,
  },
  heading: {
    paddingBottom: theme.spacing.unit * 5,
  },
});

const ViewUsers = ({ classes }) => {
  return (
    <main className={classes.content}>
      <Typography className={classes.heading} variant="h4">
        User Manager
      </Typography>
      <ViewUsersTable />
    </main>
  );
};

export default withStyles(styles)(ViewUsers);
