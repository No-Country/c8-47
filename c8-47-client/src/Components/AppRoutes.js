import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Home from '../Pages/Home';

import Terms from '../Pages/Terms';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Admin from '../Pages/Admin';
import { routes } from '../Config/routes';
import { AuthContext } from '../Context/AuthContext';

const AppRoutes = ({ onView }) => {
  const { user } = useContext(AuthContext);
  const isAdmin = true;

  return (
    <Routes>
      <Route
        exact
        path={routes.home}
        element={user ? <Home /> : <Landing onView={onView} />}
      />

      <Route path={routes.terms} element={<Terms />} />
      <Route
        path={routes.user}
        element={user ? <Dashboard /> : <Navigate to={routes.login} />}
      >
        <Route
          path={routes.profile}
          element={user ? <Profile /> : <Navigate to={routes.login} />}
        />
      </Route>
      <Route path={routes.dashboard} element={<Dashboard />}></Route>
      <Route
        path={routes.admin}
        element={
          isAdmin ? (
            <Admin />
          ) : (
            <Navigate to={user ? routes.home : routes.login} />
          )
        }
      />
      <Route path='*' element={<Navigate to={routes.home} />} />
    </Routes>
  );
};

export default AppRoutes;
