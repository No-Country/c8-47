import React from 'react';
import { FcGoogle } from 'react-icons/fc';
const ButtonGoogle = (props) => {
  return (
    <button
      className='w-[100%] h-[60px] font-Mon text-lg text-textColor py-2 rounded-[10px]  
  duration-500 flex flex-row items-center border-textColor border-[1px] pr-[16px] pl-[16px] hover:bg-btnHoverG'
    >
      <FcGoogle style={{ marginRight: '46px' }} />
      {props.name}
    </button>
  );
};
export default ButtonGoogle;
