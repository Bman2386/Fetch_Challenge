import React from 'react'
import Session from './session/session_constructor'
import Points from './points/points_constructor'
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

function App() {
  return (
    <div>
      <AuthRoute path='/' component={Session} />
      <ProtectedRoute path="/points" component={Points} />
    </div>
  );
}

export default App;
