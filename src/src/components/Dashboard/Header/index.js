import {
  AppBar, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, withStyles,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators, compose } from 'redux';
import styles from './styles';
import * as taskActions from '../../../actions/task';
import { ADMIN_ROUTES } from '../../../constanst/index';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      anchorEl: null,
  };
 }

  handleProfileMenuOpen = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
    });
  };

  handleMobileMenuOpen = (e) => {
    this.setState({
      mobileMoreAnchorEl: e.currentTarget,
    });
  };

  handleMobileMenuClose = () => {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  renderMobileMenu = () => {
    const { mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Account</p>
        </MenuItem>
      </Menu>
    );
  }

  handleLogout = () => {
    const { history } = this.props;
    if (history) {
      history.push('/login');
    }
  }

  renderMenu = () => {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );
  }

  handleToggleSidebar = () => {
    const { showSidebar, onToggleSidebar } = this.props;
    if (onToggleSidebar) {
      onToggleSidebar(!showSidebar);
    }
  }

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  renderSearchBox = () => {
    let xhtml = null;
    const { match, classes } = this.props;
    const { path } = match;
    if (path === ADMIN_ROUTES[1].path) {
      xhtml = (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search Task"
            classes={{
                     root: classes.inputRoot,
                     input: classes.inputInput,
                   }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={this.handleFilter}
          />
        </div>
      );
    }
    return xhtml;
  }

  render() {
    const { classes, name } = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            {this.renderSearchBox()}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebar: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  history: PropTypes.object,
  taskActionCreators: PropTypes.object,
  match: PropTypes.object,
};

// export default withStyles(styles)(withRouter(Header));

const mapDispatchToProps = (dispatch) => ({
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
  withRouter,
  // withReduxForm,
)(Header);
