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
import PropTypes from 'prop-types';
import styles from './styles';

class TaskItem extends Component {
  render() {
    const {
      classes, task, status, onEdit, onDelete,
    } = this.props;
    const { id, title, detail } = task;
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
          <p>{detail}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab size="small" color="primary" aria-label="Edit" onClick={onEdit}>
            <EditIcon />
          </Fab>
          <Fab size="small" color="secondary" aria-label="Delete">
            <DeleteIcon onClick={onDelete} />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
