import React from 'react';
import Navbar from '../Components/Dashboard/Navbar';
import Pdf from '../Pages/Pdf';

const Dashboard = () => {
  return (
    <div className='w-screen h-screen dark:text-white flex'>
      <Navbar />
      <Pdf />
    </div>
  );
};

export default Dashboard;
