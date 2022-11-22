import React from 'react';

export const ButtonGray = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='font-Mon text-textColor border-transparent	transition-all duration-500 py-2 px-3 md:px-3 lg:px6 rounded hover:border-textColor focus:bg-btnHoverG focus:border-btnHoverG hover:border border disabled:text-btnDisable '
    >
      {props.children || 'button'}
    </button>
  );
};
