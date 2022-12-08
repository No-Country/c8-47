import React, { useState } from 'react';
import Navbar from '../Components/Dashboard/Navbar';
import Pdf from '../Pages/Pdf';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { MdOutlineModeEditOutline } from 'react-icons/md';
const Dashboard = () => {
  const [viewPDF, setViewPDF] = useState(false);

  return (
    <div className='relative w-screen h-screen dark:text-white flex'>
      {/* {!viewPDF && (
        <>
          {' '}
          <Navbar />
          <div className='fixed bottom-[1%] right-[3%] md:hidden rounded-[50%] w-[3.5rem] h-[3.5rem] bg-textColor'>
            <AiOutlineFilePdf
              onClick={handlePDF}
              style={{
                color: '#FFFFFF',
                position: 'fixed',
                bottom: '2.5%',
                right: '6%',
                width: '32px',
                height: '32px',
              }}
            />
          </div>
        </>
      )} */}
      {/* 
      <div
        className={`${
          !viewPDF ? 'block' : 'hidden'
        }  w-[100%] h-[100%] md:block`}
      >
        {' '}
        <Navbar />
      </div> */}
      <Navbar viewPDF={viewPDF} />
      <div
        className={`${
          !viewPDF ? 'fixed' : 'hidden'
        }  bottom-[1%] right-[3%] md:hidden rounded-[50%] w-[3.5rem] h-[3.5rem] bg-textColor`}
      >
        <AiOutlineFilePdf
          onClick={() => setViewPDF(true)}
          style={{
            color: '#FFFFFF',
            position: 'fixed',
            bottom: '2.5%',
            right: '6%',
            width: '32px',
            height: '32px',
          }}
        />
      </div>

      <div className={`${viewPDF ? 'block' : 'hidden'}  w-[100%] md:block`}>
        <Pdf />
      </div>
      <div
        className={`${
          viewPDF ? 'fixed' : 'hidden'
        }  bottom-[1%] right-[3%] md:hidden rounded-[50%] w-[3.5rem] h-[3.5rem] bg-textColor`}
      >
        <MdOutlineModeEditOutline
          onClick={() => setViewPDF(false)}
          style={{
            color: '#FFFFFF',
            position: 'fixed',
            bottom: '2.5%',
            right: '6%',
            width: '32px',
            height: '32px',
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
