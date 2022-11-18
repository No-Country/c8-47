import React from 'react'
import { ButtonRoundedPurple } from '../buttons/ButtonRoundedPurple'

// md:grid grid-cols-2 grid-rows-2

export const Feature = (props) => {
  return (
    <div className=' dark:text-white font-Mon md:justify-items-stretch md:place-items-gap-x-32 md:grid-cols-2 md:grid-rows-2 grid gap-5 gap-x-32 place-items-center	w-full pb-36' >
        
        <ButtonRoundedPurple button={props.button} />

            <div className=' dark:text-black row-span-2 flex flex-col justify-center items-center h-72 w-3/4 bg-slate-200 mt-6 '>
               {props.gif} 
            </div>

            <p className='md:w-2/4 md:justify-self-center w-3/4 text-center md:text-left	 '>
                {props.paragraph}
       
            </p>
        
    </div>
  )
}


// {/* <div className=' flex flex-row gap-x-32 justify-center w-full pb-16 ' >
// <div className=' flex flex-col justify-center gap-y-10 mb-14 '>
// <button className='  bg-white text-black font-medium rounded-3xl px-7 py-2 self-start text-lg border-4 border-violet-900 hover:bg-violet-900 hover:text-white transition ease-in-out '>
//     {props.button}
// </button>
//     <p className=' max-w-xs pt-10 pb-20'>
//         {props.paragraph}

//     </p>
// </div>
//     <div className=' flex flex-col justify-center items-center h-72 w-96 bg-slate-200 mt-16'>
//        {props.gif} 
//     </div>
// </div> */}
