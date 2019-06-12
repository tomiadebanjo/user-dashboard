import React from 'react';
import { connect } from 'react-redux';
import { Redirect, navigate } from '@reach/router';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (isAuthenticated) {
    return <Component {...rest} />;
  }

  return <Redirect to="/" noThrow />;
};

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  null
)(PrivateRoute);
