import React from 'react';
import { FcGoogle } from 'react-icons/fc';
const ButtonGoogle = (props) => {
  return (
    <button
      className='dark:border-[#FFFFFF] dark:text-[#FFFFFF] dark:hover:bg-[#353535] w-[100%] h-[60px] font-Mon text-lg text-textColor py-2 rounded-[10px]  
  duration-500 flex flex-row items-center border-textColor border-[1px] pr-[16px] pl-[16px] hover:bg-btnHoverG'
    >
      <span
        style={{ width: '15%', display: 'flex', justifyContent: 'flex-start' }}
      >
        <FcGoogle style={{ width: '26px', height: '26px' }} />
      </span>

      <span style={{ width: '75%', textAlign: 'center' }}> {props.name}</span>
    </button>
  );
};
export default ButtonGoogle;
