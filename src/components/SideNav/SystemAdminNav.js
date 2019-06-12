import React from 'react';
import { Link } from '@reach/router';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import BusinessIcon from '@material-ui/icons/Business';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';

const systemAdminNav = (classes, handler, state) => (
  <div>
    <div className={classes.toolbar} />
    <Divider />
    <List>
      <ListItem
        button
        key="admin"
        onClick={() => handler('adminButtonOpen')}
        className={classes.links}
      >
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText inset primary="Organizations" />
        {state.adminButtonOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={state.adminButtonOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="./">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="View organizations" />
          </ListItem>
        </List>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="organizations/create"
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Add organization" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        key="users"
        className={classes.links}
        component={Link}
        to="users"
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText inset primary="Users" />
      </ListItem>

      <ListItem
        button
        key="email-settings"
        className={classes.links}
        component={Link}
        to="emailSettings"
      >
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText inset primary="Email Settings" />
      </ListItem>
    </List>
    <Divider />
  </div>
);

export default systemAdminNav;
