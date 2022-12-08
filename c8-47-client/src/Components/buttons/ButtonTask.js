import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const ButtonTask = (props) => {
  return (
    <button
      {...props}
      className='dark:border-[#FFFFFF] dark:text-[#FFFFFF] dark:hover:bg-[#353535] w-[100%] h-[48px] font-Mon text-lg text-textColor py-2 rounded-[10px]  
  duration-500 flex flex-row items-center border-[1px] border-textColor pr-[16px] pl-[16px] hover:bg-btnHoverG'
    >
      <span
        style={{
          color: '#3D3D3D',
          width: '15%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <AiOutlinePlus style={{ width: '26px', height: '26px' }} />
      </span>
      <span style={{ width: '75%', textAlign: 'center' }}> {props.name}</span>
    </button>
  );
};
export default ButtonTask;
