import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class LogLayoutRoute extends Component {
  render() {
    const { component: MyComponent, ...remainProps } = this.props;
    return (
      <Route
        {...remainProps}
        render={(routerProps) => (
          <MyComponent {...routerProps} />
          )}
      />
    );
  }
}

LogLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  name: PropTypes.string,
};

export default LogLayoutRoute;
