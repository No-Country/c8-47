import React from 'react';

export const ButtonPurple = (props) => {
  return (
    <button
      className=' dark:focus:bg-bgPushDarkMode dark:hover:bg-bgHoverDarkMode dark:text-black dark:bg-borderDarkMode font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded-[10px] md:ml-8 hover:bg-primarioH 
    duration-500 focus:bg-primarioP	disabled:bg-primarioD'
      onClick={props.onClick}
    >
      {props.children || 'Button'}
    </button>
  );
};
