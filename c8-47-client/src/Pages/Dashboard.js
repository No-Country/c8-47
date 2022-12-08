import React, { useContext } from 'react';
import Navbar from '../Components/Dashboard/Navbar';
import { DataContext } from '../Context/DataContext';
import Pdf from '../Pages/Pdf';

const Dashboard = () => {
  const value = useContext(DataContext);

  console.log(value);

  return (
    <div className='w-screen h-screen dark:text-white flex'>
      <Navbar />
      <Pdf value={value} />
    </div>
  );
};

export default Dashboard;
