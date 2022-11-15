import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import Terms from '../Pages/Terms';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Admin from '../Pages/Admin';

import { routes } from '../Config/routes';

const AppRoutes = () => {
  const userLoged = false;
  const isAdmin = true;

  return (
    <Routes>
      <Route path={routes.home} element={<Home />}>
        <Route
          path={routes.login}
          element={!userLoged ? <Login /> : <Navigate to={routes.home} />}
        />
        <Route
          path={routes.signup}
          element={!userLoged ? <Signup /> : <Navigate to={routes.home} />}
        />
        <Route path={routes.terms} element={<Terms />} />
      </Route>
      <Route
        path={routes.user}
        element={userLoged ? <Dashboard /> : <Navigate to={routes.login} />}
      >
        <Route
          path={routes.profile}
          element={userLoged ? <Profile /> : <Navigate to={routes.login} />}
        />
      </Route>
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
