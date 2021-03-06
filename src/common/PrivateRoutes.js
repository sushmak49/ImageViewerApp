/**
 *
 * PrivateRoutes
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Utils

const PrivateRoutes = ({ component: Component, ...rest }) => {  
  var session_token=sessionStorage.getItem('access-token');

  return (
    <Route {...rest} render={props => (
     session_token !== null ? (
      < Component  {...props} />
      ) : (
            <Redirect to={{
              pathname: "/",
              state: { from: props.location }
              }}
            />
          )
      )} 
    />
  )
};

export default PrivateRoutes;