import { Button, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { STATUSES } from '../../constanst';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import styles from './styles';

const listTask = [
  {
    id: 1,
    title: 'Learn Toiec',
    description: 'Training Speaking and Listening',
    status: 0,
  },
  {
    id: 2,
    title: 'Read book',
    description: 'Read Reactjs book',
    status: 1,
  },
  {
    id: 3,
    title: 'Relax',
    description: 'Listening music',
    status: 2,
 },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  renderBoard = () => {
    // const { classes } = this.props;
    let board = null;
    board = (
      <Grid container spacing={3}>
        {STATUSES.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList key={status.value} status={status} tasks={taskFiltered} />
          );
        })}
      </Grid>
    );
    return board;
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    let form = null;
    form = <TaskForm open={open} onClose={this.handleClose} />;
    return form;
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
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskBoard);
