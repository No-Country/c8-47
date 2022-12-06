import React from 'react';

export const ButtonPurple = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='dark:disabled:bg-textDisableDarkmode dark:focus:bg-textPressDarkmode dark:hover:bg-textHoverDarkmode dark:text-black dark:bg-borderDarkmode font-Mon text-lg font-bold bg-primario text-white py-2 px-20 md:px-6 rounded-[10px] hover:bg-primarioH 
    duration-500 focus:bg-primarioP	disabled:bg-primarioD'
    >
      {props.children || 'Button'}
    </button>
  );
};
