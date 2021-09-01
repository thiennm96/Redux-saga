import React, { Component } from 'react';
import {
 withStyles, Drawer, List, ListItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import { ADMIN_ROUTES } from '../../../constanst/index';

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(value);
    }
  }

  renderList = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="nav">
          {ADMIN_ROUTES.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              exact={item.exact}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
            >
              <ListItem key={item.path} className={classes.menuItem} button>
                {item.name}
              </ListItem>
            </NavLink>
            ))}
        </List>
      </div>
    );
    return xhtml;
  }

  render() {
    const { classes, showSidebar } = this.props;
    return (
      <Drawer
        open={showSidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
      >
        {this.renderList()}
      </Drawer>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
