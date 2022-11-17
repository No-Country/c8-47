import React from 'react';
import Signin from '../Components/Signin';
import { Outlet } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mt-[8rem]'>
      <Signin />
      <Outlet />
    </div>
  );
};

export default Login;
