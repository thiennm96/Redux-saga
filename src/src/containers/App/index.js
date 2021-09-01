// import { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../common/Theme';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import AdminLayoutRoute from '../../components/Layout/AdminLayoutRoute';
import LogLayoutRoute from '../../components/Layout/LogLayoutRoute';
import { ADMIN_ROUTES, ROUTES } from '../../constanst';
import configureStore from '../../redux/configureStore';
import styles from './styles';

const store = configureStore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => (
      <AdminLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
      ));
    return xhtml;
  }

  renderLogRoutes = () => {
    let xhtml = null;
    xhtml = ROUTES.map((route) => (
      <LogLayoutRoute
        key={route.path}
        path={route.path}
        component={route.component}
        exact={route.exact}
        name={route.name}
      />
      ));
    return xhtml;
  }

  render() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          <Switch>
            {this.renderAdminRoutes()}
            {this.renderLogRoutes()}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default withStyles(styles)(App);
