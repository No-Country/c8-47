import React from 'react';
import Register from '../Components/Register';
import { Outlet } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='mt-[8rem]'>
      <Register />
      <Outlet />
    </div>
  );
};

export default Signup;
