import React from 'react';
import { ImLinkedin } from 'react-icons/im';
const ButtonLinkedin = (props) => {
  return (
    <button
      className='dark:border-[#FFFFFF] dark:text-[#FFFFFF] dark:hover:bg-[#353535] w-[100%] h-[60px] font-Mon text-lg text-textColor py-2 rounded-[10px]  
  duration-500 flex flex-row items-center border-[1px] border-textColor pr-[16px] pl-[16px] hover:bg-btnHoverG'
    >
      <span
        style={{
          color: '#0077B5',
          width: '15%',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <ImLinkedin style={{ width: '26px', height: '26px' }} />
      </span>
      <span style={{ width: '75%', textAlign: 'center' }}> {props.name}</span>
    </button>
  );
};
export default ButtonLinkedin;
