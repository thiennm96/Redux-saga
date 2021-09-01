/* eslint-disable import/no-cycle */
import { Box, Button, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../constanst';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import styles from './styles';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import SearchBox from '../../components/SearchBox';

class TaskBoard extends Component {
  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTask } = taskActionCreators;
    fetchListTask();
  }

  openForm = () => {
    const { modalAction, taskActionCreators } = this.props;
    const { editTask } = taskActionCreators;
    editTask(null);
    const { showModal, changeModalTitle, changeModalContent } = modalAction;
    showModal();
    changeModalTitle('Add new task');
    changeModalContent(<TaskForm />);
  };

  handleFilter = (e) => {
    const { value } = e.target;
    const { taskActionCreators } = this.props;
    const { filterTask } = taskActionCreators;
    filterTask(value);
  };

  handleEditTask = (task) => {
    const { taskActionCreators, modalAction } = this.props;
    const { editTask } = taskActionCreators;
    editTask(task);
    const { showModal, changeModalTitle, changeModalContent } = modalAction;
    showModal();
    changeModalTitle('Update Task');
    changeModalContent(<TaskForm />);
  }

  showModalDeleteTask = (task) => {
    const { modalAction, classes } = this.props;
    const {
      showModal, changeModalTitle, changeModalContent, hideModal,
    } = modalAction;
    showModal();
    changeModalTitle('Delete Task');
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmDelete}>
          Are you sure to delete this task{' '}
          <span className={classes.modalTextBold}>{task.title}?</span>
          <Box display="flex" flexDirection="row-reverse" mt={2}>
            <Box ml={1}>
              <Button variant="contained" onClick={hideModal}>Cancel</Button>
            </Box>
            <Box>
              <Button variant="contained" color="primary" onClick={() => this.handleDeleteTask(task)}>
                OK
              </Button>
            </Box>
          </Box>
        </div>
      </div>,
    );
  }

  showModalDelete = (task) => {
    const { taskActionCreators, modalAction } = this.props;
    const { editTask } = taskActionCreators;
    editTask(task);
    const { showModal, changeModalTitle, changeModalContent } = modalAction;
    showModal();
    changeModalTitle('Update Task');
    changeModalContent(<TaskForm />);
  }

  handleDeleteTask = (task) => {
    const { id } = task;
    const { taskActionCreators } = this.props;
    const { deleteTask } = taskActionCreators;
    deleteTask(id);
  }

  renderBoard = () => {
    const { listTask } = this.props;
    let board = null;
    board = (
      <Grid container spacing={3}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList
              key={status.value}
              status={status}
              tasks={taskFiltered}
              onEdit={this.handleEditTask}
              onDelete={this.showModalDeleteTask}
            />
          );
        })}
      </Grid>
    );
    return board;
  };

  renderSearchBox = () => {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={this.handleFilter} />
    );
    return xhtml;
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Add new task
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {/* {this.renderForm()} */}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTask: PropTypes.func,
    filterTask: PropTypes.func,
    editTask: PropTypes.func,
    deleteTask: PropTypes.func,
  }),
  modalAction: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => ({
    listTask: state.task.listTask,
  });
const mapDispatchToProps = (dispatch) => ({
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalAction: bindActionCreators(modalActions, dispatch),
  });

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
