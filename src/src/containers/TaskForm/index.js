import React, { Component } from 'react';
import {
  withStyles, Box, Button, Grid, MenuItem,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
// import { reduxForm, Field } from 'redux-form';
import styles from './styles';
import * as modalActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import renderSelectField from '../../components/FormHelper/SelectField';
import validate from './validate';
import * as taskActions from '../../actions/task';

class TaskForm extends Component {
  onSubmit = (data) => {
    const { taskActionCreators, editTask } = this.props;
    const { addTask, updateTask } = taskActionCreators;
    const { title, detail, status } = data;
    if (editTask && editTask.id) {
      updateTask(title, detail, status);
    } else {
      addTask(title, detail);
    }
  }

  renderStatusSelect() {
    let xhtml = null;
    const { editTask, classes } = this.props;
    if (editTask && editTask.id) {
      xhtml = (
        <Grid item md={12}>
          <Field
            name="status"
            id="status"
            label="Status"
            variant="outlined"
            className={classes.select}
            component={renderSelectField}
          >
            <MenuItem value={0}>Ready</MenuItem>
            <MenuItem value={1}>Inprogress</MenuItem>
            <MenuItem value={2}>Completed</MenuItem>
          </Field>
        </Grid>
      );
    }
    return xhtml;
  }

  render() {
    const {
      classes, modalAction, editTask,
    } = this.props;
    const { hideModal } = modalAction;
    return (
      <Form
        validate={validate}
        onSubmit={this.onSubmit}
        initialValues={
          {
            title: editTask ? editTask.title : '',
            detail: editTask ? editTask.detail : '',
            status: editTask ? editTask.status : '',
          }
      }
      >
        {({ handleSubmit, submitting, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item md={12}>
                <Field
                  name="title"
                  id="title"
                  label="Task name"
                  variant="outlined"
                  className={classes.textField}
                  component={renderTextField}
                  // value={editTask ? editTask.title : ''}
                />
              </Grid>
              <Grid item md={12}>
                <Field
                  name="detail"
                  id="detail"
                  label="Detail"
                  variant="outlined"
                  className={classes.textField}
                  component={renderTextField}
                  // value={editTask ? editTask.detail : ''}
                />
              </Grid>
              {this.renderStatusSelect()}
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse">
                  <Button onClick={hideModal}>Cancel</Button>
                  <Button disabled={invalid || submitting} color="primary" type="submit">Save</Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalAction: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  // handleSubmit: PropTypes.func,
  // invalid: PropTypes.bool,
  // submitting: PropTypes.bool,
  taskActionCreators: PropTypes.shape({
    addTask: PropTypes.func,
    updateTask: PropTypes.func,
  }),
  editTask: PropTypes.object,
};

const mapStateToProps = (state) => ({
  editTask: state.task.editTask,
  initialValues: {
    title: state.task.editTask ? state.task.editTask.title : null,
    detail: state.task.editTask ? state.task.editTask.detail : null,
    status: state.task.editTask ? state.task.editTask.status : null,
  },
});

const mapDisPatchToProps = (dispatch) => ({
  modalAction: bindActionCreators(modalActions, dispatch),
  taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDisPatchToProps);

// const FORM_NAME = 'FORM_MANAGEMENT';

// const withReduxForm = reduxForm({
//   form: FORM_NAME,
//   validate,
// });

export default compose(
  withStyles(styles),
  withConnect,
  // withReduxForm,
)(TaskForm);
