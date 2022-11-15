import React from 'react';
import Signin from '../Components/Signin';
import { Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Signin />
      <Outlet />
    </div>
  );
};

export default Login;
