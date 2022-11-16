import React from 'react'

export const ButtonRoundedPurple = (props) => {
  return (
    <button className=' font-Mon md:justify-self-center w-64 bg-white text-black font-medium rounded-3xl px-6 py-2 self-start text-lg border-4 border-primario hover:bg-primario hover:text-white transition-all duration-300 ease-in-out '>
            {props.button || "Button"}
        </button>
  )
}
