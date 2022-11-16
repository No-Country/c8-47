import React from 'react';
import Register from '../Components/Register';
import { Outlet } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <Register />
      <Outlet />
    </div>
  );
};

export default Signup;
