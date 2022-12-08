import React, { useState, useContext } from 'react';
import Navbar from '../Components/Dashboard/Navbar';
import { DataContext } from '../Context/DataContext';
import Pdf from '../Pages/Pdf';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from 'react-icons/md';
const Dashboard = () => {
  const [viewPDF, setViewPDF] = useState(false);
  const value = useContext(DataContext);

  console.log(value);
  return (
    <div className='relative w-screen h-screen dark:text-white flex'>
      <Navbar viewPDF={viewPDF} />
      <div
        className={`${
          !viewPDF ? 'fixed' : 'hidden'
        }  bottom-[10px] right-[10px] md:hidden rounded-[50%] w-[3.5rem] h-[3.5rem] bg-textColor`}
      >
        <AiOutlineFilePdf
          onClick={() => setViewPDF(true)}
          style={{
            color: '#FFFFFF',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
          }}
        />
      </div>

      <div className={`${viewPDF ? 'block' : 'hidden'}  w-[100%] md:block`}>
        <Pdf value={value} viewPDF={viewPDF} />
      </div>
      <div
        className={`${
          viewPDF ? 'fixed' : 'hidden'
        }  bottom-[10px] right-[10px] md:hidden rounded-[50%] w-[3.5rem] h-[3.5rem] bg-textColor`}
      >
        <MdOutlineModeEditOutline
          onClick={() => setViewPDF(false)}
          style={{
            color: '#FFFFFF',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '32px',
            height: '32px',
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
