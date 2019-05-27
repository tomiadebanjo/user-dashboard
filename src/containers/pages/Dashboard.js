import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Link } from '@reach/router';
import SendIcon from '@material-ui/icons/Send';
import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessIcon from '@material-ui/icons/Business';
import SettingsEthIcon from '@material-ui/icons/SettingsEthernet';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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
    'z-index': 1,
  },
  appBar: {
    marginLeft: drawerWidth,
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
  links: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
    adminButtonOpen: false,
    apiButtonOpen: false,
    reportButtonOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleAdminButtonClick = () => {
    this.setState(state => ({ adminButtonOpen: !state.adminButtonOpen }));
  };

  handleApiButtonClick = () => {
    this.setState(state => ({ apiButtonOpen: !state.apiButtonOpen }));
  };

  handleReportButtonClick = () => {
    this.setState(state => ({ reportButtonOpen: !state.reportButtonOpen }));
  };

  render() {
    const { classes, theme, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem
            button
            key="admin"
            onClick={this.handleAdminButtonClick}
            className={classes.links}
          >
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText inset primary="Organizations" />
            {this.state.adminButtonOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.adminButtonOpen}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="./"
              >
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText inset primary="View organizations" />
              </ListItem>
            </List>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText inset primary="Add organization" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem
            button
            key="api"
            onClick={this.handleApiButtonClick}
            className={classes.links}
          >
            <ListItemIcon>
              <SettingsEthIcon />
            </ListItemIcon>
            <ListItemText inset primary="Api Agent" />
            {this.state.apiButtonOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.apiButtonOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                component={Link}
                to="api"
              >
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
            onClick={this.handleReportButtonClick}
            className={classes.links}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText inset primary="Reports" />
            {this.state.reportButtonOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={this.state.reportButtonOpen}
            timeout="auto"
            unmountOnExit
          >
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

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Songhai
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        {children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
