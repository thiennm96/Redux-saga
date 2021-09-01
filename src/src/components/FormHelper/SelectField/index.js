/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
 FormControl, InputLabel, Select, FormHelperText, withStyles,
 } from '@material-ui/core';
// import PropTypes from 'prop-types';
import styles from './styles';

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
  return null;
  }
  return <FormHelperText>{touched && error}</FormHelperText>;
};

const renderSelectField = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel className={classes.inputLabel} htmlFor="color-native-simple" mr={5}>{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple',
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

// renderSelectField.propTypes = {
//   input: PropTypes.object,
//   label: PropTypes.string,
//   meta: PropTypes.object,
// };

export default withStyles(styles)(renderSelectField);
