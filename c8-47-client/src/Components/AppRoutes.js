import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Home from '../Pages/Home';

import Terms from '../Pages/Terms';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Admin from '../Pages/Admin';
import { routes } from '../Config/routes';

const AppRoutes = ({ onView }) => {
  const userLoged = false;
  const isAdmin = true;

  return (
    <Routes>
      <Route exact path={routes.home} element={<Landing onView={onView} />} />

      <Route path={routes.terms} element={<Terms />} />
      <Route
        path={routes.user}
        element={userLoged ? <Dashboard /> : <Navigate to={routes.login} />}
      >
        <Route
          path={routes.profile}
          element={userLoged ? <Profile /> : <Navigate to={routes.login} />}
        />
      </Route>
      <Route path={routes.dashboard} element={<Dashboard />}></Route>
      <Route
        path={routes.admin}
        element={
          isAdmin ? (
            <Admin />
          ) : (
            <Navigate to={userLoged ? routes.home : routes.login} />
          )
        }
      />
      <Route path='*' element={<Navigate to={routes.home} />} />
    </Routes>
  );
};

export default AppRoutes;
