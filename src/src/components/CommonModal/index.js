import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import { withStyles, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import styles from './styles';
import * as modalActions from '../../actions/modal';

class CommonModal extends Component {
  render() {
    const {
      open, classes, component, modalAction, title,
    } = this.props;
    const { hideModal } = modalAction;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>
              {title}
            </span>
            <CancelIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>
            {component}
          </div>
        </div>
      </Modal>
    );
  }
}

CommonModal.propTypes = {
  open: PropTypes.bool,
  classes: PropTypes.object,
  component: PropTypes.object,
  title: PropTypes.string,
  modalAction: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  component: state.modal.component,
  title: state.modal.title,
});

const mapDisPatchToProps = (dispatch) => ({
  modalAction: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDisPatchToProps);

export default compose(
  withStyles(styles),
  withConnect,
)(CommonModal);
