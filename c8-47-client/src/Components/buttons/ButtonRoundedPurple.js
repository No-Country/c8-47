import React from 'react'

export const ButtonRoundedPurple = (props) => {
  return (
    <button className=' dark:hover:text-black md:place-self-center  mr-28 md:mr-0 justify-self-center dark:bg-bgDarkMode dark:text-white dark:hover:bg-borderDarkmode dark:border-borderDarkmode font-Mon md:justify-self-center w-64 bg-white text-black font-medium rounded-3xl px-6 py-2 text-lg border-4 border-primario hover:bg-primario hover:text-white transition-all duration-300 ease-in-out '>
            {props.button || "Button"}
        </button>
  )
}
