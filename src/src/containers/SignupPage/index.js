import React, { Component } from 'react';
import {
 withStyles, Card, CardContent, Typography, TextField, Button, FormControlLabel, Checkbox,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <form>
                <div>
                  <Typography variant="caption">
                    Create new account
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
                <TextField
                  id="cpassword"
                  label="Confirm Password"
                  className={classes.TextField}
                  type="password"
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="agree" />}
                  label="Im agree to comply with the terms of rules"
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <div>
                  <Link to="/login">
                    <Button>
                      Already have account? Click these to login
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

SignupPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupPage);
