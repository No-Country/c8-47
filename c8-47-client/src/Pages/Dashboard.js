import React, { useContext } from 'react';
import Navbar from '../Components/Dashboard/Navbar';
import Page from '../Components/LivePdf/Page';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen dark:text-white flex'>
      <Navbar />
      <Page />
    </div>
  );
};

export default Dashboard;
