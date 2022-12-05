import React from 'react';

export const ButtonGray = (props) => {
  return (
    <button
      onClick={props.onClick}
      className=' dark:border-white dark:hover:bg-bgDarkmodeHoverbtn dark:focus:text-white dark:hover:bgDarkmodeHoverbtn dark:disabled:text-btnDisable dark:focus:bg-bgDarkmodeHoverbtn dark:focus:border-bgDarkmodeHoverbtn dark:hover:border-white dark:text-white font-Mon text-textColor	transition-all duration-500 py-2 px-20 md:px-6  lg:px6 rounded-[10px] hover:border-textColor hover:bg-btnHoverG focus:bg-btnHoverG focus:border-btnHoverG hover:border border border-textColor  disabled:text-btnDisable'
    >
      {props.children || 'button'}
    </button>
  );
};
