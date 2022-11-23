import React from 'react'

export const ButtonGray = (props) => {
  return (
    <button className=' dark:disabled:text-btnDisable dark:focus:text-bgDarkMode dark:focus:bg-btnDisable dark:focus:border-btnDisable dark:hover:border-white dark:text-white font-Mon text-textColor border-transparent	transition-all duration-500 py-2 px-20 md:px-6  lg:px6 rounded-[10px] hover:border-textColor focus:bg-btnHoverG focus:border-btnHoverG hover:border border disabled:text-btnDisable'>
        {props.children || "button"}
    </button>
  )
}
