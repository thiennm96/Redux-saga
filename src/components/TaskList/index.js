import React, { Component } from 'react';
import { withStyles, Box, Grid } from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, status, tasks } = this.props;
    return (
      <Grid item xs={12} sm={4} key={status.value}>
        <Box component="div" mt={1} mb={1}>
          <h3>{status.label}</h3>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => (
            <TaskItem key={task.id} status={status} task={task} />
          ))}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
