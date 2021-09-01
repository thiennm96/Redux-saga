import React, { Component } from 'react';
import {
 withStyles, Card, CardContent, Typography, TextField, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="caption">
                    Login to continue
                  </Typography>
                </div>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.TextField}
                  type="email"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="password"
                  label="Password"
                  className={classes.TextField}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <Link to="/admin">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    Login
                  </Button>
                </Link>
                <div>
                  <Link to="/signup">
                    <Button>
                      Create new account
                    </Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
