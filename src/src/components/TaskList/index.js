import React, { Component } from 'react';
import { withStyles, Box, Grid } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const {
      classes, status, onDelete, tasks, onEdit,
    } = this.props;
    return (
      <Grid item xs={12} sm={4} key={status.value}>
        <Box component="div" mt={1} mb={1}>
          <h3>{status.label}</h3>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              status={status}
              task={task}
              onEdit={() => onEdit(task)}
              onDelete={() => onDelete(task)}
            />
          ))}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withStyles(styles)(TaskList);
