import React from 'react';
import { Link } from '@reach/router';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsEthIcon from '@material-ui/icons/SettingsEthernet';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PeopleIcon from '@material-ui/icons/People';

const superAdminNav = (classes, handler, state) => (
  <div>
    <div className={classes.toolbar} />
    <Divider />
    <List>
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
        key="api"
        onClick={() => handler('apiButtonOpen')}
        className={classes.links}
      >
        <ListItemIcon>
          <SettingsEthIcon />
        </ListItemIcon>
        <ListItemText inset primary="Api Agent" />
        {state.apiButtonOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={state.apiButtonOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} component={Link} to="api">
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="create api" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        key="reports"
        onClick={() => handler('reportButtonOpen')}
        className={classes.links}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText inset primary="Reports" />
        {state.reportButtonOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={state.reportButtonOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={Link}
            to="reports"
          >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText inset primary="Generate report" />
          </ListItem>
        </List>
      </Collapse>
    </List>
    <Divider />
  </div>
);

export default superAdminNav;
