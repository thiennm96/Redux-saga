import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import cn from 'classnames';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import * as uiActions from '../../actions/ui';

class Dashboard extends Component {
  handleToggleSidebar = (value) => {
    const { uiActionCreators } = this.props;
    const { showSidebar, hideSidebar } = uiActionCreators;
    if (value === true) {
      showSidebar();
    } else {
      hideSidebar();
    }
  }

  render() {
    const {
      children, classes, name, showSidebarStatus,
    } = this.props;
    return (
      <div className={classes.dashboard}>
        <Header
          name={name}
          showSidebar={showSidebarStatus}
          onToggleSidebar={this.handleToggleSidebar}
        />
        <div className={classes.wrapper}>
          <Sidebar showSidebar={showSidebarStatus} onToggleSidebar={this.handleToggleSidebar} />
          <div className={cn(classes.wrapperContent, {
            [classes.shiftLeft]: showSidebarStatus === false,
          })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.object,
  classes: PropTypes.object,
  name: PropTypes.string,
  showSidebarStatus: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showSidebar: PropTypes.func,
    hideSidebar: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
    showSidebarStatus: state.ui.showSidebar, // reducer ui: uiReducers
  });

const mapDispatchToProps = (dispatch) => ({
    uiActionCreators: bindActionCreators(uiActions, dispatch),
  });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(Dashboard);
