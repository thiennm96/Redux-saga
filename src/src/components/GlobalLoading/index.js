import { withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import loadingIcon from '../../assets/img/loading.gif';
// import * as uiActions from '../../actions/ui';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={loadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    showLoading: state.ui.showLoading,
  });

const withConnect = connect(mapStateToProps, null);

export default compose(
  withStyles(styles),
  withConnect,
)(GlobalLoading);
