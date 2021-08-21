import React, { Component } from 'react';
import {
  withStyles,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid,
  Fab,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    const { id, title } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item sm={10}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item sm={2}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab size="small" color="primary" aria-label="Edit">
            <EditIcon />
          </Fab>
          <Fab size="small" color="secondary" aria-label="Delete">
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
