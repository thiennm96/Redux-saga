import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Daskboard from '../../Dashboard';

class AdminLayoutRoute extends Component {
  render() {
    const { component: MyComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routerProps) => (
          <Daskboard {...remainProps}>
            <MyComponent {...routerProps} />
          </Daskboard>
          )}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  name: PropTypes.string,
};

export default AdminLayoutRoute;
