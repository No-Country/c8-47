import React from 'react';
import { ImLinkedin } from 'react-icons/im';
const ButtonLinkedin = (props) => {
  return (
    <button
      className='w-[100%] h-[60px] font-Mon text-lg text-textColor py-2 rounded-[10px]  
  duration-500 flex flex-row items-center border-[1px] border-textColor pr-[16px] pl-[16px] hover:bg-btnHoverG'
    >
      <ImLinkedin style={{ color: '#0077B5', marginRight: '46px' }} />{' '}
      {props.name}
    </button>
  );
};
export default ButtonLinkedin;
