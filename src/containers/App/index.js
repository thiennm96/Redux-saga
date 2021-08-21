// import { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../common/Theme';

function App() {
  // const { classes } = this.props;
  return (
    <ThemeProvider theme={theme}>
      <Taskboard />
    </ThemeProvider>
    );
}

export default withStyles(styles)(App);
