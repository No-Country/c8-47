import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className='pt-36'>Home</div>
      <button onClick={() => navigate('dashboard')}>Dashboard</button>
      <Outlet />
    </div>
  );
};

export default Home;
