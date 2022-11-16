import React from 'react'

export const ButtonPurple = (props) => {
  return (
    <button className=' font-Mon text-lg font-bold bg-primario text-white py-2 px-6 rounded md:ml-8 hover:bg-primarioH 
    duration-500 focus:bg-primarioP	disabled:bg-primarioD'>
      {props.children || "Button"}
    </button>
  )
}

